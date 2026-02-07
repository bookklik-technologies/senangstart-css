# Agents

This project uses a set of specialized skills and workflows to manage the development of SenangStart CSS.

## Skills

Skills are specialized knowledge domains and instructions for the agent to perform specific tasks.

- **[Compiler Development](file:///.agent/skills/compiler-development/SKILL.md)**: Understanding and extending the CLI compiler with parser, tokenizer, and CSS generators.
- **[JIT Engine Development](file:///.agent/skills/jit-engine/SKILL.md)**: Developing and extending the browser-based JIT CSS engine.
- **[SenangStart CSS Architecture](file:///.agent/skills/senangstart-architecture/SKILL.md)**: Understanding the core architecture and design patterns of the SenangStart CSS framework.
- **[Tailwind CSS Conversion](file:///.agent/skills/tailwind-conversion/SKILL.md)**: Converting Tailwind CSS to SenangStart CSS using the conversion engine.
- **[Add Utility](file:///.agent/skills/add-utility/SKILL.md)**: Add new CSS utilities to the framework with definitions, engine, docs, and tests.

## Workflows

Workflows are multi-step processes for common development tasks.

- **[/add-utility](file:///.agent/workflows/add-utility.md)**: Add new CSS utilities to the framework with definitions, engine, docs, and tests.
- **[/build](file:///.agent/workflows/build.md)**: Build distribution files and publish to npm.
- **[/dev](file:///.agent/workflows/dev.md)**: Start development server with hot reload for docs or CLI watch mode.
- **[/docs](file:///.agent/workflows/docs.md)**: Generate, build, and manage documentation from definitions.
- **[/test](file:///.agent/workflows/test.md)**: Run tests including unit, integration, sync, and coverage reports.

## Standards

- All skills must have a `SKILL.md` file in their respective directory under `.agent/skills/`.
- All workflows must be defined as `.md` files in `.agent/workflows/`.
- Use `// turbo` or `// turbo-all` in workflows to indicate steps that are safe to auto-run.
- Prefer `// turbo-all` for workflows where all commands are safe (e.g., build, test, docs).
