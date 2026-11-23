# Auto Service Advisor architecture

The browser uses Agora RTC for media and RTM for transcripts and Agent events. Next.js routes sign tokens and start or stop the managed Agent. The Invite route supplies the scenario prompt and uses the empty list from `lib/agent-tools.ts`.

The [workflow](lib/agent-config.ts) combines the scenario instructions with [fictional reference material](lib/scenario-knowledge.ts) and shared conversational guidance. [Presentation](lib/presentation.ts) provides the user-facing description and practice request.

The Agent keeps the current draft in conversational context. Do not request a VIN, plate number or contact details. Do not diagnose a fault, confirm recall status, invent prices, show available appointments or claim that a visit, tow, shuttle or repair was booked.

The canonical offline check is `pnpm run verify`. Live acceptance uses a configured Agora project and checks the prompt behavior in a browser call.
