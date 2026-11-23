# Agora Vehicle Service Demo

Use Node.js 24 and pnpm 9.15.9. Copy `env.local.example` to `.env.local` for local configuration. Keep the App Certificate server-side.

Keep the shared Top-10 token, invite, stop, RTC and RTM paths. Put scenario instructions in `lib/agent-config.ts`, fictional material in `lib/scenario-knowledge.ts`, and user-facing descriptions in `lib/presentation.ts`. The conversation-only release uses the empty list from `lib/agent-tools.ts`.

Run `pnpm run verify` after relevant changes. Document real voice results separately from offline verification. See [README.md](README.md) and [RECIPE.md](RECIPE.md).
