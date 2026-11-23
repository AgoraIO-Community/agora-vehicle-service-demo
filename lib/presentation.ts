import type { ScenarioPresentation } from '@/types/presentation';
export type { ScenarioPresentation } from '@/types/presentation';

export const presentation: ScenarioPresentation = {
  "id": "vehicle-service",
  "name": "Auto Service Advisor",
  "purpose": "Describe a vehicle issue and prepare a service visit request.",
  "summary": "Describe a vehicle issue and prepare a service visit request.",
  "featuresHeading": "In this conversation",
  "features": [
    {
      "emoji": "💬",
      "title": "Vehicle concerns"
    },
    {
      "emoji": "🎙️",
      "title": "Drop-off preferences"
    },
    {
      "emoji": "📝",
      "title": "Service request recap"
    }
  ],
  "builtWith": [
    "Agora Conversational AI",
    "Agents SDK",
    "Next.js"
  ],
  "startLabel": "Talk to a service advisor",
  "boundaryShort": "Voice practice with fictional data. Your result is a spoken draft.",
  "outcomes": [
    {
      "id": "helpful",
      "label": "The conversation helped"
    },
    {
      "id": "needs-guidance",
      "label": "I need more guidance"
    }
  ],
  "developer": {
    "runCommand": "pnpm install --frozen-lockfile\npnpm run doctor\npnpm run dev",
    "assistantPrompt": "Help me run the local Auto Service Advisor demo from this repository. Read README.md and RECIPE.md. Use Node.js 24 and pnpm 9.15.9. Help me configure my own Agora project in .env.local, keeping the App Certificate server-side. Run the documented local verification. For the voice check, try this request and then correct one detail: My 2021 hatchback rattles over bumps. Can I drop it off Tuesday morning? Report which checks ran.",
    "docsUrl": "https://docs.agora.io/en/ai/build/build-server-client",
    "sdkUrl": "https://github.com/AgoraIO/agora-agents-ts",
    "consoleUrl": "https://console.agora.io/",
    "cliUrl": "https://github.com/AgoraIO/cli",
    "extensionPoints": [
      {
        "title": "Change the conversation",
        "path": "lib/agent-config.ts"
      },
      {
        "title": "Choose models and voice",
        "path": "lib/runtime-profile.ts"
      },
      {
        "title": "Adapt scenario UI copy",
        "path": "lib/presentation.ts"
      }
    ],
    "createCommand": "cd agora-vehicle-service-demo",
    "testRequest": "My 2021 hatchback rattles over bumps. Can I drop it off Tuesday morning?"
  }
};

export function getScenarioPresentation(): ScenarioPresentation { return presentation; }
