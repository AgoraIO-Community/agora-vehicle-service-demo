# Agora Auto Service Advisor Demo

## 1. What you build

Describe a vehicle issue and prepare a service visit request.

## 2. Prerequisites

Use Node.js 24, pnpm 9.15.9 and an Agora project with Conversational AI enabled.

## 3. Configure the app

Copy `env.local.example` to `.env.local`. Enter the App ID and App Certificate in the fields listed in [README.md](README.md).

## 4. Run the app

Run `pnpm install --frozen-lockfile` and `pnpm dev`. Open the local page and allow microphone access.

## 5. Try a conversation

Say “My 2021 hatchback rattles over bumps. Can I drop it off Tuesday morning?” Then say “Make that Thursday afternoon, and I will wait at the shop.” Ask for a recap of the corrected draft.

## 6. Understand the boundary

The browser session uses fictional reference data and a spoken draft. Do not request a VIN, plate number or contact details. Do not diagnose a fault, confirm recall status, invent prices, show available appointments or claim that a visit, tow, shuttle or repair was booked.

## 7. Customize the scenario

Edit [the workflow](lib/agent-config.ts), [the fictional reference](lib/scenario-knowledge.ts) or [the UI copy](lib/presentation.ts).

## 8. Verify

Run `pnpm run verify`. Exercise the initial request and correction in a real browser call to validate speech behavior.
