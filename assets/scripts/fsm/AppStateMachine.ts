import {AbstractBaseStateMachine} from "db://assets/scripts/fsm/stateMatter/Abstract/AbstractBaseStateMachine";
import {AppContext} from "db://assets/scripts/fsm/AppContext";
import {AppEvents} from "db://assets/scripts/fsm/AppEvents";

export class AppStateMachine extends AbstractBaseStateMachine<AppContext, AppEvents>
{}