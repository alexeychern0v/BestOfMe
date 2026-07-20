import { Redis } from "@upstash/redis";

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export async function rateLimitLogin(req, res, next) {
    const key = `login_attempts:${req.body.email}`;
    const attempts = await redis.incr(key);
    if (attempts === 1) await redis.expire(key, 900); // 15 min TTL
    if (attempts > 5) {
        return res.status(429).json({ error: "Too many attempts, try again in 15 minutes" });
    }
    next();
}