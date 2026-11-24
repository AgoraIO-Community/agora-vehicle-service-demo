# Agora Auto Service Advisor Demo

[English](README.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md)

![Auto Service Advisor recipe cover](docs/recipe-cover.webp)

描述车辆异常、选择到店时间和等候方式，然后听取维保请求草稿。 本演示使用虚构资料，对话结果以口头草稿为准。

## 本地运行

准备 Node.js 24、pnpm 9.15.9 和已启用 Agora Conversational AI 的项目。在启动前，将 App ID 和 App Certificate 写入 `.env.local` 中的 `NEXT_PUBLIC_AGORA_APP_ID` 和 `NEXT_AGORA_APP_CERTIFICATE`。App Certificate 仅供服务端使用。

```bash
cp env.local.example .env.local
pnpm install --frozen-lockfile
pnpm run doctor
pnpm dev
```

打开终端显示的本地地址，允许浏览器使用麦克风。

## 试用与验证

试说「My 2021 hatchback rattles over bumps. Can I drop it off Tuesday morning?」，再把时间改为周四下午。 最后请助手复述修改后的草稿。

用 `pnpm run verify` 验证模板、模拟 API 和生产构建。用实际浏览器通话验证语音行为。场景说明见 [RECIPE.md](RECIPE.md)。维护说明见 [npm 和 Vercel 配置](https://github.com/littleDogWang/agora-vehicle-service-demo/blob/private/docs/npm-release.md)。
