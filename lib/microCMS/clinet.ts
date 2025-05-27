import { createClient } from "microcms-js-sdk";

// 環境変数が設定されていない場合のデフォルト値
const serviceDomain = process.env.NEXT_PUBLIC_MICROCMS_DOMAIN || 'default';
const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY || 'default';

export const client = createClient({
  serviceDomain,
  apiKey,
});
