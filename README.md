# Project EotTest

This project is a game developed using the ECS (Entity Component System) architecture based on NovaECS and Cocos
Creator.

## Installation

1. Install project dependencies:
   ```bash
   npm install
   ```

2. Export types from Cocos Creator:
   - Open Cocos Creator.
   - Go to the `Developer` menu.
   - Select `Export.d.ts`.

## Project Structure

- **assets/scripts/ecs/components/**: ECS components such as `FruitComponent`, `MovementComponent`, `BasketComponent`.
- **assets/scripts/ecs/systems/**: ECS systems such as `SpawnSystem`, `GameStateSystem`, `BasketMovementSystem`.
- **assets/scripts/factories/**: Factories for creating game entities.
- **assets/scripts/state/**: Game state management and FSM (Finite State Machine).
- **assets/scripts/interfaces/**: Interfaces for interacting with the game state.

## Core Concepts

### ECS Architecture

The project uses ECS architecture to separate data and logic. This allows for easy expansion and maintenance of the
project.

- **Components**: Contain data for entities.
- **Systems**: Process game logic using components.
- **Factories**: Create and initialize entities with the necessary components.

### GameEngine

`GameEngine` manages all systems and game state. It implements the Singleton pattern to ensure a single instance of the
engine in the game.

## Running the Game

1. Ensure all dependencies are installed and types are exported.
2. Run the game through Cocos Creator.

## License

This project is licensed under the MIT License.