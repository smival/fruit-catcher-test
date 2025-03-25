System.register("chunks:///_virtual/AbstractBaseState.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "eda3cYVSUBKWLOcwDkSOff7", "AbstractBaseState", undefined);
      /**
       * Abstract class that define the basic behavior of machine state
       * @TypeParameter TContext - a state machine context class.
       */
      var AbstractBaseState = exports('AbstractBaseState', /*#__PURE__*/function () {
        /**
         * Initialize the new instance of the AbstractBaseState with context
         * @param pContext - A state machine context
         */
        function AbstractBaseState(pContext) {
          /**
           * State machine context
           * @protected
           */
          this._context = void 0;
          /**
           * State machine transitions
           * @protected
           */
          this._transitions = [];
          this._context = pContext;
        }

        /**
         * Initialize the new instance of the AbstractBaseState
         */
        var _proto = AbstractBaseState.prototype;
        /**
         * The method that state machine calling before entering the state
         * @constructor
         */
        _proto.BeforeEnter = function BeforeEnter() {
        }

        /**
         * The method that state machine calling once this state has been
         * set but before the main execution
         * @constructor
         */;
        _proto.AfterEnter = function AfterEnter() {
        }

        /**
         * The method that state machine calling once this state has been set as the
         * current state and callbacks BeforeEnter and AfterEnter finished.
         * @constructor
         */;
        _proto.Execute = function Execute() {
          this._context.StateMachine.MoveNext();
        }

        /**
         * The method that state machine calling right before changing
         * the current state
         * @constructor
         */;
        _proto.BeforeExit = function BeforeExit() {
        }

        /**
         * The method that state machine calling right after changing the current state
         * @constructor
         */;
        _proto.AfterExit = function AfterExit() {
        }

        /**
         * Add transition to the list of transitions
         * @param pTransition - A transition object to save in the list of state transitions
         * @constructor
         */;
        _proto.AddTransition = function AddTransition(pTransition) {
          this._transitions.push(pTransition);
        }

        /**
         * Remove a transition object from the list of state transitions
         * @param pTransition - A transition object to remove from the list of state transitions
         * @constructor
         */;
        _proto.RemoveTransition = function RemoveTransition(pTransition) {
          var index = this._transitions.indexOf(pTransition, 0);
          if (index > -1) {
            this._transitions.splice(index, 1);
          }
        };
        _createClass(AbstractBaseState, [{
          key: "Context",
          get: function get() {
            return this._context;
          }

          /**
           * Context property setter
           * @param pContext - A state machine context
           */,
          set: function set(pContext) {
            this._context = pContext;
          }

          /**
           * A list of transitions for current state
           * @constructor
           */
        }, {
          key: "Transitions",
          get: function get() {
            return this._transitions;
          }
        }]);
        return AbstractBaseState;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AbstractBaseStateMachine.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TransitionBehaviourEnum.ts', './WrongMachineStateException.ts', './InvalidTransitionException.ts', './NullInitialStateException.ts', './NullStateException.ts', './WrongStateIndexException.ts', './AmbiguousInitialStateException.ts', './StateNotFoundException.ts', './StateMachineBehaviorEnum.ts', './StateTransition.ts', './AbstractEventDispatcher.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, TransitionBehaviorEnum,
      WrongMachineStateException, InvalidTransitionException, NullInitialStateException, NullStateException,
      WrongStateIndexException, AmbiguousInitialStateException, StateNotFoundException, StateMachineBehaviorEnum,
      StateTransition, AbstractEventDispatcher;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      TransitionBehaviorEnum = module.TransitionBehaviorEnum;
    }, function (module) {
      WrongMachineStateException = module.WrongMachineStateException;
    }, function (module) {
      InvalidTransitionException = module.InvalidTransitionException;
    }, function (module) {
      NullInitialStateException = module.NullInitialStateException;
    }, function (module) {
      NullStateException = module.NullStateException;
    }, function (module) {
      WrongStateIndexException = module.WrongStateIndexException;
    }, function (module) {
      AmbiguousInitialStateException = module.AmbiguousInitialStateException;
    }, function (module) {
      StateNotFoundException = module.StateNotFoundException;
    }, function (module) {
      StateMachineBehaviorEnum = module.StateMachineBehaviorEnum;
    }, function (module) {
      StateTransition = module.StateTransition;
    }, function (module) {
      AbstractEventDispatcher = module.AbstractEventDispatcher;
    }],
    execute: function () {
      cclegacy._RF.push({}, "da188+xldZCja5t17K7uNIO", "AbstractBaseStateMachine", undefined);

      /**
       * Abstract class that define the basic behavior of state machine.
       * @TypeParameter TContext - a state machine context class.
       */
      var AbstractBaseStateMachine = exports('AbstractBaseStateMachine', /*#__PURE__*/function (_AbstractEventDispatc) {
        _inheritsLoose(AbstractBaseStateMachine, _AbstractEventDispatc);

        /**
         * Initialize the new instance of the AbstractBaseStateMachine
         */
        function AbstractBaseStateMachine(pContext, pInitialState) {
          var _this;
          if (pContext === void 0) {
            pContext = null;
          }
          if (pInitialState === void 0) {
            pInitialState = null;
          }
          _this = _AbstractEventDispatc.call(this) || this;
          /**
           * The list fo options for current state machine.
           * @protected
           */
          _this._options = new Array();
          /**
           * A collection of all possible states for state machine.
           * @protected
           */
          _this._states = new Array();
          /**
           * A list of transitions for this state machine.
           * @protected
           */
          _this._transitions = new Array();
          /**
           * Initial state of the state machine.
           * @protected
           */
          _this._initialState = null;
          /**
           * The current state for state machine.
           * @protected
           */
          _this._currentState = null;
          /**
           * The background field for Context property.
           * @protected
           */
          _this._context = void 0;
          _this._context = pContext;
          if (pInitialState != null) {
            _this.AddState(pInitialState, true);
          }
          return _this;
        }

        /**
         * A state machine context getter.
         * @constructor
         */
        var _proto = AbstractBaseStateMachine.prototype;
        /**
         * Add state to the state machine collection
         * @param pState - An IBaseState object to add into the list of states
         * @param pSetAsInitial - Set a newly added state as a initial one.
         * @constructor
         */
        _proto.AddState = function AddState(pState, pSetAsInitial) {
          if (pSetAsInitial === void 0) {
            pSetAsInitial = false;
          }
          this._states.push(pState);
          if (pSetAsInitial) {
            // Set the passed state as initial one
            this.SetInitialState(pState);
          }
          return this._states.length - 1; // Return the last index of the state (currently added state)
        }

        /**
         * Create transition between states in the state machine.
         * @param pFromState - A state from which this transition will start.
         * @param pToState - A target state that will be applied to the state machine.
         * @param pCondition - A function that will be called in order to analyse the possibility to move through the transition.
         * @param pOrder - The evaluation order that defines what transition will be analyzed first.
         * @param pBehaviorEnumAfterTransition - Defines state machine behavior after the completion the transition.
         * In case if true - state machine will not call Execute callback after the transition.
         * @remarks In spite of the value of the pBehaviorEnumAfterTransition all transition callbacks such as BeforeEnter, BeforeExit, etc will be called.
         * @constructor
         */;
        _proto.AddTransition = function AddTransition(pFromState, pToState, pCondition, pOrder, pBehaviorEnumAfterTransition) {
          if (pOrder === void 0) {
            pOrder = 0;
          }
          if (pBehaviorEnumAfterTransition === void 0) {
            pBehaviorEnumAfterTransition = TransitionBehaviorEnum.CONTINUE_AFTER_TRANSITION;
          }
          var transition = new StateTransition(pFromState, pToState, pCondition, pOrder, pBehaviorEnumAfterTransition);
          this._transitions.push(transition);
          return transition;
        }

        /**
         * Check the current state in state machine and return true in case if this state is initial one.
         * @constructor
         */;
        _proto.InInitialState = function InInitialState() {
          return this._currentState == this._initialState;
        };
        _proto.IsState = function IsState(state) {
          return this._currentState === state;
        }

        /**
         * Add state to the state machine collection.
         * @exception WrongMachineStateException - Occurs when current state is null.
         * @exception InvalidTransitionException - Occurs when transition checks is failed.
         * @constructor
         */;
        _proto.MoveNext = function MoveNext() {
          if (this._currentState == null) {
            throw new WrongMachineStateException("The current state in state machine is null!");
          }
          for (var _iterator = _createForOfIteratorHelperLoose(this._currentState.Transitions), _step; !(_step = _iterator()).done;) {
            var transition = _step.value;
            if (!this.CanExecuteTransition(transition)) continue;
            // All checks have been passed - start transition
            this.PerformTransition(transition);
            return;
          }
        }

        /**
         * Remove a state from the list of states.
         * @param pState - A state machine state object.
         * @constructor
         */;
        _proto.RemoveState = function RemoveState(pState) {
          var index = this._states.indexOf(pState, 0);
          if (index > -1) {
            this._states.splice(index, 1);
          } // todo throw an exception for false?
        }

        /**
         * Remove transition from the list of transitions and related states.
         * @param pTransition - An object of transition to remove.
         * @constructor
         */;
        _proto.RemoveTransition = function RemoveTransition(pTransition) {
          var index = this._transitions.indexOf(pTransition, 0);
          if (index > -1) {
            this._transitions.splice(index, 1);
          } // todo throw an exception for false?
          pTransition.RemoveFromStates();
        }

        /**
         * Reset the processing state of the state machine to initial one
         * and optionally reset the context of the state machine.
         * @param pResetTheContext - Should the method reset the context of the state machine or not.
         * @constructor
         */;
        _proto.Reset = function Reset(pResetTheContext) {
          if (pResetTheContext) {
            var _this$_context;
            (_this$_context = this._context) == null || _this$_context.Reset();
          }
          if (this._initialState != null) {
            this.ExecuteStateChangeLifecycle(this._initialState);
            return;
          }
          throw new NullInitialStateException("The initial state of state machine is null, please call the SetInitialState before teh call Run method");
        }

        /**
         * Start the state machine processing chain.
         * @exception NullStateException - Occur when the initial state of state machine is null.
         * @constructor
         */;
        _proto.Run = function Run() {
          if (this._currentState == null) {
            throw new NullStateException("The current state of state machine is null, please set the state before the call Run method");
          }
          this._currentState.Execute();
        }

        /**
         * Set the initial state by index of the state in the list of states.
         * @param pStateIndex - A state index in the list of states.
         * @remarks During the process of the setting state up this method will call the
         * BeforeEnter and AfterEnter callbacks.
         * @exception WrongStateIndexException - Occurs when the index passed as an argument is not presented in the list of states.
         * @constructor
         */;
        _proto.SetInitialStateByIndex = function SetInitialStateByIndex(pStateIndex) {
          if (pStateIndex < 0 || pStateIndex >= this._states.length) {
            throw new WrongStateIndexException("The index passed as an argument is not presented in the list of states.");
          }
          var state = this._states[pStateIndex];
          this._initialState = state;
          //todo possible could make a problem with null previous state
          this.ExecuteStateChangeLifecycle(state);
        }

        /**
         * Set the initial state by instance of the state.
         * @param pState - An instance of state.
         * @param pResetContextData - Is it necessary to reset a state machine context data or not.
         * @exception WrongMachineStateException - Occurs when the initial state is not presented in the list of states.
         * @exception AmbiguousInitialStateException - Occurs when someone is trying to set up the initial state via calling
         * AddState on the state machine when the initial state already set up previously.
         * @constructor
         */;
        _proto.SetInitialState = function SetInitialState(pState, pResetContextData) {
          if (pResetContextData === void 0) {
            pResetContextData = false;
          }
          if (this._initialState != null) {
            throw new AmbiguousInitialStateException("Trying to setup the initial state via calling AddState on " + "the state machine when the initial state already set up previously.");
          }
          var index = this._states.indexOf(pState, 0);
          if (index == -1) {
            throw new StateNotFoundException("The initial state is not presented in the list of states.");
          }
          this._initialState = this._states[index];
          this.Reset(pResetContextData);
        }

        /**
         * Checking whatever state is enabled in the state machine.
         * @param pMachineBehaviourOption - A state machine behaviour option.
         * @constructor
         */;
        _proto.IsBehaviourOptionSet = function IsBehaviourOptionSet(pMachineBehaviourOption) {
          var index = -1;
          this._options.forEach(function (pOprion, pIndex) {
            if (pOprion.toFixed() == pMachineBehaviourOption.toFixed()) index = pIndex;
          });
          return index > -1;
        }

        /**
         * Set the behaviour option to the state machine.
         * @param pMachineBehaviourOption - A state machine behaviour option.
         * @constructor
         */;
        _proto.SetBehaviourOption = function SetBehaviourOption(pMachineBehaviourOption) {
          if (!this.IsBehaviourOptionSet(pMachineBehaviourOption)) {
            this._options.push(pMachineBehaviourOption);
          }
        }

        /**
         * Unset the specific option from the state machine behaviour.
         * @param pMachineBehaviourOption - A state machine behaviour option.
         * @constructor
         */;
        _proto.UnsetBehaviourOption = function UnsetBehaviourOption(pMachineBehaviourOption) {
          if (!this.IsBehaviourOptionSet(pMachineBehaviourOption)) {
            var index = this._options.indexOf(pMachineBehaviourOption, 0);
            if (index > -1) {
              this._options.splice(index, 1);
            } // todo throw an exception for false?
          }
        };

        _proto.GetCurrentState = function GetCurrentState() {
          return this._currentState;
        }

        /**
         * Checking the given transition and return the possibility to move through one.
         * @param pTransition - An transition to examine.
         * @param pStrictCheck - Define the behaviour of checking, in case if true throw an WrongMachineStateException in case if current state
         * of the state machine is not the one we have in the initial state for transition.
         * @exception WrongMachineStateException - Occurs if the pStrictCheck have been passed as true and current state
         *            is not the initial one from the transition.
         * @constructor
         * @protected
         */;
        _proto.CanExecuteTransition = function CanExecuteTransition(pTransition, pStrictCheck) {
          if (pStrictCheck === void 0) {
            pStrictCheck = false;
          }
          // Check the activity of state
          if (!pTransition.IsActive) return false; // Skip the transition in case if it is not Active

          // Check the initial state of transition to prevent undefined transitions
          if (pTransition.FromState != this._currentState) {
            if (!pStrictCheck) {
              return false;
            }
            throw new InvalidTransitionException("Current state is not the initial state of executed transaction." + " Current state: {_currentState?.GetType().Name}, initial state of transition: " + typeof pTransition.FromState);
          }

          // Check the conditions and Skip the transition in case if the condition is not allow us to pas thru
          return pTransition.CanExecute(this._context);
        }

        /**
         * Execute a transition procedure and define the sequence of transition callbacks.
         * @param pTransition - A transition object that state machine will use for performing transition.
         * @constructor
         * @protected
         */;
        _proto.PerformTransition = function PerformTransition(pTransition) {
          var _this$_currentState;
          this.ExecuteStateChangeLifecycle(pTransition.ToState);
          if (this.IsBehaviourOptionSet(StateMachineBehaviorEnum.STOP_ON_INITIAL_STATE) && pTransition.ToState == this._initialState && this._currentState == this._initialState) {
            // We should not call execute if we have set the STOP_ON_INITIAL_STATE,
            // and we are already in it.
            return;
          }
          if (pTransition.AfterTransitionBehaviorEnum.toFixed() == TransitionBehaviorEnum.STOP_AFTER_TRANSITION.toFixed()) {
            return;
          }
          (_this$_currentState = this._currentState) == null || _this$_currentState.Execute();
        }

        /**k
         * Make transition of the state from current one to given one.
         * @param pTargetState - The target state to transit to.
         * @remarks - The call of this method is idempotent
         * @constructor
         * @protected
         */;
        _proto.ExecuteStateChangeLifecycle = function ExecuteStateChangeLifecycle(pTargetState) {
          var _this$_currentState2, _this$_currentState3;
          if (this._currentState == pTargetState) {
            return; // Let's make a call of this method is idempotent
          }

          var oldState = this._currentState;
          //Make before callbacks
          (_this$_currentState2 = this._currentState) == null || _this$_currentState2.BeforeExit();
          pTargetState == null || pTargetState.BeforeEnter();
          // Transition itself
          this._currentState = pTargetState;
          // make after callbacks
          (_this$_currentState3 = this._currentState) == null || _this$_currentState3.AfterEnter();
          oldState == null || oldState.AfterExit();
        };
        _createClass(AbstractBaseStateMachine, [{
          key: "Context",
          get: function get() {
            return this._context;
          }

          /**
           * A state machine context setter.
           * @param pContext - A state machine context object.
           * @constructor
           */,
          set: function set(pContext) {
            this._context = pContext;
          }
        }, {
          key: "CurrentState",
          get: function get() {
            return this._currentState;
          }
        }]);
        return AbstractBaseStateMachine;
      }(AbstractEventDispatcher));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AbstractEventDispatcher.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1d521+I4yxOsKhLzt38slQy", "AbstractEventDispatcher", undefined);
      var AbstractEventDispatcher = exports('AbstractEventDispatcher', /*#__PURE__*/function (_Component) {
        _inheritsLoose(AbstractEventDispatcher, _Component);

        function AbstractEventDispatcher() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.callbacks = new Map();
          _this.callbacksForDelete = new Map();
          _this.callbacksForAdd = new Map();
          _this.InDispatch = false;
          return _this;
        }

        var _proto = AbstractEventDispatcher.prototype;
        _proto.removeAllListeners = function removeAllListeners() {
          this.callbacks = new Map();
          this.callbacksForDelete = new Map();
          this.callbacksForAdd = new Map();
        };
        _proto.addEventListener = function addEventListener(pEvent, pCallback) {
          var cbArray = this.callbacks;
          if (this.InDispatch) {
            if (this.callbacksForAdd.size > 0) cbArray = this.callbacksForAdd;
          }
          if (!cbArray.has(pEvent)) {
            cbArray.set(pEvent, [pCallback]);
            return;
          }
          cbArray.get(pEvent).push(pCallback);
        };
        _proto.removeEventListener = function removeEventListener(pEvent, pCallback) {
          if (!this.callbacks.has(pEvent)) {
            return;
          }
          if (this.callbacksForDelete.has(pEvent)) {
            var eventCallBacks = this.callbacksForDelete.get(pEvent);
            eventCallBacks.push(pCallback);
            this.callbacksForDelete.set(pEvent, eventCallBacks);
          } else {
            this.callbacksForDelete.set(pEvent, [pCallback]);
          }
          if (this.InDispatch) {
            return;
          }
          this.deleteCallbacks();
        };
        _proto.deleteCallbacks = function deleteCallbacks() {
          var _this2 = this;
          if (this.callbacksForDelete.size <= 0) {
            return;
          }
          this.callbacksForDelete.forEach(function (pCallbackToDeleteArray, pEventName) {
            var callbackArray = _this2.callbacks.get(pEventName);
            if (callbackArray && callbackArray.length > 0) {
              var callbacks = callbackArray.filter(function (pCallback) {
                return !(pCallbackToDeleteArray != null && pCallbackToDeleteArray.some(function (pCallbackToDelete) {
                  return pCallbackToDelete === pCallback;
                }));
              });
              _this2.callbacks.set(pEventName, callbacks);
            }
          });
          this.callbacksForDelete.clear();
        };
        _proto.addCallbacks = function addCallbacks() {
          var _this3 = this;
          if (this.callbacksForAdd.size <= 0) {
            return;
          }
          this.callbacksForAdd.forEach(function (pCallbacksToAddArray, pEventName) {
            var callbackArray = _this3.callbacks.get(pEventName);
            if (callbackArray && callbackArray.length > 0) {
              var callbacksToAdd = pCallbacksToAddArray.filter(function (pCallback) {
                return callbackArray == null ? void 0 : callbackArray.some(function (pCallbackToAdd) {
                  return pCallbackToAdd === pCallback;
                });
              });
              if (callbackArray.length > 0) {
                _this3.callbacks.set(pEventName, [].concat(callbackArray, callbacksToAdd));
              }
            } else {
              _this3.callbacks.set(pEventName, pCallbacksToAddArray);
            }
          });
          this.callbacksForAdd.clear();
        };
        _proto.dispatch = function dispatch(pEvent, pData) {
          this.InDispatch = true;
          if (!this.callbacks.has(pEvent)) {
            return;
          }
          var callbackArray = this.callbacks.get(pEvent);
          for (var i = 0; i < callbackArray.length; i++) {
            var callback = callbackArray[i];
            callback(pData);
          }
          this.InDispatch = false;
          this.addCallbacks();
          this.deleteCallbacks();
        };
        return AbstractEventDispatcher;
      }(Component));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AbstractPool.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "00a4fEWWaBBV6QF+h0NftGw", "AbstractPool", undefined);
      var AbstractPool = exports('AbstractPool', /*#__PURE__*/function () {
        function AbstractPool() {
          this.objects = [];
        }

        var _proto = AbstractPool.prototype;
        _proto.init = function init(pSize) {
          for (var i = 0; i < pSize; i++) {
            this.release(this.createNewInstance());
          }
          return this;
        };
        _proto.obtain = function obtain() {
          return this.objects.pop() || this.createNewInstance();
        };
        _proto.release = function release(pObject) {
          this.objects.push(pObject);
        };
        return AbstractPool;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AbstractStateMachineContext.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1a8b5z1nihBBI4JBtc/EnUA", "AbstractStateMachineContext", undefined);
      /**
       * Abstract and basic state machine.
       * @TypeParameter TContext - a state machine context class.
       */
      var AbstractStateMachineContext = exports('AbstractStateMachineContext', /*#__PURE__*/function () {
        function AbstractStateMachineContext(pStateMachine) {
          this._stateMachine = void 0;
          this._stateMachine = pStateMachine;
        }

        var _proto = AbstractStateMachineContext.prototype;
        _proto.Reset = function Reset()
            // eslint-disable-next-line @typescript-eslint/no-empty-function
        {
        };
        _createClass(AbstractStateMachineContext, [{
          key: "StateMachine",
          get: function get() {
            return this._stateMachine;
          }
        }]);
        return AbstractStateMachineContext;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AbstractTransition.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TransitionBehaviourEnum.ts', './NullStateException.ts'], function (exports) {
  var _createClass, cclegacy, TransitionBehaviorEnum, NullStateException;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      TransitionBehaviorEnum = module.TransitionBehaviorEnum;
    }, function (module) {
      NullStateException = module.NullStateException;
    }],
    execute: function () {
      cclegacy._RF.push({}, "218934Ts7JC0IrrQEJIXTbY", "AbstractTransition", undefined);

      /**
       * An abstract implementation of the IBaseTransition
       * @TypeParameter TContext - a state machine context class.
       */
      var AbstractTransition = exports('AbstractTransition', /*#__PURE__*/function () {
        /**
         * Initializes a new instance of the AbstractTransition class and setup
         * @param pFromState - The initial state of transition.
         * @param pToState - The target state of transition.
         * @param pCondition - A function that must return bool and indicates the availability of passing transition.
         * @param pOrder - An evaluation order.
         * @param pAfterTransitionBehaviorEnum - State machine behavior execution after performing transition through the state.
         * @remarks The default behavior for the state machine after transaction is
         * CONTINUE_AFTER_TRANSITION witch will continue the execution (call the Execute callback) after transaction.
         */
        function AbstractTransition(pFromState, pToState, pCondition, pOrder, pAfterTransitionBehaviorEnum) {
          if (pCondition === void 0) {
            pCondition = null;
          }
          if (pOrder === void 0) {
            pOrder = 0;
          }
          if (pAfterTransitionBehaviorEnum === void 0) {
            pAfterTransitionBehaviorEnum = TransitionBehaviorEnum.CONTINUE_AFTER_TRANSITION;
          }
          /**
           * The evaluation order for this transition, the default value is 0.
           * @protected
           */
          this._order = 0;
          this._condition = null;
          this._transitionBehavior = TransitionBehaviorEnum.CONTINUE_AFTER_TRANSITION;
          /**
           * The initial state of transition.
           * In case if this parameter will not be equal to the state machine current state
           * in moment of calling the method CanExecute, state machine can rise an exception.
           * @protected
           */
          this._fromState = void 0;
          /**
           * The target state of transition.
           * @protected
           */
          this._toState = void 0;
          this._isActive = true;
          this._fromState = pFromState;
          this._toState = pToState;
          this._condition = pCondition;
          this._order = pOrder;
          this._transitionBehavior = pAfterTransitionBehaviorEnum;
          this._fromState.AddTransition(this);
          this._toState.AddTransition(this);
        }

        /**
         * State machine execution behavior after performing transition through the state.
         * @constructor
         */
        var _proto = AbstractTransition.prototype;
        /**
         * Define possibility to execute transition between defined states.
         * @param pContext - A state machine context to analyse.
         * @constructor
         */
        _proto.CanExecute = function CanExecute(pContext) {
          if (pContext == null) {
            throw new NullStateException('The state passed to the method is null!');
          }

          // If we haven't set up condition - just pass the transition
          if (this.Condition == null) {
            return true;
          }
          var result = this.Condition.call(this, pContext);
          // In case if the result is true - pass the condition
          return result || result == null;
        }

        /**
         * Remove the current transition from the states (FromState, ToState).
         * @constructor
         */;
        _proto.RemoveFromStates = function RemoveFromStates() {
          if (this.FromState != null) {
            this.FromState.RemoveTransition(this);
          }
          if (this.ToState != null) {
            this.ToState.RemoveTransition(this);
          }
        };
        _createClass(AbstractTransition, [{
          key: "AfterTransitionBehaviorEnum",
          get: function get() {
            return this._transitionBehavior;
          }

          /**
           * State machine execution behavior after performing transition through the state.
           * @param pValue - An enumeration value that represents the behavior after
           * performing transition through the state.
           * @constructor
           */,
          set: function set(pValue) {
            this._transitionBehavior = pValue;
          }

          /**
           * A condition function, that defines availability of transition and returns
           * the Boolean that representing the availability of transaction to pass.
           * @constructor
           */
        }, {
          key: "Condition",
          get: function get() {
            return this._condition;
          }

          /**
           * A condition function, that defines availability of transition and returns
           * the Boolean that representing the availability of transaction to pass.
           * @param pCondition - A condition callback that will be used as pass through guard.
           * @constructor
           */,
          set: function set(pCondition) {
            this._condition = pCondition;
          }

          /**
           * The initial state of transition.
           * @remarks In case if this parameter will not be equal to the state machine
           * current state in moment of calling the method CanExecute, state machine
           * can rise an exception.
           * @constructor
           */
        }, {
          key: "FromState",
          get: function get() {
            return this._fromState;
          }

          /**
           * The initial state of transition.
           * @param pState - An initial state of transition.
           * @remarks In case if this parameter will not be equal to the state machine
           * current state in moment of calling the method CanExecute, state machine
           * can rise an exception.
           * @constructor
           */,
          set: function set(pState) {
            this._fromState = pState;
          }

          /**
           * Represents tha state of the transition: Is this transition active or not.
           * @constructor
           */
        }, {
          key: "IsActive",
          get: function get() {
            return this._isActive;
          }

          /**
           * Represents tha state of the transition: Is this transition active or not.
           * @param pValue - An activity of the transition: true - active, false - not active.
           * @constructor
           */,
          set: function set(pValue) {
            this._isActive = pValue;
          }

          /**
           * The evaluation order for this transition, the default value is 0.
           * @constructor
           */
        }, {
          key: "Order",
          get: function get() {
            return this._order;
          }

          /**
           * The evaluation order for this transition, the default value is 0.
           * @param pOrder - an order value.
           * @constructor
           */,
          set: function set(pOrder) {
            this._order = pOrder;
          }

          /**
           * The target state of transition.
           * @constructor
           */
        }, {
          key: "ToState",
          get: function get() {
            return this._toState;
          }

          /**
           * The target state of transition.
           * @param pToState - A target stare to move to.
           * @constructor
           */,
          set: function set(pToState) {
            this._toState = pToState;
          }
        }]);
        return AbstractTransition;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AmbiguousInitialStateException.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _assertThisInitialized, _wrapNativeSuper, cclegacy;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _wrapNativeSuper = module.wrapNativeSuper;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0b8344AGN5AHoejFreo9O5H", "AmbiguousInitialStateException", undefined);
      /**
       * Occurs when state machine have more than one initial state and can't resolve
       * the operation (add state, remove state, reset etc).
       */
      var AmbiguousInitialStateException = exports('AmbiguousInitialStateException', /*#__PURE__*/function (_Error) {
        _inheritsLoose(AmbiguousInitialStateException, _Error);

        /**
         * Initializes a new instance of the AmbiguousInitialStateException class.
         * @param pErrorMessage - The message that describes the error.
         */
        function AmbiguousInitialStateException(pErrorMessage) {
          var _this;
          _this = _Error.call(this, pErrorMessage) || this;
          // It's worth mentioning that Object.setPrototypeOf needs to be called
          // immediately after any super(...) calls.

          // Set the prototype explicitly
          Object.setPrototypeOf(_assertThisInitialized(_this), AmbiguousInitialStateException.prototype);
          return _this;
        }

        return AmbiguousInitialStateException;
      }( /*#__PURE__*/_wrapNativeSuper(Error)));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AnimationsUtils.ts", ['cc'], function (exports) {
  var cclegacy, director, Animation;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      Animation = module.Animation;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1e561/oVgRJy7XL1Svz39N4", "AnimationsUtils", undefined);
      var AnimationsUtils = exports('AnimationsUtils', /*#__PURE__*/function () {
        function AnimationsUtils() {
        }

        AnimationsUtils.playSpine = function playSpine(pSpine, pAnimationName, pLoop) {
          if (pLoop === void 0) {
            pLoop = false;
          }
          pSpine.paused = false;
          return new Promise(function (resolve) {
            // hack to be sure skeleton will be added to render
            director._nodeActivator.activateNode(pSpine.node, true);
            pSpine.node.active = true;
            if (pSpine.findAnimation(pAnimationName) == null) {
              console.warn("----> Spine Animation not found", pAnimationName);
              resolve();
            }
            pSpine.setAnimation(0, pAnimationName, pLoop);
            if (pLoop) {
              resolve();
            } else {
              AnimationsUtils.spinePromiseResolves.set(pSpine, resolve);
              pSpine.setCompleteListener(function (res) {
                pSpine.setCompleteListener(null);
                AnimationsUtils.spinePromiseResolves["delete"](pSpine);
                resolve(res.animation);
              });
            }
          });
        };
        AnimationsUtils.playAnimation = function playAnimation(pNode, pAnimationName) {
          if (pAnimationName === void 0) {
            pAnimationName = null;
          }
          var animation = pNode.getComponent(Animation);
          if (!animation) {
            console.warn("----> Timeline Animation component not found for node", pNode.name);
            return;
          }
          if (pAnimationName && !animation.clips.find(function (clip) {
            return clip.name == pAnimationName;
          })) {
            console.warn("----> Timeline Animation name not found", pAnimationName);
            return;
          }
          return new Promise(function (resolve) {
            AnimationsUtils.animationPromiseResolves.set(animation, resolve);
            animation.once(Animation.EventType.FINISHED, function () {
              AnimationsUtils.animationPromiseResolves["delete"](animation);
              resolve();
            });
            animation.play(pAnimationName);
          });
        };
        return AnimationsUtils;
      }());
      AnimationsUtils.spinePromiseResolves = new Map();
      AnimationsUtils.animationPromiseResolves = new Map();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppContext.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TerminableContext.ts'], function (exports) {
  var _inheritsLoose, cclegacy, TerminableContext;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      TerminableContext = module.TerminableContext;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ff56f2hO9tJN5J06kOtX28t", "AppContext", undefined);
      var AppContext = exports('AppContext', /*#__PURE__*/function (_TerminableContext) {
        _inheritsLoose(AppContext, _TerminableContext);

        function AppContext() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _TerminableContext.call.apply(_TerminableContext, [this].concat(args)) || this;
          _this.config = void 0;
          _this.locale = void 0;
          _this.starterNode = void 0;
          _this.gameUI = void 0;
          _this.toastNode = void 0;
          _this.toastLabel = void 0;
          _this.onUpdate = null;
          return _this;
        }

        return AppContext;
      }(TerminableContext));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppEvents.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3a7024BsmFOw6+K5hCKcY+m", "AppEvents", undefined);
      var AppEvents = exports('AppEvents', /*#__PURE__*/function (AppEvents) {
        return AppEvents;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppIndex.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AppStateMachine.ts', './AppContext.ts', './LoadingState.ts', './IntroState.ts', './PlayGameState.ts', './GameOverState.ts', './NodeNames.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, find, Label, Component, AppStateMachine, AppContext, LoadingState,
      IntroState, PlayGameState, GameOverState, NodeNames;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      find = module.find;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      AppStateMachine = module.AppStateMachine;
    }, function (module) {
      AppContext = module.AppContext;
    }, function (module) {
      LoadingState = module.LoadingState;
    }, function (module) {
      IntroState = module.IntroState;
    }, function (module) {
      PlayGameState = module.PlayGameState;
    }, function (module) {
      GameOverState = module.GameOverState;
    }, function (module) {
      NodeNames = module.NodeNames;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "0bfc725E/pJQ62BsaJcct7H", "AppIndex", undefined);
      var ccclass = _decorator.ccclass,
          menu = _decorator.menu;
      var AppIndex = exports('AppIndex', (_dec = ccclass('AppIndex'), _dec2 = menu('**App/AppIndex'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AppIndex, _Component);

        function AppIndex() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._stateMachine = void 0;
          _this._context = void 0;
          return _this;
        }

        var _proto = AppIndex.prototype;
        _proto.onLoad = function onLoad() {
          this._stateMachine = new AppStateMachine();
          this._context = new AppContext(this._stateMachine);
          this._stateMachine.Context = this._context;
          this._context.starterNode = this.node;
          this._context.gameUI = find(NodeNames.TotalPoints);
          this._context.toastNode = find(NodeNames.ToastMessage);
          this._context.toastLabel = this._context.toastNode.getChildByName("Value").getComponent(Label);
          var loadingState = new LoadingState(this._context);
          var introState = new IntroState(this._context);
          var playingState = new PlayGameState(this._context);
          var gameOverState = new GameOverState(this._context);
          this._stateMachine.AddState(loadingState, true);
          this._stateMachine.AddState(introState);
          this._stateMachine.AddState(playingState);
          this._stateMachine.AddState(gameOverState);
          this._stateMachine.AddTransition(loadingState, introState);
          this._stateMachine.AddTransition(introState, playingState);
          this._stateMachine.AddTransition(playingState, gameOverState);
          this._stateMachine.AddTransition(gameOverState, introState);
          this._stateMachine.Run();
        };
        _proto.update = function update(dt) {
          var _this$_context$onUpda, _this$_context;
          (_this$_context$onUpda = (_this$_context = this._context).onUpdate) == null || _this$_context$onUpda.call(_this$_context, dt);
        };
        return AppIndex;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppStateMachine.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AbstractBaseStateMachine.ts'], function (exports) {
  var _inheritsLoose, cclegacy, AbstractBaseStateMachine;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AbstractBaseStateMachine = module.AbstractBaseStateMachine;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b1f31PCu2xGhoabC9WRvG3k", "AppStateMachine", undefined);
      var AppStateMachine = exports('AppStateMachine', /*#__PURE__*/function (_ref) {
        _inheritsLoose(AppStateMachine, _ref);

        function AppStateMachine() {
          return _ref.apply(this, arguments) || this;
        }

        var _proto = AppStateMachine.prototype;
        _proto.PerformTransition = function PerformTransition(pTransition) {
          console.log("Transition", pTransition.FromState, pTransition.ToState);
          _ref.prototype.PerformTransition.call(this, pTransition);
        };
        return AppStateMachine;
      }(AbstractBaseStateMachine));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ArrayUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "32aa0PVPLdAcIxyjXKaPZeN", "ArrayUtils", undefined);
      var ArrayUtils = exports('ArrayUtils', /*#__PURE__*/function () {
        function ArrayUtils() {
        }

        ArrayUtils.removeItem = function removeItem(list, item, removeCount) {
          if (removeCount === void 0) {
            removeCount = ArrayUtils.REMOVE_COUNT_ALL;
          }
          var result = false;
          if (removeCount === ArrayUtils.REMOVE_COUNT_ALL) {
            removeCount = Number.MAX_VALUE;
          }
          var totalRemovedCount = 0;
          var itemIndex = list.indexOf(item);
          while (itemIndex !== -1 && totalRemovedCount < removeCount) {
            list.splice(itemIndex, 1);
            itemIndex = list.indexOf(item, itemIndex);
            totalRemovedCount++;
            result = true;
          }
          return result;
        };
        ArrayUtils.removeItemsFromArray = function removeItemsFromArray(list, removeItems) {
          var item;
          for (var itemIndex = 0; itemIndex < removeItems.length; itemIndex++) {
            item = removeItems[itemIndex];
            ArrayUtils.removeItem(list, item);
          }
        };
        ArrayUtils.getRandomItem = function getRandomItem(list, except) {
          var result;
          if (list && list.length > 0) {
            if (except) {
              list = list.concat();
              ArrayUtils.removeItemsFromArray(list, except);
            }
            var tempIndex = Math.floor(Math.random() * list.length);
            result = list[tempIndex];
          }
          return result;
        };
        ArrayUtils.removeDuplicates = function removeDuplicates(array) {
          return array.filter(ArrayUtils.removeDuplicatesFilter);
        };
        ArrayUtils.shuffle = function shuffle(array) {
          return array.sort(function () {
            return Math.random() - 0.5;
          });
        };
        ArrayUtils.find = function find(array, predicate) {
          for (var _iterator = _createForOfIteratorHelperLoose(array), _step; !(_step = _iterator()).done;) {
            var _item = _step.value;
            if (predicate(_item)) {
              return _item;
            }
          }
          return null;
        };
        ArrayUtils.mergeUnique = function mergeUnique(a1, a2) {
          var res = a1.filter(function (value, index, a) {
            return a2.indexOf(value) < 0;
          });
          return res.concat(a2);
        };
        ArrayUtils.values = function values(map) {
          var list = [];
          for (var _i = 0, _Object$keys = Object.keys(map); _i < _Object$keys.length; _i++) {
            var _key = _Object$keys[_i];
            list.push(map[_key]);
          }
          return list;
        };
        ArrayUtils.getArrayFilledWithRange = function getArrayFilledWithRange(start, end) {
          return Array(end - start + 1).fill(0).map(function (_, idx) {
            return start + idx;
          });
        };
        ArrayUtils.getWeightedRandom = function getWeightedRandom(options) {
          var i;
          var weights = [];
          for (i = 0; i < options.length; i++) {
            weights[i] = options[i].weight + (weights[i - 1] || 0);
          }
          var random = Math.random() * weights[weights.length - 1];
          for (i = 0; i < weights.length; i++) {
            if (weights[i] > random) {
              break;
            }
          }
          return options[i].item;
        };
        ArrayUtils.removeDuplicatesFilter = function removeDuplicatesFilter(item, index, array) {
          return index === 0 ? true : array.lastIndexOf(item, index - 1) === -1;
        };
        return ArrayUtils;
      }());
      ArrayUtils.REMOVE_COUNT_ALL = -1;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AssetsLoader.ts", ['cc'], function (exports) {
  var cclegacy, resources, JsonAsset, Prefab;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      resources = module.resources;
      JsonAsset = module.JsonAsset;
      Prefab = module.Prefab;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cca9cHpFYBPL7VYfkvp/j9/", "AssetsLoader", undefined);
      var AssetsLoader = exports('AssetsLoader', /*#__PURE__*/function () {
        function AssetsLoader() {
        }

        AssetsLoader.loadJSON = function loadJSON(path) {
          return new Promise(function (resolve, reject) {
            resources.load(path, JsonAsset, function (err, jsonAsset) {
              if (err) {
                reject(err);
                console.error(err.message);
                return;
              }
              resolve(jsonAsset.json);
            });
          });
        };
        AssetsLoader.loadPrefab = function loadPrefab(path) {
          return new Promise(function (resolve, reject) {
            resources.load(path, Prefab, function (err, prefab) {
              if (err) {
                reject(err);
                console.error(err.message);
                return;
              }
              resolve(prefab);
            });
          });
        };
        return AssetsLoader;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseTerminableState.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AbstractBaseState.ts'], function (exports) {
  var _inheritsLoose, cclegacy, AbstractBaseState;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AbstractBaseState = module.AbstractBaseState;
    }],
    execute: function () {
      cclegacy._RF.push({}, "31dc3cKcv1BfJZCoNZhIcdx", "BaseTerminableState", undefined);
      var BaseTerminableState = exports('BaseTerminableState', /*#__PURE__*/function (_ref) {
        _inheritsLoose(BaseTerminableState, _ref);

        function BaseTerminableState() {
          return _ref.apply(this, arguments) || this;
        }

        var _proto = BaseTerminableState.prototype;
        _proto.BeforeEnter = function BeforeEnter() {
        };
        _proto.BeforeExit = function BeforeExit() {
        };
        _proto.Terminate = function Terminate() {
        };
        return BaseTerminableState;
      }(AbstractBaseState));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseTerminableStateMachine.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AbstractBaseStateMachine.ts', './BaseTerminableState.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, AbstractBaseStateMachine, BaseTerminableState;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AbstractBaseStateMachine = module.AbstractBaseStateMachine;
    }, function (module) {
      BaseTerminableState = module.BaseTerminableState;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b7211E3ypdK255RDPALnccz", "BaseTerminableStateMachine", undefined);
      var BaseTerminableStateMachine = exports('BaseTerminableStateMachine', /*#__PURE__*/function (_ref) {
        _inheritsLoose(BaseTerminableStateMachine, _ref);

        function BaseTerminableStateMachine() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ref.call.apply(_ref, [this].concat(args)) || this;
          _this._currentState = null;
          return _this;
        }

        var _proto = BaseTerminableStateMachine.prototype;
        _proto.Terminate = function Terminate() {
          this._context.isTerminated = true;
          if (this._currentState instanceof BaseTerminableState) {
            this._currentState.Terminate();
          }
        };
        _createClass(BaseTerminableStateMachine, [{
          key: "currentStateName",
          get: function get() {
            return this._currentState.constructor.name;
          }
        }]);
        return BaseTerminableStateMachine;
      }(AbstractBaseStateMachine));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BasketComponent.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "05fa3bg0jlGc6HGTF0WKEvL", "BasketComponent", undefined);
      var BasketComponent = exports('BasketComponent', function BasketComponent() {
      });
      BasketComponent.tag = "BasketComponent";
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BasketMovementSystem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.mjs_cjs=&original=.js', './BasketComponent.ts', './GameState.ts', './inject.ts', './NodeNames.ts', './EntitiesFactory.ts', './PositionComponent.ts', './index.js'], function (exports) {
  var _inheritsLoose, cclegacy, find, BasketComponent, GameState, inject, NodeNames, EntitiesFactory, PositionComponent,
      _cjsExports;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      find = module.find;
    }, null, function (module) {
      BasketComponent = module.BasketComponent;
    }, function (module) {
      GameState = module.GameState;
    }, function (module) {
      inject = module.inject;
    }, function (module) {
      NodeNames = module.NodeNames;
    }, function (module) {
      EntitiesFactory = module.EntitiesFactory;
    }, function (module) {
      PositionComponent = module.PositionComponent;
    }, function (module) {
      _cjsExports = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1cb1e32UE1Bj6Krecmn2PrY", "BasketMovementSystem", undefined);
      var BasketMovementSystem = exports('BasketMovementSystem', /*#__PURE__*/function (_NovaECS$System) {
        _inheritsLoose(BasketMovementSystem, _NovaECS$System);

        function BasketMovementSystem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _NovaECS$System.call.apply(_NovaECS$System, [this].concat(args)) || this;
          _this.family = void 0;
          _this.basketZone = void 0;
          _this._gameState = inject(GameState);
          return _this;
        }

        var _proto = BasketMovementSystem.prototype;
        _proto.onAttach = function onAttach(engine) {
          _NovaECS$System.prototype.onAttach.call(this, engine);
          this.basketZone = find(NodeNames.ZoneBasket);
          engine.addEntity(EntitiesFactory.createBasketEntity());
          this.family = new _cjsExports.FamilyBuilder(engine).include(BasketComponent).build();
        };
        _proto.update = function update(engine, delta) {
          for (var i = 0; i < this.family.entities.length; i++) {
            var entity = this.family.entities[i];
            var posComp = entity.getComponent(PositionComponent);
            posComp.currentX = this._gameState.getState().basketPositionX;
            posComp.currentY = this.basketZone.getWorldPosition().y;
          }
        };
        return BasketMovementSystem;
      }(_cjsExports.System));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BasketVSFruitCollisionSystem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.mjs_cjs=&original=.js', './FruitComponent.ts', './BasketComponent.ts', './HitComponent.ts', './index.js'], function (exports) {
  var _inheritsLoose, cclegacy, FruitComponent, BasketComponent, HitComponent, _cjsExports;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, null, function (module) {
      FruitComponent = module.FruitComponent;
    }, function (module) {
      BasketComponent = module.BasketComponent;
    }, function (module) {
      HitComponent = module.HitComponent;
    }, function (module) {
      _cjsExports = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "84962GduYBIspINSyHBuux1", "BasketVSFruitCollisionSystem", undefined);
      var BasketVSFruitCollisionSystem = exports('BasketVSFruitCollisionSystem', /*#__PURE__*/function (_NovaECS$System) {
        _inheritsLoose(BasketVSFruitCollisionSystem, _NovaECS$System);

        function BasketVSFruitCollisionSystem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _NovaECS$System.call.apply(_NovaECS$System, [this].concat(args)) || this;
          _this.familyFruits = void 0;
          _this.familyBasket = void 0;
          return _this;
        }

        var _proto = BasketVSFruitCollisionSystem.prototype;
        _proto.onAttach = function onAttach(engine) {
          _NovaECS$System.prototype.onAttach.call(this, engine);
          this.familyFruits = new _cjsExports.FamilyBuilder(engine).include(FruitComponent).include(HitComponent).build();
          this.familyBasket = new _cjsExports.FamilyBuilder(engine).include(BasketComponent).include(HitComponent).build();
        };
        _proto.update = function update(engine, delta) {
          for (var i = 0; i < this.familyBasket.entities.length; i++) {
            var _entity1$getComponent;
            var entity1 = this.familyBasket.entities[i];
            var box1 = (_entity1$getComponent = entity1.getComponent(HitComponent).hitTransform) == null ? void 0 : _entity1$getComponent.getBoundingBoxToWorld();
            if (!box1) continue;
            for (var j = 0; j < this.familyFruits.entities.length; j++) {
              var _hitComp$hitTransform;
              var entity2 = this.familyFruits.entities[j];
              var hitComp = entity2.getComponent(HitComponent);
              var box2 = (_hitComp$hitTransform = hitComp.hitTransform) == null ? void 0 : _hitComp$hitTransform.getBoundingBoxToWorld();
              if (!box2) continue;
              if (box1.intersects(box2)) {
                hitComp.killed = true;
              }
            }
          }
        };
        return BasketVSFruitCollisionSystem;
      }(_cjsExports.System));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CocosFactory.ts", ['cc', './CocosFloatingLabel.ts', './FormatUtils.ts'], function (exports) {
  var cclegacy, CocosFloatingLabel, formatHandlers;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      CocosFloatingLabel = module.CocosFloatingLabel;
    }, function (module) {
      formatHandlers = module.formatHandlers;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6c46aG+9gRCgKE7AgAMZcoa", "CocosFactory", undefined);
      var CocosFactory = exports('CocosFactory', /*#__PURE__*/function () {
        function CocosFactory() {
        }

        CocosFactory.buildFloatingLabel = function buildFloatingLabel(node, data) {
          var comp = node.getComponent(CocosFloatingLabel);
          var formatFunc = formatHandlers[data.formatter];
          comp.label.string = formatFunc(data.score);
        };
        return CocosFactory;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CocosFloatingLabel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECocosNodeEvents.ts', './AnimationsUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy,
      _decorator, Label, Component, ECocosNodeEvents, AnimationsUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      ECocosNodeEvents = module.ECocosNodeEvents;
    }, function (module) {
      AnimationsUtils = module.AnimationsUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "e481aEisqBIfYWpTy+0aSeT", "CocosFloatingLabel", undefined);
      var ccclass = _decorator.ccclass,
          menu = _decorator.menu,
          property = _decorator.property;
      var CocosFloatingLabel = exports('CocosFloatingLabel', (_dec = ccclass('CocosFloatingLabel'), _dec2 = menu('**App/UI/CocosFloatingLabel'), _dec3 = property({
        type: Label
      }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CocosFloatingLabel, _Component);

        function CocosFloatingLabel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));
          return _this;
        }

        var _proto = CocosFloatingLabel.prototype;
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          AnimationsUtils.playAnimation(this.label.node).then(function () {
            _this2.node.emit(ECocosNodeEvents.AnimationComplete);
          });
        };
        return CocosFloatingLabel;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CocosHitComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy,
      _decorator, Node, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "f1accJVz3RCxpftoJ9LOk0g", "CocosHitComponent", undefined);
      var ccclass = _decorator.ccclass,
          menu = _decorator.menu,
          property = _decorator.property;
      var CocosHitComponent = exports('CocosHitComponent', (_dec = ccclass('HitComponent'), _dec2 = menu('**App/HitComponent'), _dec3 = property({
        type: Node
      }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CocosHitComponent, _Component);

        function CocosHitComponent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "hitNode", _descriptor, _assertThisInitialized(_this));
          return _this;
        }

        return CocosHitComponent;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "hitNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CocosPlayerController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameState.ts', './inject.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Node, Component, GameState, inject;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      GameState = module.GameState;
    }, function (module) {
      inject = module.inject;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "3bfa2tZd5BGE7MRBlPiRnBC", "CocosPlayerController", undefined);
      var ccclass = _decorator.ccclass,
          menu = _decorator.menu;
      var CocosPlayerController = exports('CocosPlayerController', (_dec = ccclass('CocosPlayerController'), _dec2 = menu('**App/CocosPlayerController'), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CocosPlayerController, _Component);

        function CocosPlayerController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._gameState = inject(GameState);
          return _this;
        }

        var _proto = CocosPlayerController.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.node.on(Node.EventType.MOUSE_MOVE, function (event) {
            var mousePos = event.getUILocation();
            _this2._gameState.setBasketTargetPosition(mousePos.x);
          });
          this.node.on(Node.EventType.TOUCH_MOVE, function (event) {
            var touchPos = event.getUILocation();
            _this2._gameState.setBasketTargetPosition(touchPos.x);
          });
        };
        return CocosPlayerController;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CocosUICounter.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FormatUtils.ts', './inject.ts', './GameState.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy,
      _decorator, Label, CCString, Enum, Component, FormatType, formatHandlers, inject, GameState;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      CCString = module.CCString;
      Enum = module.Enum;
      Component = module.Component;
    }, function (module) {
      FormatType = module.FormatType;
      formatHandlers = module.formatHandlers;
    }, function (module) {
      inject = module.inject;
    }, function (module) {
      GameState = module.GameState;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "c448a9R9A5MN6+NpSxa2A9p", "CocosUICounter", undefined);
      var ccclass = _decorator.ccclass,
          menu = _decorator.menu,
          property = _decorator.property,
          requireComponent = _decorator.requireComponent;
      var CocosUICounter = exports('CocosUICounter', (_dec = ccclass('UICounter'), _dec2 = menu('**App/UI/UICounter'), _dec3 = requireComponent(Label), _dec4 = property({
        type: CCString
      }), _dec5 = property({
        type: Enum(FormatType)
      }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CocosUICounter, _Component);

        function CocosUICounter() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "property", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "formatter", _descriptor2, _assertThisInitialized(_this));
          _this._label = void 0;
          _this._state = inject(GameState);
          return _this;
        }

        var _proto = CocosUICounter.prototype;
        _proto.onLoad = function onLoad() {
          this._label = this.getComponent(Label);
        };
        _proto.update = function update(dt) {
          var value = this._state.getState()[this.property];
          var formatFunc = formatHandlers[this.formatter];
          this._label.string = formatFunc(value);
        };
        return CocosUICounter;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "property", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "formatter", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return FormatType.NoFormat;
        }
      })), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ConditionCallBack.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fa4b1pu++RBE6aXO+n7Saq+", "ConditionCallBack", undefined);
      /**
       * A transition callback
       * @TypeParameter TContext - a state machine context class.
       * @constructor
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/dependency-injection.ts", ['cc', './Dictionary.ts'], function (exports) {
  var cclegacy, Dictionary;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Dictionary = module.Dictionary;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b5fe5fDvr1JkrzDdd7ZMd+J", "dependency-injection", undefined);
      var classMap = exports('classMap', new Dictionary());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Dictionary.ts", ['cc', './UniqueUtils.ts'], function (exports) {
  var cclegacy, UniqueUtils;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      UniqueUtils = module.UniqueUtils;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b0d4bGxboVEJ5aNd4DDR1dq", "Dictionary", undefined);
      var Dictionary = exports('Dictionary', /*#__PURE__*/function () {
        function Dictionary() {
          this.map = {};
        }

        var _proto = Dictionary.prototype;
        _proto.get = function get(key) {
          var tempId = UniqueUtils.getObjectUniqueId(key);
          return this.map[tempId];
        };
        _proto.add = function add(key, item) {
          var tempId = UniqueUtils.getObjectUniqueId(key);
          this.map[tempId] = item;
        };
        _proto.remove = function remove(key) {
          var tempId = UniqueUtils.getObjectUniqueId(key);
          delete this.map[tempId];
        };
        _proto.forEach = function forEach(callbackfn) {
          var keys = Object.keys(this.map);
          var tempKey;
          var keysCount = keys.length;
          for (var keyIndex = 0; keyIndex < keysCount; keyIndex++) {
            tempKey = keys[keyIndex];
            callbackfn(this.map[tempKey]);
          }
        };
        return Dictionary;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ECocosNodeEvents.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "dbe90oyPcJJ8q34V+bZf1l1", "ECocosNodeEvents", undefined);
      var ECocosNodeEvents = exports('ECocosNodeEvents', /*#__PURE__*/function (ECocosNodeEvents) {
        ECocosNodeEvents["AnimationComplete"] = "animationComplete";
        return ECocosNodeEvents;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EItemsCategory.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f692bEmqXFGTrDSSnGsJov+", "EItemsCategory", undefined);
      var EItemsCategory = exports('EItemsCategory', /*#__PURE__*/function (EItemsCategory) {
        EItemsCategory[EItemsCategory["A"] = 0] = "A";
        EItemsCategory[EItemsCategory["B"] = 1] = "B";
        EItemsCategory[EItemsCategory["C"] = 2] = "C";
        return EItemsCategory;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EntitiesFactory.ts", ['cc', './index.mjs_cjs=&original=.js', './FruitComponent.ts', './MovementComponent.ts', './BasketComponent.ts', './ViewComponent.ts', './HitComponent.ts', './PrefabNames.ts', './PositionComponent.ts', './CocosFactory.ts', './FormatUtils.ts', './index.js'], function (exports) {
  var cclegacy, UITransform, view, FruitComponent, MovementComponent, BasketComponent, ViewComponent, HitComponent,
      PrefabNames, PositionComponent, CocosFactory, FormatType, _cjsExports;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      UITransform = module.UITransform;
      view = module.view;
    }, null, function (module) {
      FruitComponent = module.FruitComponent;
    }, function (module) {
      MovementComponent = module.MovementComponent;
    }, function (module) {
      BasketComponent = module.BasketComponent;
    }, function (module) {
      ViewComponent = module.ViewComponent;
    }, function (module) {
      HitComponent = module.HitComponent;
    }, function (module) {
      PrefabNames = module.PrefabNames;
    }, function (module) {
      PositionComponent = module.PositionComponent;
    }, function (module) {
      CocosFactory = module.CocosFactory;
    }, function (module) {
      FormatType = module.FormatType;
    }, function (module) {
      _cjsExports = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "be1abbvzmNEoJOsjewZOjlk", "EntitiesFactory", undefined);
      var EEntityIDs = exports('EEntityIDs', /*#__PURE__*/function (EEntityIDs) {
        EEntityIDs["FloatingLabel"] = "FloatingLabel";
        EEntityIDs["Fruit"] = "Fruit";
        EEntityIDs["Basket"] = "Basket";
        return EEntityIDs;
      }({}));
      var EntitiesFactory = exports('EntitiesFactory', /*#__PURE__*/function () {
        function EntitiesFactory() {
        }

        EntitiesFactory.createFloatingLabelEntity = function createFloatingLabelEntity(worldPosition, score) {
          var entity = new _cjsExports.Entity();
          entity.id = EEntityIDs.FloatingLabel;
          var viewComp = entity.putComponent(ViewComponent);
          viewComp.prefabPath = PrefabNames.ItemPoints;
          viewComp.data = {
            score: score,
            formatter: FormatType.FloatingPoints
          };
          viewComp.factoryFunc = CocosFactory.buildFloatingLabel;
          entity.putComponent(PositionComponent).currentX = worldPosition.x;
          entity.getComponent(PositionComponent).currentY = worldPosition.y;
          return entity;
        };
        EntitiesFactory.createFruitEntity = function createFruitEntity(fruit, spawnZone) {
          var entity = new _cjsExports.Entity();
          entity.id = EEntityIDs.Fruit;
          entity.putComponent(FruitComponent);
          var fruitComponent = entity.getComponent(FruitComponent);
          if (fruitComponent) {
            fruitComponent.category = fruit.category;
            fruitComponent.type = fruit.type;
            fruitComponent.points = fruit.points;
          }
          var spawnTransform = spawnZone.getComponent(UITransform);
          var spawnWidth = spawnTransform ? spawnTransform.width : view.getVisibleSize().width;
          var spawnPos = spawnZone.getWorldPosition();
          var randomX = spawnPos.x - spawnWidth / 2 + Math.random() * spawnWidth;
          var startY = spawnPos.y;
          entity.putComponent(PositionComponent).currentX = randomX;
          entity.getComponent(PositionComponent).currentY = startY;
          entity.putComponent(MovementComponent).velocityY = -fruit.speed;
          entity.putComponent(ViewComponent).prefabPath = "prefabs/fruits/type" + fruit.category + "/" + fruit.type;
          entity.putComponent(HitComponent);
          return entity;
        };
        EntitiesFactory.createBasketEntity = function createBasketEntity() {
          var entity = new _cjsExports.Entity();
          entity.id = EEntityIDs.Basket;
          entity.putComponent(BasketComponent);
          entity.putComponent(PositionComponent);
          entity.putComponent(ViewComponent).prefabPath = "prefabs/Basket";
          entity.putComponent(HitComponent);
          return entity;
        };
        return EntitiesFactory;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FormatUtils.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      var _formatHandlers;
      cclegacy._RF.push({}, "45e755l/g1GNJrnXnt0emek", "FormatUtils", undefined);
      var FormatType = exports('FormatType', /*#__PURE__*/function (FormatType) {
        FormatType[FormatType["NoFormat"] = 0] = "NoFormat";
        FormatType[FormatType["MMss"] = 1] = "MMss";
        FormatType[FormatType["TotalPoints"] = 2] = "TotalPoints";
        FormatType[FormatType["FloatingPoints"] = 3] = "FloatingPoints";
        return FormatType;
      }({}));
      var FormatUtils = exports('FormatUtils', /*#__PURE__*/function () {
        function FormatUtils() {
        }

        FormatUtils.noFormat = function noFormat(value) {
          return value.toString();
        };
        FormatUtils.toMMss = function toMMss(value) {
          if (value < 0 || !Number.isFinite(value)) {
            throw new Error("Invalid input: must be a non-negative finite number");
          }
          var mm = Math.floor(value / 60);
          var ss = Math.floor(value % 60);
          return (mm < 10 ? "0" : "") + mm + ":" + (ss < 10 ? "0" : "") + ss;
        };
        FormatUtils.toTotalPoints = function toTotalPoints(value) {
          return value.toString();
        };
        FormatUtils.toFloatingPoints = function toFloatingPoints(value) {
          return "+" + value.toString();
        };
        return FormatUtils;
      }());
      var formatHandlers = exports('formatHandlers', (_formatHandlers = {}, _formatHandlers[FormatType.NoFormat] = FormatUtils.noFormat, _formatHandlers[FormatType.MMss] = FormatUtils.toMMss, _formatHandlers[FormatType.TotalPoints] = FormatUtils.toTotalPoints, _formatHandlers[FormatType.FloatingPoints] = FormatUtils.toFloatingPoints, _formatHandlers));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FruitComponent.ts", ['cc', './EItemsCategory.ts'], function (exports) {
  var cclegacy, EItemsCategory;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EItemsCategory = module.EItemsCategory;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7c046b45l1Bur2kUZfx05jg", "FruitComponent", undefined);
      var FruitComponent = exports('FruitComponent', function FruitComponent(category, type, points) {
        if (category === void 0) {
          category = EItemsCategory.A;
        }
        if (type === void 0) {
          type = "";
        }
        if (points === void 0) {
          points = 0;
        }
        this.category = category;
        this.type = type;
        this.points = points;
      });
      FruitComponent.tag = "FruitComponent";
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameConfig.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "33d3cLIIfhB37O3qJantrBs", "GameConfig", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameEngine.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.mjs_cjs=&original=.js', './inject.ts', './GameState.ts', './SpawnFruitSystem.ts', './ViewManagementSystem.ts', './BasketMovementSystem.ts', './Utils.ts', './BasketVSFruitCollisionSystem.ts', './ScoresSystem.ts', './MovementsSystem.ts', './KillFruitSystem.ts', './KillViewSystem.ts', './index.js'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, inject, GameState, SpawnFruitSystem, ViewManagementSystem,
      BasketMovementSystem, Utils, BasketVSFruitCollisionSystem, ScoresSystem, MovementsSystem, KillFruitSystem,
      KillViewSystem, _cjsExports;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, null, function (module) {
      inject = module.inject;
    }, function (module) {
      GameState = module.GameState;
    }, function (module) {
      SpawnFruitSystem = module.SpawnFruitSystem;
    }, function (module) {
      ViewManagementSystem = module.ViewManagementSystem;
    }, function (module) {
      BasketMovementSystem = module.BasketMovementSystem;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      BasketVSFruitCollisionSystem = module.BasketVSFruitCollisionSystem;
    }, function (module) {
      ScoresSystem = module.ScoresSystem;
    }, function (module) {
      MovementsSystem = module.MovementsSystem;
    }, function (module) {
      KillFruitSystem = module.KillFruitSystem;
    }, function (module) {
      KillViewSystem = module.KillViewSystem;
    }, function (module) {
      _cjsExports = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e7c71mO5/FJO7S3PoMoqbti", "GameEngine", undefined);
      var GameEngine = exports('GameEngine', /*#__PURE__*/function (_NovaECS$Engine) {
        _inheritsLoose(GameEngine, _NovaECS$Engine);

        // prefab path / pool

        function GameEngine() {
          var _this;
          _this = _NovaECS$Engine.call(this) || this;
          _this._gameState = inject(GameState);
          _this._gameSpeed = 1;
          _this._time = 0;
          _this._systemsList = [];
          _this._config = null;
          _this._viewPoolMap = new Map();
          return _this;
        }

        var _proto = GameEngine.prototype;
        _proto.init = function init(config) {
          this._config = config;
          this._initSystems();
          this._gameState.startTime(config.time);
        };
        _proto.clean = function clean() {
          var _this2 = this;
          this._systemsList.forEach(function (system) {
            return _this2.removeSystem(system);
          });
          this.entities.forEach(function (entity) {
            return _this2.removeEntity(entity);
          });
          this._gameState.clean();
        };
        _proto.update = function update(dt) {
          var maxFPS = 60;
          var minFPS = 30;
          var frameTime = 1 / maxFPS;
          this._time += dt * this._gameSpeed;
          var count = Math.min(Math.floor(this._time / frameTime), maxFPS / minFPS);
          if (this._time / frameTime > 0.99) {
            count = count < 1 ? 1 : count;
            for (var i = 0; i < count; i++) {
              _NovaECS$Engine.prototype.update.call(this, Utils.roundTo(frameTime * 1000, 5));
              this._time -= frameTime;
            }
          }
          this._gameState.spendTime(frameTime * count);
          return this._gameState.getState().timeLeft >= 1;
        };
        _proto._initSystems = function _initSystems() {
          var _this3 = this;
          this._systemsList = [new SpawnFruitSystem(), new MovementsSystem(), new ViewManagementSystem(this._viewPoolMap), new BasketVSFruitCollisionSystem(), new ScoresSystem(), new BasketMovementSystem(), new KillFruitSystem(), new KillViewSystem()];
          this._systemsList.forEach(function (system) {
            return _this3.addSystem(system);
          });
        };
        _createClass(GameEngine, [{
          key: "config",
          get: function get() {
            return this._config;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!GameEngine._instance) {
              GameEngine._instance = new GameEngine();
            }
            return GameEngine._instance;
          }
        }]);
        return GameEngine;
      }(_cjsExports.Engine));
      GameEngine._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameOverState.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AbstractBaseState.ts', './GameEngine.ts'], function (exports) {
  var _inheritsLoose, cclegacy, Button, AbstractBaseState, GameEngine;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Button = module.Button;
    }, function (module) {
      AbstractBaseState = module.AbstractBaseState;
    }, function (module) {
      GameEngine = module.GameEngine;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2aa6cakzYVP6pdrV0jAy54O", "GameOverState", undefined);
      var GameOverState = exports('GameOverState', /*#__PURE__*/function (_ref) {
        _inheritsLoose(GameOverState, _ref);

        function GameOverState() {
          return _ref.apply(this, arguments) || this;
        }

        var _proto = GameOverState.prototype;
        _proto.Execute = function Execute() {
          var _this = this;
          this._context.toastLabel.string = this._context.locale.get("game_over");
          this._context.starterNode.on(Button.EventType.CLICK, function () {
            _this._context.starterNode.off(Button.EventType.CLICK);
            GameEngine.instance.clean();
            _ref.prototype.Execute.call(_this);
          });
        };
        return GameOverState;
      }(AbstractBaseState));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameState.ts", ['cc', './singleton.ts'], function (exports) {
  var cclegacy, singleton;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      singleton = module.singleton;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "6838ft3XrBDOKiOAXNtsn6o", "GameState", undefined);
      var GameState = exports('GameState', (_dec = singleton(), _dec(_class = /*#__PURE__*/function () {
        function GameState() {
          this._timeLeft = 0;
          this._score = 0;
          this._basketTargetX = 0;
        }

        var _proto = GameState.prototype;
        _proto.setBasketTargetPosition = function setBasketTargetPosition(x) {
          this._basketTargetX = x;
          //console.log("setBasketTargetPosition", this._basketTargetX);
        };

        _proto.addScore = function addScore(points) {
          this._score += points;
        };
        _proto.startTime = function startTime(timeLeft) {
          this._timeLeft = timeLeft;
        };
        _proto.spendTime = function spendTime(time) {
          this._timeLeft -= time;
        };
        _proto.getState = function getState() {
          return {
            timeLeft: this._timeLeft,
            score: this._score,
            basketPositionX: this._basketTargetX
          };
        };
        _proto.clean = function clean() {
          this._timeLeft = 0;
          this._score = 0;
          this._basketTargetX = 0;
        };
        return GameState;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HitComponent.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "152f3CU3cVP7KdoEGbPEoq0", "HitComponent", undefined);
      var HitComponent = exports('HitComponent', function HitComponent(hitTransform, killed) {
        if (hitTransform === void 0) {
          hitTransform = null;
        }
        if (killed === void 0) {
          killed = false;
        }
        this.hitTransform = hitTransform;
        this.killed = killed;
      });
      HitComponent.tag = "HitComponent";
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IBaseState.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1a1f5RbwXRLDILFh+dwlqGQ", "IBaseState", undefined);
      /**
       * Base interface for machine state
       * @TypeParameter TContext - a state machine context class.
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IBaseStateMachine.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cb77e8hpYBNx7VLiXI7ZBeU", "IBaseStateMachine", undefined);
      /**
       * Base state machine interface
       * @TypeParameter TContext - a state machine context class.
       * @constructor
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IBaseTransition.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "19a9bDi9BlLnKh8q1x2AHtQ", "IBaseTransition", undefined);
      /**
       * Base interface for simple transition between two states
       * @TypeParameter TContext - a state machine context class.
       * @constructor
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IGameState.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fcf66Bd77VM5qrXW14vptw+", "IGameState", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IGuard.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "53fc8GWanVB/It4xKI7a2WH", "IGuard", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IGuarded.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1ff2djjkM9I0Yp6wkliRYL9", "IGuarded", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IInjectable.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5ffbfVeUEJCvJwbXlfFqKh3", "IInjectable", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IKillable.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1db8bu4fR1AobyZHWkXncOH", "IKillable", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IMapping.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e6e3dudqgNP64RzKTxBGVU6", "IMapping", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/inject.ts", ['cc', './Kernel.ts'], function (exports) {
  var cclegacy, Kernel;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Kernel = module.Kernel;
    }],
    execute: function () {
      exports('inject', inject);
      cclegacy._RF.push({}, "8c7b7m0TdtBJYNM2KuFi1Vr", "inject", undefined);
      var kernel = exports('kernel', new Kernel());

      function inject(constructor) {
        return kernel.get(constructor);
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/injectable.ts", ['cc', './InjectionMapping.ts', './dependency-injection.ts'], function (exports) {
  var cclegacy, InjectionMapping, classMap;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      InjectionMapping = module.InjectionMapping;
    }, function (module) {
      classMap = module.classMap;
    }],
    execute: function () {
      exports('injectable', injectable);
      cclegacy._RF.push({}, "a5010v41oNMoZjdMLSaCQN9", "injectable", undefined);

      function injectable() {
        return function (target) {
          var result = classMap.get(target);
          if (!result) {
            new InjectionMapping(classMap, target);
          }
        };
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InjectionMapping.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Mapping.ts'], function (exports) {
  var _inheritsLoose, _construct, cclegacy, Mapping;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _construct = module.construct;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Mapping = module.Mapping;
    }],
    execute: function () {
      cclegacy._RF.push({}, "082277rfzRPa5cmLyZdfSrE", "InjectionMapping", undefined);
      var InjectionMapping = exports('InjectionMapping', /*#__PURE__*/function (_Mapping) {
        _inheritsLoose(InjectionMapping, _Mapping);

        function InjectionMapping(classesMap, initialConstructor) {
          var _this;
          _this = _Mapping.call(this) || this;
          _this._instanceResultConstructor = null;
          _this.instance = null;
          _this.isSingleton = false;
          _this.args = [];
          _this._isForceCreation = false;
          _this.classesMap = classesMap;
          _this.to(initialConstructor);
          return _this;
        }

        var _proto = InjectionMapping.prototype;
        _proto.getInstance = function getInstance() {
          if (this.isSingleton) {
            if (!this.instance) {
              this.instance = this.createInstance();
              // if (__DEV__) {
              //     // Development tool for create a global link to the class
              //     DebugUtils.mapObjectToGlobalId(this.instance, this.instance.constructor.name, "s");
              // }
            }

            return this.instance;
          }
          return this.createInstance();
        };
        _proto.createInstance = function createInstance() {
          var constructor = this.getConstructor();
          return _construct(constructor, this.args);
        };
        _proto.getConstructor = function getConstructor() {
          if (this._instanceResultConstructor) {
            return this._instanceResultConstructor;
          }
          throw new Error("Constructor is not bound!");
        };
        _proto.hasInstance = function hasInstance() {
          return !!this.instance && this.isSingleton;
        };
        _proto.destroyInstance = function destroyInstance() {
          this.instance = null;
        };
        _proto.asSingleton = function asSingleton() {
          this.isSingleton = true;
          return this;
        };
        _proto.to = function to(instanceConstructor) {
          if (!instanceConstructor) {
            throw new Error("There is an undefined constructor you are trying bind to.");
          }
          var newThis = this.existentialType(this);
          var other = this.classesMap.get(instanceConstructor);
          if (other) {
            console.warn("Constructor already bound " + instanceConstructor.name);
          }
          newThis._instanceResultConstructor = instanceConstructor;
          newThis.instance = null;
          this.classesMap.add(instanceConstructor, this);
          return newThis;
        };
        _proto.isForceCreation = function isForceCreation() {
          return this._isForceCreation;
        };
        _proto.forceCreation = function forceCreation() {
          this._isForceCreation = true;
          return this;
        };
        _proto.existentialType = function existentialType(oldThis) {
          return oldThis;
        };
        return InjectionMapping;
      }(Mapping));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IntroState.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AbstractBaseState.ts'], function (exports) {
  var _inheritsLoose, cclegacy, Button, AbstractBaseState;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Button = module.Button;
    }, function (module) {
      AbstractBaseState = module.AbstractBaseState;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d2bef7j3aVDLrtnnQY/IWcP", "IntroState", undefined);
      var IntroState = exports('IntroState', /*#__PURE__*/function (_ref) {
        _inheritsLoose(IntroState, _ref);

        function IntroState() {
          return _ref.apply(this, arguments) || this;
        }

        var _proto = IntroState.prototype;
        _proto.Execute = function Execute() {
          var _this = this;
          this._context.toastLabel.string = this._context.locale.get("intro");
          this._context.starterNode.on(Button.EventType.CLICK, function () {
            _this._context.starterNode.off(Button.EventType.CLICK);
            _this._context.toastNode.active = false;
            _ref.prototype.Execute.call(_this);
          });
        };
        return IntroState;
      }(AbstractBaseState));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InvalidTransitionException.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _assertThisInitialized, _wrapNativeSuper, cclegacy;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _wrapNativeSuper = module.wrapNativeSuper;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "be417pJayxHSacz1fC83SxI", "InvalidTransitionException", undefined);
      /**
       * Occurs when state trying to examine or perform a transition between states.
       */
      var InvalidTransitionException = exports('InvalidTransitionException', /*#__PURE__*/function (_Error) {
        _inheritsLoose(InvalidTransitionException, _Error);

        /**
         * Initializes a new instance of the InvalidTransitionException class.
         * @param pErrorMessage - The message that describes the error.
         */
        function InvalidTransitionException(pErrorMessage) {
          var _this;
          _this = _Error.call(this, pErrorMessage) || this;
          // It's worth mentioning that Object.setPrototypeOf needs to be called
          // immediately after any super(...) calls.

          // Set the prototype explicitly
          Object.setPrototypeOf(_assertThisInitialized(_this), InvalidTransitionException.prototype);
          return _this;
        }

        return InvalidTransitionException;
      }( /*#__PURE__*/_wrapNativeSuper(Error)));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IPool.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "88ab1WjIzNLmIbYLQHMEJF4", "IPool", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IStateMachineContext.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "755a4kU6aNBFZ8FUIv3A+lk", "IStateMachineContext", undefined);
      /**
       * An interface that defines a state machine context
       * @TContext - A context class for state machine
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IStateMachineWithBehaviourOptions.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0b30cnbcBlB8LJtsMZ/XuyP", "IStateMachineWithBehaviourOptions", undefined);
      /**
       * A state machine with behavior options interface defines
       * the methods to set and unset behaviour options of the machine.
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ItemsPool.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AbstractPool.ts'], function (exports) {
  var _inheritsLoose, cclegacy, instantiate, AbstractPool;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
    }, function (module) {
      AbstractPool = module.AbstractPool;
    }],
    execute: function () {
      cclegacy._RF.push({}, "665e6QCj9tKvaA7Bo1+TfsB", "ItemsPool", undefined);
      var ItemsPool = exports('ItemsPool', /*#__PURE__*/function (_ref) {
        _inheritsLoose(ItemsPool, _ref);

        function ItemsPool(prefab) {
          var _this;
          _this = _ref.call(this) || this;
          _this.prefab = prefab;
          return _this;
        }

        var _proto = ItemsPool.prototype;
        _proto.createNewInstance = function createNewInstance() {
          return instantiate(this.prefab);
        };
        return ItemsPool;
      }(AbstractPool));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ITerminable.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fa2e4QMVxRHgKtUN59GV8Gn", "ITerminable", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Kernel.ts", ['cc', './InjectionMapping.ts', './dependency-injection.ts'], function (exports) {
  var cclegacy, InjectionMapping, classMap;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      InjectionMapping = module.InjectionMapping;
    }, function (module) {
      classMap = module.classMap;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a62918MeB1FyqtxLIsiKtcg", "Kernel", undefined);
      var Kernel = exports('Kernel', /*#__PURE__*/function () {
        function Kernel() {
        }

        var _proto = Kernel.prototype;
        _proto.bind = function bind(constructor) {
          var result = this.getBinding(constructor);
          if (!result) {
            result = new InjectionMapping(classMap, constructor);
          }
          return result;
        };
        _proto.get = function get(constructor) {
          var mapping = classMap.get(constructor);
          if (!mapping) {
            throw new Error("There is no any binding for " + constructor + " please bind the class before inject()");
          }
          return mapping.getInstance();
        };
        _proto.getBinding = function getBinding(constructor) {
          if (!constructor) {
            throw Error("you are trying to get undefined constructor");
          }
          return classMap.get(constructor);
        };
        _proto.activate = function activate() {
          var injectionsList = [];
          classMap.forEach(function (item) {
            return injectionsList.push(item);
          });

          //Then activate
          injectionsList.forEach(function (item) {
            if (item.isForceCreation()) {
              item.getInstance();
            }
          });
        };
        return Kernel;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KillFruitSystem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.mjs_cjs=&original=.js', './FruitComponent.ts', './HitComponent.ts', './NodeNames.ts', './PositionComponent.ts', './index.js'], function (exports) {
  var _inheritsLoose, cclegacy, find, FruitComponent, HitComponent, NodeNames, PositionComponent, _cjsExports;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      find = module.find;
    }, null, function (module) {
      FruitComponent = module.FruitComponent;
    }, function (module) {
      HitComponent = module.HitComponent;
    }, function (module) {
      NodeNames = module.NodeNames;
    }, function (module) {
      PositionComponent = module.PositionComponent;
    }, function (module) {
      _cjsExports = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3a751g4dMZAbahRPFe7VKFA", "KillFruitSystem", undefined);
      var KillFruitSystem = exports('KillFruitSystem', /*#__PURE__*/function (_NovaECS$System) {
        _inheritsLoose(KillFruitSystem, _NovaECS$System);

        function KillFruitSystem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _NovaECS$System.call.apply(_NovaECS$System, [this].concat(args)) || this;
          _this.killZone = void 0;
          _this.family = void 0;
          _this._engine = null;
          return _this;
        }

        var _proto = KillFruitSystem.prototype;
        _proto.onAttach = function onAttach(engine) {
          _NovaECS$System.prototype.onAttach.call(this, engine);
          this.killZone = find(NodeNames.ZoneKill);
          this._engine = engine;
          this.family = new _cjsExports.FamilyBuilder(engine).include(FruitComponent).include(HitComponent).build();
        };
        _proto.update = function update(engine, delta) {
          var killZoneY = this.killZone.getWorldPosition().y;
          for (var i = 0; i < this.family.entities.length; i++) {
            var entity = this.family.entities[i];
            var posComp = entity.getComponent(PositionComponent);
            if (posComp) {
              if (posComp.currentY < killZoneY) {
                engine.removeEntity(entity);
              }
            }
            var hitComp = entity.getComponent(HitComponent);
            if (hitComp.killed) {
              engine.removeEntity(entity);
            }
          }
        };
        return KillFruitSystem;
      }(_cjsExports.System));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KillViewSystem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.mjs_cjs=&original=.js', './ViewComponent.ts', './index.js'], function (exports) {
  var _inheritsLoose, cclegacy, ViewComponent, _cjsExports;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, null, function (module) {
      ViewComponent = module.ViewComponent;
    }, function (module) {
      _cjsExports = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "aad060dp0BCTriGuy556Yfs", "KillViewSystem", undefined);
      var KillViewSystem = exports('KillViewSystem', /*#__PURE__*/function (_NovaECS$System) {
        _inheritsLoose(KillViewSystem, _NovaECS$System);

        function KillViewSystem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _NovaECS$System.call.apply(_NovaECS$System, [this].concat(args)) || this;
          _this.family = void 0;
          return _this;
        }

        var _proto = KillViewSystem.prototype;
        _proto.onAttach = function onAttach(engine) {
          _NovaECS$System.prototype.onAttach.call(this, engine);
          this.family = new _cjsExports.FamilyBuilder(engine).include(ViewComponent).build();
        };
        _proto.update = function update(engine, delta) {
          for (var i = 0; i < this.family.entities.length; i++) {
            var entity = this.family.entities[i];
            if (entity.getComponent(ViewComponent).killed) {
              engine.removeEntity(entity);
            }
          }
        };
        return KillViewSystem;
      }(_cjsExports.System));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadingState.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AbstractBaseState.ts', './AssetsLoader.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, AbstractBaseState, AssetsLoader;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AbstractBaseState = module.AbstractBaseState;
    }, function (module) {
      AssetsLoader = module.AssetsLoader;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1fe45T1I+pHaaBS1lXZVO0A", "LoadingState", undefined);
      var LoadingState = exports('LoadingState', /*#__PURE__*/function (_ref) {
        _inheritsLoose(LoadingState, _ref);

        function LoadingState() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ref.call.apply(_ref, [this].concat(args)) || this;
          _this.DEFAULT_LOCALE = "ru";
          return _this;
        }

        var _proto = LoadingState.prototype;
        //sys.languageCode;
        _proto.Execute = function Execute() {
          var _this2 = this;
          this._context.toastNode.active = true;
          this.load().then(function () {
            _ref.prototype.Execute.call(_this2);
          });
        };
        _proto.load = /*#__PURE__*/function () {
          var _load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this3 = this;
            var i18n;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return AssetsLoader.loadJSON("i18n/" + this.DEFAULT_LOCALE);
                case 2:
                  i18n = _context.sent;
                  this._context.locale = new Map();
                  Object.keys(i18n).forEach(function (key) {
                    _this3._context.locale.set(key, i18n[key]);
                  });
                  this._context.toastLabel.string = this._context.locale.get("loading");
                  _context.next = 8;
                  return AssetsLoader.loadJSON("config");
                case 8:
                  this._context.config = _context.sent;
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function load() {
            return _load.apply(this, arguments);
          }

          return load;
        }();
        return LoadingState;
      }(AbstractBaseState));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./AppIndex.ts', './NodeNames.ts', './PrefabNames.ts', './CocosHitComponent.ts', './CocosPlayerController.ts', './ECocosNodeEvents.ts', './CocosFloatingLabel.ts', './CocosUICounter.ts', './GameEngine.ts', './BasketComponent.ts', './FruitComponent.ts', './HitComponent.ts', './IKillable.ts', './MovementComponent.ts', './PositionComponent.ts', './ViewComponent.ts', './BasketMovementSystem.ts', './BasketVSFruitCollisionSystem.ts', './KillFruitSystem.ts', './KillViewSystem.ts', './MovementsSystem.ts', './ScoresSystem.ts', './SpawnFruitSystem.ts', './ViewManagementSystem.ts', './CocosFactory.ts', './EntitiesFactory.ts', './AppContext.ts', './AppEvents.ts', './AppStateMachine.ts', './AbstractBaseState.ts', './AbstractBaseStateMachine.ts', './AbstractEventDispatcher.ts', './AbstractStateMachineContext.ts', './AbstractTransition.ts', './StateMachineBase.ts', './StateTransition.ts', './StateMachineBehaviorEnum.ts', './TransitionBehaviourEnum.ts', './AmbiguousInitialStateException.ts', './InvalidTransitionException.ts', './NullInitialStateException.ts', './NullStateException.ts', './StateNotFoundException.ts', './WrongMachineStateException.ts', './WrongStateIndexException.ts', './ConditionCallBack.ts', './IBaseState.ts', './IBaseStateMachine.ts', './IBaseTransition.ts', './IStateMachineContext.ts', './IStateMachineWithBehaviourOptions.ts', './BaseTerminableState.ts', './BaseTerminableStateMachine.ts', './ITerminable.ts', './TerminableContext.ts', './GameOverState.ts', './IntroState.ts', './LoadingState.ts', './PlayGameState.ts', './InjectionMapping.ts', './Kernel.ts', './injectable.ts', './singleton.ts', './dependency-injection.ts', './inject.ts', './IGuard.ts', './IGuarded.ts', './IInjectable.ts', './IMapping.ts', './Dictionary.ts', './Mapping.ts', './Type.ts', './UniqueUtils.ts', './IGameState.ts', './AbstractPool.ts', './IPool.ts', './ItemsPool.ts', './GameState.ts', './EItemsCategory.ts', './GameConfig.ts', './AnimationsUtils.ts', './ArrayUtils.ts', './AssetsLoader.ts', './FormatUtils.ts', './TimeoutUtils.ts', './Utils.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {
    }
  };
});

System.register("chunks:///_virtual/Mapping.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "250f36yUtJPe4R3RWY0HezN", "Mapping", undefined);
      var Mapping = exports('Mapping', /*#__PURE__*/function () {
        function Mapping() {
          this.guards = [];
          this.executeOnce = false;
        }

        Mapping.extractAllProperties = function extractAllProperties(mapping) {
          var result = [];
          for (var _key in mapping) {
            if (mapping.hasOwnProperty(_key) && _key !== "guards" && _key !== "executeOnce") {
              result.push(_key);
            }
          }
          return result;
        };
        var _proto = Mapping.prototype;
        _proto.isOnce = function isOnce() {
          return this.executeOnce;
        };
        _proto.once = function once() {
          this.executeOnce = true;
          return this;
        };
        _proto.withGuards = function withGuards() {
          for (var _len = arguments.length, guards = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
            guards[_key2] = arguments[_key2];
          }
          Array.prototype.push.apply(this.guards, guards);
          return this;
        };
        _proto.executionAllowedByGuards = function executionAllowedByGuards(data) {
          for (var _iterator = _createForOfIteratorHelperLoose(this.guards), _step; !(_step = _iterator()).done;) {
            var guard = _step.value;
            if (!guard(data)) {
              return false;
            }
          }
          return true;
        };
        _proto.createFilter = function createFilter(filterFields) {
          if (!filterFields) {
            return {};
          }
          var result = {};
          var propertiesInMapping = Mapping.extractAllProperties(this);
          for (var _iterator2 = _createForOfIteratorHelperLoose(propertiesInMapping), _step2; !(_step2 = _iterator2()).done;) {
            var property = _step2.value;
            if (property in filterFields && typeof this[property] === typeof filterFields[property]) {
              result[property] = filterFields[property];
            }
          }
          return result;
        };
        return Mapping;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MovementComponent.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a2a0fWGrWNHVaUQnGACfcba", "MovementComponent", undefined);
      var MovementComponent = exports('MovementComponent', function MovementComponent(velocityX, velocityY) {
        if (velocityX === void 0) {
          velocityX = 0;
        }
        if (velocityY === void 0) {
          velocityY = 0;
        }
        this.velocityX = velocityX;
        this.velocityY = velocityY;
      });
      MovementComponent.tag = "MovementComponent";
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MovementsSystem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.mjs_cjs=&original=.js', './MovementComponent.ts', './PositionComponent.ts', './index.js'], function (exports) {
  var _inheritsLoose, cclegacy, MovementComponent, PositionComponent, _cjsExports;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, null, function (module) {
      MovementComponent = module.MovementComponent;
    }, function (module) {
      PositionComponent = module.PositionComponent;
    }, function (module) {
      _cjsExports = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f09cbtBFDFGd6j9hb2xPkiL", "MovementsSystem", undefined);
      var MovementsSystem = exports('MovementsSystem', /*#__PURE__*/function (_NovaECS$System) {
        _inheritsLoose(MovementsSystem, _NovaECS$System);

        function MovementsSystem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _NovaECS$System.call.apply(_NovaECS$System, [this].concat(args)) || this;
          _this.family = void 0;
          return _this;
        }

        var _proto = MovementsSystem.prototype;
        _proto.onAttach = function onAttach(engine) {
          _NovaECS$System.prototype.onAttach.call(this, engine);
          this.family = new _cjsExports.FamilyBuilder(engine).include(MovementComponent).build();
        };
        _proto.update = function update(engine, delta) {
          for (var i = 0; i < this.family.entities.length; i++) {
            var entity = this.family.entities[i];
            var movementComp = entity.getComponent(MovementComponent);
            var posComp = entity.getComponent(PositionComponent);
            posComp.currentX += movementComp.velocityX * delta;
            posComp.currentY += movementComp.velocityY * delta;
          }
        };
        return MovementsSystem;
      }(_cjsExports.System));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NodeNames.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6f84cyvqUtINYAW7RWuuAGn", "NodeNames", undefined);
      var NodeNames = exports('NodeNames', /*#__PURE__*/function (NodeNames) {
        NodeNames["Canvas"] = "Canvas";
        NodeNames["Camera"] = "Canvas/Camera";
        NodeNames["ZoneBasket"] = "Canvas/ZoneBasket";
        NodeNames["ZoneSpawn"] = "Canvas/ZoneSpawn";
        NodeNames["ZoneKill"] = "Canvas/ZoneKill";
        NodeNames["TotalPoints"] = "Canvas/TotalPoints";
        NodeNames["ToastMessage"] = "Canvas/ToastMessage";
        NodeNames["ViewContainer"] = "Canvas/ViewContainer";
        return NodeNames;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NullInitialStateException.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _assertThisInitialized, _wrapNativeSuper, cclegacy;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _wrapNativeSuper = module.wrapNativeSuper;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e9009olY/xJV7c5dRzG9By4", "NullInitialStateException", undefined);
      /**
       * Occurs when the initial state of state machine is null.
       */
      var NullInitialStateException = exports('NullInitialStateException', /*#__PURE__*/function (_Error) {
        _inheritsLoose(NullInitialStateException, _Error);

        /**
         * Initializes a new instance of the NullInitialStateException class.
         * @param pErrorMessage - The message that describes the error.
         */
        function NullInitialStateException(pErrorMessage) {
          var _this;
          _this = _Error.call(this, pErrorMessage) || this;
          // It's worth mentioning that Object.setPrototypeOf needs to be called
          // immediately after any super(...) calls.

          // Set the prototype explicitly
          Object.setPrototypeOf(_assertThisInitialized(_this), NullInitialStateException.prototype);
          return _this;
        }

        return NullInitialStateException;
      }( /*#__PURE__*/_wrapNativeSuper(Error)));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NullStateException.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _assertThisInitialized, _wrapNativeSuper, cclegacy;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _wrapNativeSuper = module.wrapNativeSuper;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9af11fcjyZOOa+4QF33iZMo", "NullStateException", undefined);
      /**
       * Occurs when the passed or stored state is null.
       */
      var NullStateException = exports('NullStateException', /*#__PURE__*/function (_Error) {
        _inheritsLoose(NullStateException, _Error);

        /**
         * Initializes a new instance of the NullStateException class.
         * @param pErrorMessage - The message that describes the error.
         */
        function NullStateException(pErrorMessage) {
          var _this;
          _this = _Error.call(this, pErrorMessage) || this;
          // It's worth mentioning that Object.setPrototypeOf needs to be called
          // immediately after any super(...) calls.

          // Set the prototype explicitly
          Object.setPrototypeOf(_assertThisInitialized(_this), NullStateException.prototype);
          return _this;
        }

        return NullStateException;
      }( /*#__PURE__*/_wrapNativeSuper(Error)));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PlayGameState.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AbstractBaseState.ts', './GameEngine.ts'], function (exports) {
  var _inheritsLoose, cclegacy, AbstractBaseState, GameEngine;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AbstractBaseState = module.AbstractBaseState;
    }, function (module) {
      GameEngine = module.GameEngine;
    }],
    execute: function () {
      cclegacy._RF.push({}, "39a90WKIElKbr15jjSw7RIX", "PlayGameState", undefined);
      var PlayGameState = exports('PlayGameState', /*#__PURE__*/function (_ref) {
        _inheritsLoose(PlayGameState, _ref);

        function PlayGameState() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ref.call.apply(_ref, [this].concat(args)) || this;
          _this._game = GameEngine.instance;
          return _this;
        }

        var _proto = PlayGameState.prototype;
        _proto.Execute = function Execute() {
          var _this2 = this;
          this._context.gameUI.active = true;
          this._game.init(this._context.config);
          this._context.onUpdate = function (dt) {
            if (!_this2._game.update(dt)) {
              _this2._context.onUpdate = null;
              _this2._context.gameUI.active = false;
              _this2._context.toastNode.active = true;
              _ref.prototype.Execute.call(_this2);
            }
          };
        };
        return PlayGameState;
      }(AbstractBaseState));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PositionComponent.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "646aeKdPyZAA5mlRtkFvczz", "PositionComponent", undefined);
      var PositionComponent = exports('PositionComponent', function PositionComponent(currentX, currentY) {
        if (currentX === void 0) {
          currentX = 0;
        }
        if (currentY === void 0) {
          currentY = 0;
        }
        this.currentX = currentX;
        this.currentY = currentY;
      });
      PositionComponent.tag = "PositionComponent";
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PrefabNames.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9f6dcL3K/FO4pdUxw6mt0De", "PrefabNames", undefined);
      var PrefabNames = exports('PrefabNames', /*#__PURE__*/function (PrefabNames) {
        PrefabNames["ItemPoints"] = "UI/ItemPoints";
        return PrefabNames;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ScoresSystem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.mjs_cjs=&original=.js', './FruitComponent.ts', './HitComponent.ts', './GameState.ts', './inject.ts', './EntitiesFactory.ts', './PositionComponent.ts', './index.js'], function (exports) {
  var _inheritsLoose, cclegacy, Vec3, FruitComponent, HitComponent, GameState, inject, EntitiesFactory,
      PositionComponent, _cjsExports;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, null, function (module) {
      FruitComponent = module.FruitComponent;
    }, function (module) {
      HitComponent = module.HitComponent;
    }, function (module) {
      GameState = module.GameState;
    }, function (module) {
      inject = module.inject;
    }, function (module) {
      EntitiesFactory = module.EntitiesFactory;
    }, function (module) {
      PositionComponent = module.PositionComponent;
    }, function (module) {
      _cjsExports = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7c30bGHRz9FKa1DcoeQCWiK", "ScoresSystem", undefined);
      var ScoresSystem = exports('ScoresSystem', /*#__PURE__*/function (_NovaECS$System) {
        _inheritsLoose(ScoresSystem, _NovaECS$System);

        function ScoresSystem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _NovaECS$System.call.apply(_NovaECS$System, [this].concat(args)) || this;
          _this.family = void 0;
          _this.gameState = inject(GameState);
          return _this;
        }

        var _proto = ScoresSystem.prototype;
        _proto.onAttach = function onAttach(engine) {
          _NovaECS$System.prototype.onAttach.call(this, engine);
          this.family = new _cjsExports.FamilyBuilder(engine).include(FruitComponent).include(HitComponent).build();
        };
        _proto.update = function update(engine, delta) {
          for (var i = 0; i < this.family.entities.length; i++) {
            var entity = this.family.entities[i];
            var hitComp = entity.getComponent(HitComponent);
            if (hitComp.killed) {
              var fruitComp = entity.getComponent(FruitComponent);
              var posComp = entity.getComponent(PositionComponent);
              engine.addEntity(EntitiesFactory.createFloatingLabelEntity(new Vec3(posComp.currentX, posComp.currentY), fruitComp.points));
              this.gameState.addScore(fruitComp.points);
            }
          }
        };
        return ScoresSystem;
      }(_cjsExports.System));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/singleton.ts", ['cc', './injectable.ts', './dependency-injection.ts'], function (exports) {
  var cclegacy, injectable, classMap;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      injectable = module.injectable;
    }, function (module) {
      classMap = module.classMap;
    }],
    execute: function () {
      exports('singleton', singleton);
      cclegacy._RF.push({}, "8ac08EEguhNxYRLAGreVS9f", "singleton", undefined);

      /**
       * Class decorator factory that registers the class as a singleton within
       * the global container.
       *
       * @return {Function} The class decorator
       */
      function singleton() {
        return function (target) {
          injectable()(target);
          classMap.get(target).asSingleton();
        };
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpawnFruitSystem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.mjs_cjs=&original=.js', './FruitComponent.ts', './EntitiesFactory.ts', './HitComponent.ts', './NodeNames.ts', './index.js'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, find, FruitComponent, EntitiesFactory, HitComponent,
      NodeNames, _cjsExports;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      find = module.find;
    }, null, function (module) {
      FruitComponent = module.FruitComponent;
    }, function (module) {
      EntitiesFactory = module.EntitiesFactory;
    }, function (module) {
      HitComponent = module.HitComponent;
    }, function (module) {
      NodeNames = module.NodeNames;
    }, function (module) {
      _cjsExports = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "97f4fjsJBBLxoSYAScRvuG1", "SpawnFruitSystem", undefined);
      var SpawnFruitSystem = exports('SpawnFruitSystem', /*#__PURE__*/function (_NovaECS$System) {
        _inheritsLoose(SpawnFruitSystem, _NovaECS$System);

        function SpawnFruitSystem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _NovaECS$System.call.apply(_NovaECS$System, [this].concat(args)) || this;
          _this.family = void 0;
          _this.spawnZone = void 0;
          _this._spawnItems = [];
          _this._nextSpawnTime = 0;
          _this._spawnInterval = void 0;
          _this._engine = null;
          return _this;
        }

        var _proto = SpawnFruitSystem.prototype;
        _proto.onAttach = function onAttach(engine) {
          _NovaECS$System.prototype.onAttach.call(this, engine);
          this._spawnItems = engine.config.items;
          this._spawnInterval = engine.config.rate;
          this.spawnZone = find(NodeNames.ZoneSpawn);
          this._engine = engine;
          this.family = new _cjsExports.FamilyBuilder(engine).include(FruitComponent).include(HitComponent).build();
        };
        _proto.update = function update(engine, delta) {
          this._nextSpawnTime -= delta;
          if (this._nextSpawnTime <= 0) {
            this._spawnFruit();
            this._nextSpawnTime = this._spawnInterval;
          }
        };
        _proto._spawnFruit = function _spawnFruit() {
          var totalWeight = this._spawnItems.reduce(function (sum, item) {
            return sum + item.weight;
          }, 0);
          var randomWeight = Math.random() * totalWeight;
          var selectedItem = null;
          for (var _iterator = _createForOfIteratorHelperLoose(this._spawnItems), _step; !(_step = _iterator()).done;) {
            var item = _step.value;
            randomWeight -= item.weight;
            if (randomWeight <= 0) {
              selectedItem = item;
              break;
            }
          }
          if (!selectedItem) return;
          var entity = EntitiesFactory.createFruitEntity(selectedItem, this.spawnZone);
          this._engine.addEntity(entity);
        };
        return SpawnFruitSystem;
      }(_cjsExports.System));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StateMachineBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AbstractBaseStateMachine.ts'], function (exports) {
  var _inheritsLoose, cclegacy, AbstractBaseStateMachine;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AbstractBaseStateMachine = module.AbstractBaseStateMachine;
    }],
    execute: function () {
      cclegacy._RF.push({}, "04d72tqVZlOoq2nyugo8AXd", "StateMachineBase", undefined);
      /**
       * A base state machine class that implement necessary abstract interface members
       * @TypeParameter TContext - a state machine context class.
       */
      var StateMachineBase = exports('StateMachineBase', /*#__PURE__*/function (_ref) {
        _inheritsLoose(StateMachineBase, _ref);

        /**
         * Initialize the new member of the AbstractBaseStateMachine with given context.
         * @param pContext - A state machine context.
         * @param pInitialState - An initial state of the state machine.
         */
        function StateMachineBase(pContext, pInitialState) {
          if (pContext === void 0) {
            pContext = null;
          }
          if (pInitialState === void 0) {
            pInitialState = null;
          }
          return _ref.call(this, pContext, pInitialState) || this;
        }

        return StateMachineBase;
      }(AbstractBaseStateMachine));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StateMachineBehaviorEnum.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b415457rGJMfrlFKOSRcSJD", "StateMachineBehaviorEnum", undefined);
      /**
       * A state machine behavior enum defines the named behavior patterns and options
       * for state machine.
       */
      var StateMachineBehaviorEnum = exports('StateMachineBehaviorEnum', /*#__PURE__*/function (StateMachineBehaviorEnum) {
        StateMachineBehaviorEnum[StateMachineBehaviorEnum["STOP_ON_INITIAL_STATE"] = 0] = "STOP_ON_INITIAL_STATE";
        return StateMachineBehaviorEnum;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StateNotFoundException.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _assertThisInitialized, _wrapNativeSuper, cclegacy;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _wrapNativeSuper = module.wrapNativeSuper;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c708fXu9SNNf6YnHpFEHyyx", "StateNotFoundException", undefined);
      /**
       * Occurs when the state is not presented in the list of states of the state machine.
       */
      var StateNotFoundException = exports('StateNotFoundException', /*#__PURE__*/function (_Error) {
        _inheritsLoose(StateNotFoundException, _Error);

        /**
         * Initializes a new instance of the StateNotFoundException class.
         * @param pErrorMessage - The message that describes the error.
         */
        function StateNotFoundException(pErrorMessage) {
          var _this;
          _this = _Error.call(this, pErrorMessage) || this;
          // It's worth mentioning that Object.setPrototypeOf needs to be called
          // immediately after any super(...) calls.

          // Set the prototype explicitly
          Object.setPrototypeOf(_assertThisInitialized(_this), StateNotFoundException.prototype);
          return _this;
        }

        return StateNotFoundException;
      }( /*#__PURE__*/_wrapNativeSuper(Error)));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StateTransition.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AbstractTransition.ts', './TransitionBehaviourEnum.ts'], function (exports) {
  var _inheritsLoose, cclegacy, AbstractTransition, TransitionBehaviorEnum;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AbstractTransition = module.AbstractTransition;
    }, function (module) {
      TransitionBehaviorEnum = module.TransitionBehaviorEnum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ddc47x48h5N8Lb6fleCmbbz", "StateTransition", undefined);

      /**
       * Transition for state machine.
       * @TypeParameter TContext - a state machine context class.
       */
      var StateTransition = exports('StateTransition', /*#__PURE__*/function (_ref) {
        _inheritsLoose(StateTransition, _ref);

        /**
         * Initializes a new instance of the AbstractTransition class and setup
         * @param pFromState - The initial state of transition.
         * @param pToState - The target state of transition.
         * @param pCondition - A function that must return bool and indicates the availability of passing transition.
         * @param pOrder - An evaluation order.
         * @param pAfterTransitionBehaviorEnum - State machine behavior execution after performing transition through the state.
         * @remarks The default behavior for the state machine after transaction is
         * CONTINUE_AFTER_TRANSITION witch will continue the execution (call the Execute callback) after transaction.
         */
        function StateTransition(pFromState, pToState, pCondition, pOrder, pAfterTransitionBehaviorEnum) {
          if (pCondition === void 0) {
            pCondition = null;
          }
          if (pOrder === void 0) {
            pOrder = 0;
          }
          if (pAfterTransitionBehaviorEnum === void 0) {
            pAfterTransitionBehaviorEnum = TransitionBehaviorEnum.CONTINUE_AFTER_TRANSITION;
          }
          return _ref.call(this, pFromState, pToState, pCondition, pOrder, pAfterTransitionBehaviorEnum) || this;
        }

        return StateTransition;
      }(AbstractTransition));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TerminableContext.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AbstractStateMachineContext.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, AbstractStateMachineContext;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AbstractStateMachineContext = module.AbstractStateMachineContext;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3ddbfmUzjNACrOv5dnKu2De", "TerminableContext", undefined);
      var TerminableContext = exports('TerminableContext', /*#__PURE__*/function (_ref) {
        _inheritsLoose(TerminableContext, _ref);

        function TerminableContext() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ref.call.apply(_ref, [this].concat(args)) || this;
          _this.isTerminated = false;
          return _this;
        }

        _createClass(TerminableContext, [{
          key: "StateMachine",
          get: function get() {
            return this._stateMachine;
          }
        }]);
        return TerminableContext;
      }(AbstractStateMachineContext));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TimeoutUtils.ts", ['cc'], function (exports) {
  var cclegacy, tween;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      tween = module.tween;
    }],
    execute: function () {
      cclegacy._RF.push({}, "202a1eWrD1EO5cypbw9HAfA", "TimeoutUtils", undefined);
      var TimeoutUtils = exports('TimeoutUtils', /*#__PURE__*/function () {
        function TimeoutUtils() {
        }

        TimeoutUtils.delay = function delay(ms) {
          return new Promise(function (resolve) {
            return TimeoutUtils.setTimeout(resolve, ms);
          });
        };
        TimeoutUtils.getTimeOutPromise = function getTimeOutPromise(timeOut) {
          return new Promise(function (resolve) {
            TimeoutUtils.setTimeout(function () {
              resolve();
            }, timeOut);
          });
        };
        TimeoutUtils.setTimeout = function setTimeout(handler, timeout) {
          for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
          }
          var id = this.getId();
          var move = tween({
            time: 0
          }).by(timeout / 1000, {
            time: 100
          });
          var checkEnd = tween().call(function () {
            handler(args);
          });
          move.then(checkEnd).start();
          this.timers[id] = move;
          return id;
        };
        TimeoutUtils.isActive = function isActive(id) {
          return this.timers[id] !== undefined;
        };
        TimeoutUtils.clearTimeout = function clearTimeout(id) {
          this.clearById(id);
        };
        TimeoutUtils.setInterval = function setInterval(handler, timeout) {
          var id = this.getId();
          for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }
          var move = this.getIntervalTween(timeout, handler, id, args);
          this.timers[id] = move;
          return id;
        };
        TimeoutUtils.clearInterval = function clearInterval(id) {
          this.clearById(id);
        };
        TimeoutUtils.clearById = function clearById(id) {
          if (isNaN(id)) {
            console.warn("TimeoutUtils: check timeout/interval id. id = " + id);
            return;
          }
          var tl = this.timers[id];
          if (tl) {
            tl.stop();
            delete this.timers[id];
          }
        };
        TimeoutUtils.getId = function getId() {
          // (Number as any) is used to prevent failing of compiler,
          // take into account, that is Number.MAX_SAFE_INTEGER returns undefined,
          // and the next Math.pow result will be taken
          this.maxInteger = this.maxInteger || Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
          if (this.lastId >= this.maxInteger - 1) {
            this.lastId = 0;
          }
          return ++this.lastId;
        };
        TimeoutUtils.getIntervalTween = function getIntervalTween(timeout, handler, timerId, args) {
          var _this = this;
          var move = tween({
            time: 0
          }).by(timeout / 1000, {
            time: 100
          });
          var checkEnd = tween().call(function () {
            handler(args);
            if (_this.timers[timerId]) {
              TimeoutUtils.getIntervalTween(timeout, handler, timerId, args);
              _this.timers[timerId] = move;
            }
          });
          move.then(checkEnd).start();
          return move;
        };
        return TimeoutUtils;
      }());
      TimeoutUtils.lastId = 0;
      TimeoutUtils.maxInteger = void 0;
      TimeoutUtils.timers = {};
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TransitionBehaviourEnum.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "68b17YQud9FCoFoyn97jU0x", "TransitionBehaviourEnum", undefined);
      /**
       * A transition behavior enum defines the specific behavior
       * for processing the transition.
       */
      var TransitionBehaviorEnum = exports('TransitionBehaviorEnum', /*#__PURE__*/function (TransitionBehaviorEnum) {
        TransitionBehaviorEnum[TransitionBehaviorEnum["STOP_AFTER_TRANSITION"] = 0] = "STOP_AFTER_TRANSITION";
        TransitionBehaviorEnum[TransitionBehaviorEnum["CONTINUE_AFTER_TRANSITION"] = 1] = "CONTINUE_AFTER_TRANSITION";
        return TransitionBehaviorEnum;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Type.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "82d829Y5zBL6JOyii5iNjq2", "Type", undefined); // export type Abstract<T> = Function & { prototype: T };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UniqueUtils.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bcf8aDZNAtM6JDzUYXUr9YD", "UniqueUtils", undefined);
      var UniqueUtils = exports('UniqueUtils', /*#__PURE__*/function () {
        function UniqueUtils() {
        }

        UniqueUtils.getObjectUniqueId = function getObjectUniqueId(object) {
          if (!object.hasOwnProperty(UniqueUtils.UNIQUE_ID_PROP_NAME)) {
            UniqueUtils.prevGlobalUniqueId = UniqueUtils.globalUniqueId;
            UniqueUtils.globalUniqueId++;
            // An additional checking in case max number value limit is reached
            if (UniqueUtils.globalUniqueId === UniqueUtils.prevGlobalUniqueId) {
              UniqueUtils.globalUniqueId = 0;
            }
            object[UniqueUtils.UNIQUE_ID_PROP_NAME] = UniqueUtils.globalUniqueId.toString();
          }
          return object[UniqueUtils.UNIQUE_ID_PROP_NAME];
        };
        return UniqueUtils;
      }());
      UniqueUtils.UNIQUE_ID_PROP_NAME = "UniqueId";
      UniqueUtils.globalUniqueId = 0;
      UniqueUtils.prevGlobalUniqueId = 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Utils.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "66b1bWCUExO06FnMXRy+zFG", "Utils", undefined);
      var Point = exports('Point', function Point(x, y) {
        if (x === void 0) {
          x = 0;
        }
        if (y === void 0) {
          y = 0;
        }
        this.x = x;
        this.y = y;
      });
      var Utils = exports('Utils', /*#__PURE__*/function () {
        function Utils() {
        }

        Utils.roundTo = function roundTo(value, count) {
          if (count === void 0) {
            count = 2;
          }
          return Math.round(value * Math.pow(10, count)) / Math.pow(10, count);
        };
        Utils.getDeltaInSec = function getDeltaInSec(delta, round) {
          if (round === void 0) {
            round = 5;
          }
          return Utils.roundTo(delta / 1000, round);
        };
        Utils.copyObject = function copyObject(obj) {
          return JSON.parse(JSON.stringify(obj));
        }

        // Vector
        ;

        Utils.getPosOnLine = function getPosOnLine(p0, p1, percentage) {
          return new Point(p0.x * (1.0 - percentage) + p1.x * percentage, p0.y * (1.0 - percentage) + p1.y * percentage);
        };
        Utils.len = function len(v) {
          return Math.sqrt(v.x * v.x + v.y * v.y);
        };
        Utils.delta = function delta(p0, p1) {
          return new Point(p1.x - p0.x, p1.y - p0.y);
        };
        Utils.angle = function angle(p0, p1) {
          return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
        };
        return Utils;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ViewComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ECocosNodeEvents.ts'], function (exports) {
  var _createClass, cclegacy, ECocosNodeEvents;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ECocosNodeEvents = module.ECocosNodeEvents;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e572fUZvEBJQK8Bib/32ZCK", "ViewComponent", undefined);
      var ViewComponent = exports('ViewComponent', /*#__PURE__*/function () {
        function ViewComponent(_node, prefabPath, data, factoryFunc, killed) {
          if (_node === void 0) {
            _node = null;
          }
          if (prefabPath === void 0) {
            prefabPath = "";
          }
          if (data === void 0) {
            data = null;
          }
          if (factoryFunc === void 0) {
            factoryFunc = null;
          }
          if (killed === void 0) {
            killed = false;
          }
          this.tag = "ViewComponent";
          this._node = _node;
          this.prefabPath = prefabPath;
          this.data = data;
          this.factoryFunc = factoryFunc;
          this.killed = killed;
        }

        _createClass(ViewComponent, [{
          key: "node",
          get: function get() {
            return this._node;
          },
          set: function set(value) {
            var _this = this;
            this._node = value;
            if (!value) return;
            if (this.data && this.factoryFunc) this.factoryFunc(this.node, this.data);
            this._node.once(ECocosNodeEvents.AnimationComplete, function () {
              _this.killed = true;
            });
          }
        }]);
        return ViewComponent;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ViewManagementSystem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.mjs_cjs=&original=.js', './ViewComponent.ts', './AssetsLoader.ts', './ItemsPool.ts', './HitComponent.ts', './CocosHitComponent.ts', './NodeNames.ts', './PositionComponent.ts', './index.js'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, find, UITransform, ViewComponent, AssetsLoader,
      ItemsPool, HitComponent, CocosHitComponent, NodeNames, PositionComponent, _cjsExports;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      find = module.find;
      UITransform = module.UITransform;
    }, null, function (module) {
      ViewComponent = module.ViewComponent;
    }, function (module) {
      AssetsLoader = module.AssetsLoader;
    }, function (module) {
      ItemsPool = module.ItemsPool;
    }, function (module) {
      HitComponent = module.HitComponent;
    }, function (module) {
      CocosHitComponent = module.CocosHitComponent;
    }, function (module) {
      NodeNames = module.NodeNames;
    }, function (module) {
      PositionComponent = module.PositionComponent;
    }, function (module) {
      _cjsExports = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7e14aZnkS5JH474zd3ktGW8", "ViewManagementSystem", undefined);
      var ViewManagementSystem = exports('ViewManagementSystem', /*#__PURE__*/function (_NovaECS$System) {
        _inheritsLoose(ViewManagementSystem, _NovaECS$System);

        function ViewManagementSystem(viewPoolMap) {
          var _this;
          _this = _NovaECS$System.call(this) || this;
          _this.family = void 0;
          _this._viewPoolMap = void 0;
          _this._toAdd = [];
          _this._toRemove = [];
          _this._viewPoolMap = viewPoolMap;
          return _this;
        }

        var _proto = ViewManagementSystem.prototype;
        _proto.onAttach = function onAttach(engine) {
          _NovaECS$System.prototype.onAttach.call(this, engine);
          engine.addEntityListener(this);
          this.family = new _cjsExports.FamilyBuilder(engine).include(ViewComponent).build();
        };
        _proto.update = function update(engine, delta) {
          var _this2 = this;
          this._toAdd.forEach(function (entity) {
            var viewComponent = entity.getComponent(ViewComponent);
            _this2.createNodeForEntity(entity, viewComponent);
          });
          this._toAdd = [];
          this._toRemove.forEach(function (entity) {
            _this2.killEntityView(entity);
          });
          this._toRemove = [];
          for (var i = 0; i < this.family.entities.length; i++) {
            var entity = this.family.entities[i];
            var posComp = entity.getComponent(PositionComponent);
            var viewComponent = entity.getComponent(ViewComponent);
            if (posComp && viewComponent != null && viewComponent.node) {
              viewComponent.node.setWorldPosition(posComp.currentX, posComp.currentY, 0);
            }
          }
        };
        _proto.onDetach = function onDetach(engine) {
          var _this3 = this;
          this.family.entities.forEach(function (entity) {
            _this3.killEntityView(entity);
          });
          _NovaECS$System.prototype.onDetach.call(this, engine);
        };
        _proto.killEntityView = function killEntityView(entity) {
          var viewComp = entity.getComponent(ViewComponent);
          if (viewComp.node) {
            this._viewPoolMap.get(viewComp.prefabPath).release(viewComp.node);
            viewComp.node.removeFromParent();
            viewComp.node = null;
          }
        };
        _proto.onEntityAdded = function onEntityAdded(entity) {
          this._toAdd.push(entity);
        };
        _proto.onEntityRemoved = function onEntityRemoved(entity) {
          this._toRemove.push(entity);
        };
        _proto.createNodeForEntity = /*#__PURE__*/function () {
          var _createNodeForEntity = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(entity, viewComp) {
            var prefab, node, parent, _node$getComponent$hi;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (this._viewPoolMap.has(viewComp.prefabPath)) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 3;
                  return AssetsLoader.loadPrefab(viewComp.prefabPath);
                case 3:
                  prefab = _context.sent;
                  this._viewPoolMap.set(viewComp.prefabPath, new ItemsPool(prefab).init(1));
                case 5:
                  node = this._viewPoolMap.get(viewComp.prefabPath).obtain();
                  parent = find(NodeNames.ViewContainer);
                  node.setWorldPosition(1000, 1000, 0);
                  if (parent) {
                    parent.addChild(node);
                    entity.getComponent(ViewComponent).node = node;

                    // ant view can bit hit (optional)
                    if (entity.hasComponent(HitComponent) && node.getComponent(CocosHitComponent)) {
                      entity.getComponent(HitComponent).hitTransform = (_node$getComponent$hi = node.getComponent(CocosHitComponent).hitNode) == null ? void 0 : _node$getComponent$hi.getComponent(UITransform);
                    }
                  }
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function createNodeForEntity(_x, _x2) {
            return _createNodeForEntity.apply(this, arguments);
          }

          return createNodeForEntity;
        }();
        return ViewManagementSystem;
      }(_cjsExports.System));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WrongMachineStateException.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _assertThisInitialized, _wrapNativeSuper, cclegacy;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _wrapNativeSuper = module.wrapNativeSuper;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "468afzIti9AsLG8QqqpXnG4", "WrongMachineStateException", undefined);
      /**
       * Occurs when state machine has wrong or empty (or even null) exception.
       */
      var WrongMachineStateException = exports('WrongMachineStateException', /*#__PURE__*/function (_Error) {
        _inheritsLoose(WrongMachineStateException, _Error);

        /**
         * Initializes a new instance of the WrongMachineStateException class.
         * @param pErrorMessage - The message that describes the error.
         */
        function WrongMachineStateException(pErrorMessage) {
          var _this;
          _this = _Error.call(this, pErrorMessage) || this;
          // It's worth mentioning that Object.setPrototypeOf needs to be called
          // immediately after any super(...) calls.

          // Set the prototype explicitly
          Object.setPrototypeOf(_assertThisInitialized(_this), WrongMachineStateException.prototype);
          return _this;
        }

        return WrongMachineStateException;
      }( /*#__PURE__*/_wrapNativeSuper(Error)));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WrongStateIndexException.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _assertThisInitialized, _wrapNativeSuper, cclegacy;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _wrapNativeSuper = module.wrapNativeSuper;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "23380RoxiVD1phubV2mjm8J", "WrongStateIndexException", undefined);
      /**
       * Occurs when the index is not presented in the list of states.
       */
      var WrongStateIndexException = exports('WrongStateIndexException', /*#__PURE__*/function (_Error) {
        _inheritsLoose(WrongStateIndexException, _Error);

        /**
         * Initializes a new instance of the WrongStateIndexException class.
         * @param pErrorMessage - The message that describes the error.
         */
        function WrongStateIndexException(pErrorMessage) {
          var _this;
          _this = _Error.call(this, pErrorMessage) || this;
          // It's worth mentioning that Object.setPrototypeOf needs to be called
          // immediately after any super(...) calls.

          // Set the prototype explicitly
          Object.setPrototypeOf(_assertThisInitialized(_this), WrongStateIndexException.prototype);
          return _this;
        }

        return WrongStateIndexException;
      }( /*#__PURE__*/_wrapNativeSuper(Error)));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main');
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }

            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2ZzbS9zdGF0ZU1hdHRlci9BYnN0cmFjdC9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9mc20vc3RhdGVNYXR0ZXIvQWJzdHJhY3QvQWJzdHJhY3RCYXNlU3RhdGUudHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9mc20vc3RhdGVNYXR0ZXIvQWJzdHJhY3QvZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZnNtL3N0YXRlTWF0dGVyL0Fic3RyYWN0L0Fic3RyYWN0QmFzZVN0YXRlTWFjaGluZS50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2ZzbS9zdGF0ZU1hdHRlci9BYnN0cmFjdC9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9mc20vc3RhdGVNYXR0ZXIvQWJzdHJhY3QvQWJzdHJhY3RFdmVudERpc3BhdGNoZXIudHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9wb29sL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL3Bvb2wvQWJzdHJhY3RQb29sLnRzIiwiLi4vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZnNtL3N0YXRlTWF0dGVyL0Fic3RyYWN0L2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2ZzbS9zdGF0ZU1hdHRlci9BYnN0cmFjdC9BYnN0cmFjdFN0YXRlTWFjaGluZUNvbnRleHQudHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9mc20vc3RhdGVNYXR0ZXIvQWJzdHJhY3QvZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZnNtL3N0YXRlTWF0dGVyL0Fic3RyYWN0L0Fic3RyYWN0VHJhbnNpdGlvbi50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2ZzbS9zdGF0ZU1hdHRlci9FeGNlcHRpb25zL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2ZzbS9zdGF0ZU1hdHRlci9FeGNlcHRpb25zL0FtYmlndW91c0luaXRpYWxTdGF0ZUV4Y2VwdGlvbi50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL3V0aWxzL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL3V0aWxzL0FuaW1hdGlvbnNVdGlscy50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2ZzbS9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9mc20vQXBwQ29udGV4dC50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2ZzbS9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9mc20vQXBwRXZlbnRzLnRzIiwiLi4vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvQXBwSW5kZXgudHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9mc20vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZnNtL0FwcFN0YXRlTWFjaGluZS50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL3V0aWxzL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL3V0aWxzL0FycmF5VXRpbHMudHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy91dGlscy9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy91dGlscy9Bc3NldHNMb2FkZXIudHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9mc20vc3RhdGVNYXR0ZXIvVGVybWluYWJsZS9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9mc20vc3RhdGVNYXR0ZXIvVGVybWluYWJsZS9CYXNlVGVybWluYWJsZVN0YXRlLnRzIiwiLi4vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZnNtL3N0YXRlTWF0dGVyL1Rlcm1pbmFibGUvZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZnNtL3N0YXRlTWF0dGVyL1Rlcm1pbmFibGUvQmFzZVRlcm1pbmFibGVTdGF0ZU1hY2hpbmUudHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9lY3MvY29tcG9uZW50cy9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9lY3MvY29tcG9uZW50cy9CYXNrZXRDb21wb25lbnQudHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9lY3Mvc3lzdGVtcy9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9lY3Mvc3lzdGVtcy9CYXNrZXRNb3ZlbWVudFN5c3RlbS50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2Vjcy9zeXN0ZW1zL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2Vjcy9zeXN0ZW1zL0Jhc2tldFZTRnJ1aXRDb2xsaXNpb25TeXN0ZW0udHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9mYWN0b3JpZXMvZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZmFjdG9yaWVzL0NvY29zRmFjdG9yeS50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2NvY29zQ29tcG9uZW50cy91aS9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9jb2Nvc0NvbXBvbmVudHMvdWkvQ29jb3NGbG9hdGluZ0xhYmVsLnRzIiwiLi4vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvY29jb3NDb21wb25lbnRzL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2NvY29zQ29tcG9uZW50cy9Db2Nvc0hpdENvbXBvbmVudC50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2NvY29zQ29tcG9uZW50cy9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9jb2Nvc0NvbXBvbmVudHMvQ29jb3NQbGF5ZXJDb250cm9sbGVyLnRzIiwiLi4vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvY29jb3NDb21wb25lbnRzL3VpL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2NvY29zQ29tcG9uZW50cy91aS9Db2Nvc1VJQ291bnRlci50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2ZzbS9zdGF0ZU1hdHRlci9JbnRlcmZhY2VzL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2ZzbS9zdGF0ZU1hdHRlci9JbnRlcmZhY2VzL0NvbmRpdGlvbkNhbGxCYWNrLnRzIiwiLi4vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvaW5qZWN0cy9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9pbmplY3RzL2RlcGVuZGVuY3ktaW5qZWN0aW9uLnRzIiwiLi4vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvaW5qZWN0cy9zaGFyZWQvZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvaW5qZWN0cy9zaGFyZWQvRGljdGlvbmFyeS50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2NvY29zQ29tcG9uZW50cy9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9jb2Nvc0NvbXBvbmVudHMvRUNvY29zTm9kZUV2ZW50cy50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL3R5cGVzL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL3R5cGVzL0VJdGVtc0NhdGVnb3J5LnRzIiwiLi4vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZmFjdG9yaWVzL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2ZhY3Rvcmllcy9FbnRpdGllc0ZhY3RvcnkudHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy91dGlscy9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy91dGlscy9Gb3JtYXRVdGlscy50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2Vjcy9jb21wb25lbnRzL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2Vjcy9jb21wb25lbnRzL0ZydWl0Q29tcG9uZW50LnRzIiwiLi4vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZWNzL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2Vjcy9HYW1lRW5naW5lLnRzIiwiLi4vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZnNtL3N0YXRlcy9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9mc20vc3RhdGVzL0dhbWVPdmVyU3RhdGUudHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9zdGF0ZS9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9zdGF0ZS9HYW1lU3RhdGUudHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9lY3MvY29tcG9uZW50cy9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9lY3MvY29tcG9uZW50cy9IaXRDb21wb25lbnQudHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9mc20vc3RhdGVNYXR0ZXIvSW50ZXJmYWNlcy9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9mc20vc3RhdGVNYXR0ZXIvSW50ZXJmYWNlcy9JQmFzZVN0YXRlLnRzIiwiLi4vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZnNtL3N0YXRlTWF0dGVyL0ludGVyZmFjZXMvZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZnNtL3N0YXRlTWF0dGVyL0ludGVyZmFjZXMvSUJhc2VTdGF0ZU1hY2hpbmUudHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9mc20vc3RhdGVNYXR0ZXIvSW50ZXJmYWNlcy9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9mc20vc3RhdGVNYXR0ZXIvSW50ZXJmYWNlcy9JQmFzZVRyYW5zaXRpb24udHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9pbmplY3RzL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2luamVjdHMvaW5qZWN0LnRzIiwiLi4vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvaW5qZWN0cy9kZWNvcmF0b3JzL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2luamVjdHMvZGVjb3JhdG9ycy9pbmplY3RhYmxlLnRzIiwiLi4vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvaW5qZWN0cy9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9pbmplY3RzL0luamVjdGlvbk1hcHBpbmcudHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9mc20vc3RhdGVzL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2ZzbS9zdGF0ZXMvSW50cm9TdGF0ZS50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2ZzbS9zdGF0ZU1hdHRlci9FeGNlcHRpb25zL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2ZzbS9zdGF0ZU1hdHRlci9FeGNlcHRpb25zL0ludmFsaWRUcmFuc2l0aW9uRXhjZXB0aW9uLnRzIiwiLi4vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZnNtL3N0YXRlTWF0dGVyL0ludGVyZmFjZXMvZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZnNtL3N0YXRlTWF0dGVyL0ludGVyZmFjZXMvSVN0YXRlTWFjaGluZUNvbnRleHQudHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9mc20vc3RhdGVNYXR0ZXIvSW50ZXJmYWNlcy9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9mc20vc3RhdGVNYXR0ZXIvSW50ZXJmYWNlcy9JU3RhdGVNYWNoaW5lV2l0aEJlaGF2aW91ck9wdGlvbnMudHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9wb29sL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL3Bvb2wvSXRlbXNQb29sLnRzIiwiLi4vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvaW5qZWN0cy9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9pbmplY3RzL0tlcm5lbC50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2Vjcy9zeXN0ZW1zL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2Vjcy9zeXN0ZW1zL0tpbGxGcnVpdFN5c3RlbS50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2Vjcy9zeXN0ZW1zL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2Vjcy9zeXN0ZW1zL0tpbGxWaWV3U3lzdGVtLnRzIiwiLi4vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZnNtL3N0YXRlcy9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9mc20vc3RhdGVzL0xvYWRpbmdTdGF0ZS50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2luamVjdHMvc2hhcmVkL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2luamVjdHMvc2hhcmVkL01hcHBpbmcudHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9lY3MvY29tcG9uZW50cy9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9lY3MvY29tcG9uZW50cy9Nb3ZlbWVudENvbXBvbmVudC50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2Vjcy9zeXN0ZW1zL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2Vjcy9zeXN0ZW1zL01vdmVtZW50c1N5c3RlbS50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL05vZGVOYW1lcy50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2ZzbS9zdGF0ZU1hdHRlci9FeGNlcHRpb25zL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2ZzbS9zdGF0ZU1hdHRlci9FeGNlcHRpb25zL051bGxJbml0aWFsU3RhdGVFeGNlcHRpb24udHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9mc20vc3RhdGVNYXR0ZXIvRXhjZXB0aW9ucy9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9mc20vc3RhdGVNYXR0ZXIvRXhjZXB0aW9ucy9OdWxsU3RhdGVFeGNlcHRpb24udHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9mc20vc3RhdGVzL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2ZzbS9zdGF0ZXMvUGxheUdhbWVTdGF0ZS50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2Vjcy9jb21wb25lbnRzL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2Vjcy9jb21wb25lbnRzL1Bvc2l0aW9uQ29tcG9uZW50LnRzIiwiLi4vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvUHJlZmFiTmFtZXMudHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9lY3Mvc3lzdGVtcy9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9lY3Mvc3lzdGVtcy9TY29yZXNTeXN0ZW0udHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9pbmplY3RzL2RlY29yYXRvcnMvZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvaW5qZWN0cy9kZWNvcmF0b3JzL3NpbmdsZXRvbi50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2Vjcy9zeXN0ZW1zL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2Vjcy9zeXN0ZW1zL1NwYXduRnJ1aXRTeXN0ZW0udHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9mc20vc3RhdGVNYXR0ZXIvQmFzZS9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9mc20vc3RhdGVNYXR0ZXIvQmFzZS9TdGF0ZU1hY2hpbmVCYXNlLnRzIiwiLi4vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZnNtL3N0YXRlTWF0dGVyL0VudW0vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZnNtL3N0YXRlTWF0dGVyL0VudW0vU3RhdGVNYWNoaW5lQmVoYXZpb3JFbnVtLnRzIiwiLi4vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZnNtL3N0YXRlTWF0dGVyL0V4Y2VwdGlvbnMvZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZnNtL3N0YXRlTWF0dGVyL0V4Y2VwdGlvbnMvU3RhdGVOb3RGb3VuZEV4Y2VwdGlvbi50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2ZzbS9zdGF0ZU1hdHRlci9CYXNlL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2ZzbS9zdGF0ZU1hdHRlci9CYXNlL1N0YXRlVHJhbnNpdGlvbi50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2ZzbS9zdGF0ZU1hdHRlci9UZXJtaW5hYmxlL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2ZzbS9zdGF0ZU1hdHRlci9UZXJtaW5hYmxlL1Rlcm1pbmFibGVDb250ZXh0LnRzIiwiLi4vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvdXRpbHMvZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvdXRpbHMvVGltZW91dFV0aWxzLnRzIiwiLi4vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZnNtL3N0YXRlTWF0dGVyL0VudW0vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZnNtL3N0YXRlTWF0dGVyL0VudW0vVHJhbnNpdGlvbkJlaGF2aW91ckVudW0udHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9pbmplY3RzL3R5cGUvZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvaW5qZWN0cy90eXBlL1R5cGUudHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9pbmplY3RzL3V0aWxzL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2luamVjdHMvdXRpbHMvVW5pcXVlVXRpbHMudHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy91dGlscy9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy91dGlscy9VdGlscy50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2Vjcy9jb21wb25lbnRzL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2Vjcy9jb21wb25lbnRzL1ZpZXdDb21wb25lbnQudHMiLCIuLi9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9lY3Mvc3lzdGVtcy9maWxlOi9Vc2Vycy9zbWl2YWwvRW90VGVzdC9hc3NldHMvc2NyaXB0cy9lY3Mvc3lzdGVtcy9WaWV3TWFuYWdlbWVudFN5c3RlbS50cyIsIi4uL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2ZzbS9zdGF0ZU1hdHRlci9FeGNlcHRpb25zL2ZpbGU6L1VzZXJzL3NtaXZhbC9Fb3RUZXN0L2Fzc2V0cy9zY3JpcHRzL2ZzbS9zdGF0ZU1hdHRlci9FeGNlcHRpb25zL1dyb25nTWFjaGluZVN0YXRlRXhjZXB0aW9uLnRzIiwiLi4vZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZnNtL3N0YXRlTWF0dGVyL0V4Y2VwdGlvbnMvZmlsZTovVXNlcnMvc21pdmFsL0VvdFRlc3QvYXNzZXRzL3NjcmlwdHMvZnNtL3N0YXRlTWF0dGVyL0V4Y2VwdGlvbnMvV3JvbmdTdGF0ZUluZGV4RXhjZXB0aW9uLnRzIl0sIm5hbWVzIjpbIkFic3RyYWN0QmFzZVN0YXRlIiwicENvbnRleHQiLCJfY29udGV4dCIsIl90cmFuc2l0aW9ucyIsIl9wcm90byIsInByb3RvdHlwZSIsIkJlZm9yZUVudGVyIiwiQWZ0ZXJFbnRlciIsIkV4ZWN1dGUiLCJTdGF0ZU1hY2hpbmUiLCJNb3ZlTmV4dCIsIkJlZm9yZUV4aXQiLCJBZnRlckV4aXQiLCJBZGRUcmFuc2l0aW9uIiwicFRyYW5zaXRpb24iLCJwdXNoIiwiUmVtb3ZlVHJhbnNpdGlvbiIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsIl9jcmVhdGVDbGFzcyIsImtleSIsImdldCIsInNldCIsIl9SRiIsInBvcCIsIkFic3RyYWN0QmFzZVN0YXRlTWFjaGluZSIsIl9BYnN0cmFjdEV2ZW50RGlzcGF0YyIsIl9pbmhlcml0c0xvb3NlIiwicEluaXRpYWxTdGF0ZSIsIl90aGlzIiwiY2FsbCIsIl9vcHRpb25zIiwiQXJyYXkiLCJfc3RhdGVzIiwiX2luaXRpYWxTdGF0ZSIsIl9jdXJyZW50U3RhdGUiLCJBZGRTdGF0ZSIsInBTdGF0ZSIsInBTZXRBc0luaXRpYWwiLCJTZXRJbml0aWFsU3RhdGUiLCJsZW5ndGgiLCJwRnJvbVN0YXRlIiwicFRvU3RhdGUiLCJwQ29uZGl0aW9uIiwicE9yZGVyIiwicEJlaGF2aW9yRW51bUFmdGVyVHJhbnNpdGlvbiIsIlRyYW5zaXRpb25CZWhhdmlvckVudW0iLCJDT05USU5VRV9BRlRFUl9UUkFOU0lUSU9OIiwidHJhbnNpdGlvbiIsIlN0YXRlVHJhbnNpdGlvbiIsIkluSW5pdGlhbFN0YXRlIiwiSXNTdGF0ZSIsInN0YXRlIiwiV3JvbmdNYWNoaW5lU3RhdGVFeGNlcHRpb24iLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlIiwiVHJhbnNpdGlvbnMiLCJfc3RlcCIsImRvbmUiLCJ2YWx1ZSIsIkNhbkV4ZWN1dGVUcmFuc2l0aW9uIiwiUGVyZm9ybVRyYW5zaXRpb24iLCJSZW1vdmVTdGF0ZSIsIlJlbW92ZUZyb21TdGF0ZXMiLCJSZXNldCIsInBSZXNldFRoZUNvbnRleHQiLCJfdGhpcyRfY29udGV4dCIsIkV4ZWN1dGVTdGF0ZUNoYW5nZUxpZmVjeWNsZSIsIk51bGxJbml0aWFsU3RhdGVFeGNlcHRpb24iLCJSdW4iLCJOdWxsU3RhdGVFeGNlcHRpb24iLCJTZXRJbml0aWFsU3RhdGVCeUluZGV4IiwicFN0YXRlSW5kZXgiLCJXcm9uZ1N0YXRlSW5kZXhFeGNlcHRpb24iLCJwUmVzZXRDb250ZXh0RGF0YSIsIkFtYmlndW91c0luaXRpYWxTdGF0ZUV4Y2VwdGlvbiIsIlN0YXRlTm90Rm91bmRFeGNlcHRpb24iLCJJc0JlaGF2aW91ck9wdGlvblNldCIsInBNYWNoaW5lQmVoYXZpb3VyT3B0aW9uIiwiZm9yRWFjaCIsInBPcHJpb24iLCJwSW5kZXgiLCJ0b0ZpeGVkIiwiU2V0QmVoYXZpb3VyT3B0aW9uIiwiVW5zZXRCZWhhdmlvdXJPcHRpb24iLCJHZXRDdXJyZW50U3RhdGUiLCJwU3RyaWN0Q2hlY2siLCJJc0FjdGl2ZSIsIkZyb21TdGF0ZSIsIkludmFsaWRUcmFuc2l0aW9uRXhjZXB0aW9uIiwiQ2FuRXhlY3V0ZSIsIl90aGlzJF9jdXJyZW50U3RhdGUiLCJUb1N0YXRlIiwiU3RhdGVNYWNoaW5lQmVoYXZpb3JFbnVtIiwiU1RPUF9PTl9JTklUSUFMX1NUQVRFIiwiQWZ0ZXJUcmFuc2l0aW9uQmVoYXZpb3JFbnVtIiwiU1RPUF9BRlRFUl9UUkFOU0lUSU9OIiwicFRhcmdldFN0YXRlIiwiX3RoaXMkX2N1cnJlbnRTdGF0ZTIiLCJfdGhpcyRfY3VycmVudFN0YXRlMyIsIm9sZFN0YXRlIiwiQWJzdHJhY3RFdmVudERpc3BhdGNoZXIiLCJfQ29tcG9uZW50IiwiX2xlbiIsImFyZ3VtZW50cyIsImFyZ3MiLCJfa2V5IiwiYXBwbHkiLCJjb25jYXQiLCJjYWxsYmFja3MiLCJNYXAiLCJjYWxsYmFja3NGb3JEZWxldGUiLCJjYWxsYmFja3NGb3JBZGQiLCJJbkRpc3BhdGNoIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBFdmVudCIsInBDYWxsYmFjayIsImNiQXJyYXkiLCJzaXplIiwiaGFzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50Q2FsbEJhY2tzIiwiZGVsZXRlQ2FsbGJhY2tzIiwiX3RoaXMyIiwicENhbGxiYWNrVG9EZWxldGVBcnJheSIsInBFdmVudE5hbWUiLCJjYWxsYmFja0FycmF5IiwiZmlsdGVyIiwic29tZSIsInBDYWxsYmFja1RvRGVsZXRlIiwiY2xlYXIiLCJhZGRDYWxsYmFja3MiLCJfdGhpczMiLCJwQ2FsbGJhY2tzVG9BZGRBcnJheSIsImNhbGxiYWNrc1RvQWRkIiwicENhbGxiYWNrVG9BZGQiLCJkaXNwYXRjaCIsInBEYXRhIiwiaSIsImNhbGxiYWNrIiwiQ29tcG9uZW50IiwiQWJzdHJhY3RQb29sIiwib2JqZWN0cyIsImluaXQiLCJwU2l6ZSIsInJlbGVhc2UiLCJjcmVhdGVOZXdJbnN0YW5jZSIsIm9idGFpbiIsInBPYmplY3QiLCJBYnN0cmFjdFN0YXRlTWFjaGluZUNvbnRleHQiLCJwU3RhdGVNYWNoaW5lIiwiX3N0YXRlTWFjaGluZSIsIkFic3RyYWN0VHJhbnNpdGlvbiIsInBBZnRlclRyYW5zaXRpb25CZWhhdmlvckVudW0iLCJfb3JkZXIiLCJfY29uZGl0aW9uIiwiX3RyYW5zaXRpb25CZWhhdmlvciIsIl9mcm9tU3RhdGUiLCJfdG9TdGF0ZSIsIl9pc0FjdGl2ZSIsIkNvbmRpdGlvbiIsInJlc3VsdCIsInBWYWx1ZSIsIl9FcnJvciIsInBFcnJvck1lc3NhZ2UiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJfd3JhcE5hdGl2ZVN1cGVyIiwiRXJyb3IiLCJBbmltYXRpb25zVXRpbHMiLCJwbGF5U3BpbmUiLCJwU3BpbmUiLCJwQW5pbWF0aW9uTmFtZSIsInBMb29wIiwicGF1c2VkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJkaXJlY3RvciIsIl9ub2RlQWN0aXZhdG9yIiwiYWN0aXZhdGVOb2RlIiwibm9kZSIsImFjdGl2ZSIsImZpbmRBbmltYXRpb24iLCJjb25zb2xlIiwid2FybiIsInNldEFuaW1hdGlvbiIsInNwaW5lUHJvbWlzZVJlc29sdmVzIiwic2V0Q29tcGxldGVMaXN0ZW5lciIsInJlcyIsImFuaW1hdGlvbiIsInBsYXlBbmltYXRpb24iLCJwTm9kZSIsImdldENvbXBvbmVudCIsIkFuaW1hdGlvbiIsIm5hbWUiLCJjbGlwcyIsImZpbmQiLCJjbGlwIiwiYW5pbWF0aW9uUHJvbWlzZVJlc29sdmVzIiwib25jZSIsIkV2ZW50VHlwZSIsIkZJTklTSEVEIiwicGxheSIsIkFwcENvbnRleHQiLCJfVGVybWluYWJsZUNvbnRleHQiLCJjb25maWciLCJsb2NhbGUiLCJzdGFydGVyTm9kZSIsImdhbWVVSSIsInRvYXN0Tm9kZSIsInRvYXN0TGFiZWwiLCJvblVwZGF0ZSIsIlRlcm1pbmFibGVDb250ZXh0IiwiQXBwRXZlbnRzIiwiY2NjbGFzcyIsIl9kZWNvcmF0b3IiLCJtZW51IiwiQXBwSW5kZXgiLCJfZGVjIiwiX2RlYzIiLCJfY2xhc3MiLCJvbkxvYWQiLCJBcHBTdGF0ZU1hY2hpbmUiLCJDb250ZXh0IiwiTm9kZU5hbWVzIiwiVG90YWxQb2ludHMiLCJUb2FzdE1lc3NhZ2UiLCJnZXRDaGlsZEJ5TmFtZSIsIkxhYmVsIiwibG9hZGluZ1N0YXRlIiwiTG9hZGluZ1N0YXRlIiwiaW50cm9TdGF0ZSIsIkludHJvU3RhdGUiLCJwbGF5aW5nU3RhdGUiLCJQbGF5R2FtZVN0YXRlIiwiZ2FtZU92ZXJTdGF0ZSIsIkdhbWVPdmVyU3RhdGUiLCJ1cGRhdGUiLCJkdCIsIl90aGlzJF9jb250ZXh0JG9uVXBkYSIsIl9yZWYiLCJsb2ciLCJBcnJheVV0aWxzIiwicmVtb3ZlSXRlbSIsImxpc3QiLCJpdGVtIiwicmVtb3ZlQ291bnQiLCJSRU1PVkVfQ09VTlRfQUxMIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwidG90YWxSZW1vdmVkQ291bnQiLCJpdGVtSW5kZXgiLCJyZW1vdmVJdGVtc0Zyb21BcnJheSIsInJlbW92ZUl0ZW1zIiwiZ2V0UmFuZG9tSXRlbSIsImV4Y2VwdCIsInRlbXBJbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJlbW92ZUR1cGxpY2F0ZXMiLCJhcnJheSIsInJlbW92ZUR1cGxpY2F0ZXNGaWx0ZXIiLCJzaHVmZmxlIiwic29ydCIsInByZWRpY2F0ZSIsIm1lcmdlVW5pcXVlIiwiYTEiLCJhMiIsImEiLCJ2YWx1ZXMiLCJtYXAiLCJfaSIsIl9PYmplY3Qka2V5cyIsImtleXMiLCJnZXRBcnJheUZpbGxlZFdpdGhSYW5nZSIsInN0YXJ0IiwiZW5kIiwiZmlsbCIsIl8iLCJpZHgiLCJnZXRXZWlnaHRlZFJhbmRvbSIsIm9wdGlvbnMiLCJ3ZWlnaHRzIiwid2VpZ2h0IiwibGFzdEluZGV4T2YiLCJBc3NldHNMb2FkZXIiLCJsb2FkSlNPTiIsInBhdGgiLCJyZWplY3QiLCJyZXNvdXJjZXMiLCJsb2FkIiwiSnNvbkFzc2V0IiwiZXJyIiwianNvbkFzc2V0IiwiZXJyb3IiLCJtZXNzYWdlIiwianNvbiIsImxvYWRQcmVmYWIiLCJQcmVmYWIiLCJwcmVmYWIiLCJCYXNlVGVybWluYWJsZVN0YXRlIiwiVGVybWluYXRlIiwiQmFzZVRlcm1pbmFibGVTdGF0ZU1hY2hpbmUiLCJpc1Rlcm1pbmF0ZWQiLCJjb25zdHJ1Y3RvciIsIkJhc2tldENvbXBvbmVudCIsInRhZyIsIkJhc2tldE1vdmVtZW50U3lzdGVtIiwiX05vdmFFQ1MkU3lzdGVtIiwiZmFtaWx5IiwiYmFza2V0Wm9uZSIsIl9nYW1lU3RhdGUiLCJpbmplY3QiLCJHYW1lU3RhdGUiLCJvbkF0dGFjaCIsImVuZ2luZSIsIlpvbmVCYXNrZXQiLCJhZGRFbnRpdHkiLCJFbnRpdGllc0ZhY3RvcnkiLCJjcmVhdGVCYXNrZXRFbnRpdHkiLCJOb3ZhRUNTIiwiRmFtaWx5QnVpbGRlciIsImluY2x1ZGUiLCJidWlsZCIsImRlbHRhIiwiZW50aXRpZXMiLCJlbnRpdHkiLCJwb3NDb21wIiwiUG9zaXRpb25Db21wb25lbnQiLCJjdXJyZW50WCIsImdldFN0YXRlIiwiYmFza2V0UG9zaXRpb25YIiwiY3VycmVudFkiLCJnZXRXb3JsZFBvc2l0aW9uIiwieSIsIlN5c3RlbSIsIkJhc2tldFZTRnJ1aXRDb2xsaXNpb25TeXN0ZW0iLCJmYW1pbHlGcnVpdHMiLCJmYW1pbHlCYXNrZXQiLCJGcnVpdENvbXBvbmVudCIsIkhpdENvbXBvbmVudCIsIl9lbnRpdHkxJGdldENvbXBvbmVudCIsImVudGl0eTEiLCJib3gxIiwiaGl0VHJhbnNmb3JtIiwiZ2V0Qm91bmRpbmdCb3hUb1dvcmxkIiwiaiIsIl9oaXRDb21wJGhpdFRyYW5zZm9ybSIsImVudGl0eTIiLCJoaXRDb21wIiwiYm94MiIsImludGVyc2VjdHMiLCJraWxsZWQiLCJDb2Nvc0ZhY3RvcnkiLCJidWlsZEZsb2F0aW5nTGFiZWwiLCJkYXRhIiwiY29tcCIsIkNvY29zRmxvYXRpbmdMYWJlbCIsImZvcm1hdEZ1bmMiLCJmb3JtYXRIYW5kbGVycyIsImZvcm1hdHRlciIsImxhYmVsIiwic3RyaW5nIiwic2NvcmUiLCJwcm9wZXJ0eSIsIl9kZWMzIiwidHlwZSIsIl9jbGFzczIiLCJfaW5pdGlhbGl6ZXJEZWZpbmVQcm9wZXJ0eSIsIl9kZXNjcmlwdG9yIiwib25FbmFibGUiLCJ0aGVuIiwiZW1pdCIsIkVDb2Nvc05vZGVFdmVudHMiLCJBbmltYXRpb25Db21wbGV0ZSIsIl9hcHBseURlY29yYXRlZERlc2NyaXB0b3IiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJpbml0aWFsaXplciIsIkNvY29zSGl0Q29tcG9uZW50IiwiTm9kZSIsIkNvY29zUGxheWVyQ29udHJvbGxlciIsIm9uIiwiTU9VU0VfTU9WRSIsImV2ZW50IiwibW91c2VQb3MiLCJnZXRVSUxvY2F0aW9uIiwic2V0QmFza2V0VGFyZ2V0UG9zaXRpb24iLCJ4IiwiVE9VQ0hfTU9WRSIsInRvdWNoUG9zIiwicmVxdWlyZUNvbXBvbmVudCIsIkNvY29zVUlDb3VudGVyIiwiX2RlYzQiLCJDQ1N0cmluZyIsIl9kZWM1IiwiRW51bSIsIkZvcm1hdFR5cGUiLCJfZGVzY3JpcHRvcjIiLCJfbGFiZWwiLCJfc3RhdGUiLCJOb0Zvcm1hdCIsImNsYXNzTWFwIiwiRGljdGlvbmFyeSIsInRlbXBJZCIsIlVuaXF1ZVV0aWxzIiwiZ2V0T2JqZWN0VW5pcXVlSWQiLCJhZGQiLCJyZW1vdmUiLCJjYWxsYmFja2ZuIiwidGVtcEtleSIsImtleXNDb3VudCIsImtleUluZGV4IiwiRUl0ZW1zQ2F0ZWdvcnkiLCJFRW50aXR5SURzIiwiY3JlYXRlRmxvYXRpbmdMYWJlbEVudGl0eSIsIndvcmxkUG9zaXRpb24iLCJFbnRpdHkiLCJpZCIsIkZsb2F0aW5nTGFiZWwiLCJ2aWV3Q29tcCIsInB1dENvbXBvbmVudCIsIlZpZXdDb21wb25lbnQiLCJwcmVmYWJQYXRoIiwiUHJlZmFiTmFtZXMiLCJJdGVtUG9pbnRzIiwiRmxvYXRpbmdQb2ludHMiLCJmYWN0b3J5RnVuYyIsImNyZWF0ZUZydWl0RW50aXR5IiwiZnJ1aXQiLCJzcGF3blpvbmUiLCJGcnVpdCIsImZydWl0Q29tcG9uZW50IiwiY2F0ZWdvcnkiLCJwb2ludHMiLCJzcGF3blRyYW5zZm9ybSIsIlVJVHJhbnNmb3JtIiwic3Bhd25XaWR0aCIsIndpZHRoIiwidmlldyIsImdldFZpc2libGVTaXplIiwic3Bhd25Qb3MiLCJyYW5kb21YIiwic3RhcnRZIiwiTW92ZW1lbnRDb21wb25lbnQiLCJ2ZWxvY2l0eVkiLCJzcGVlZCIsIkJhc2tldCIsIkZvcm1hdFV0aWxzIiwibm9Gb3JtYXQiLCJ0b1N0cmluZyIsInRvTU1zcyIsImlzRmluaXRlIiwibW0iLCJzcyIsInRvVG90YWxQb2ludHMiLCJ0b0Zsb2F0aW5nUG9pbnRzIiwiX2Zvcm1hdEhhbmRsZXJzIiwiTU1zcyIsIkEiLCJHYW1lRW5naW5lIiwiX05vdmFFQ1MkRW5naW5lIiwiX2dhbWVTcGVlZCIsIl90aW1lIiwiX3N5c3RlbXNMaXN0IiwiX2NvbmZpZyIsIl92aWV3UG9vbE1hcCIsIl9pbml0U3lzdGVtcyIsInN0YXJ0VGltZSIsInRpbWUiLCJjbGVhbiIsInN5c3RlbSIsInJlbW92ZVN5c3RlbSIsInJlbW92ZUVudGl0eSIsIm1heEZQUyIsIm1pbkZQUyIsImZyYW1lVGltZSIsImNvdW50IiwibWluIiwiVXRpbHMiLCJyb3VuZFRvIiwic3BlbmRUaW1lIiwidGltZUxlZnQiLCJTcGF3bkZydWl0U3lzdGVtIiwiTW92ZW1lbnRzU3lzdGVtIiwiVmlld01hbmFnZW1lbnRTeXN0ZW0iLCJTY29yZXNTeXN0ZW0iLCJLaWxsRnJ1aXRTeXN0ZW0iLCJLaWxsVmlld1N5c3RlbSIsImFkZFN5c3RlbSIsIl9pbnN0YW5jZSIsIkVuZ2luZSIsIkJ1dHRvbiIsIkNMSUNLIiwib2ZmIiwiaW5zdGFuY2UiLCJzaW5nbGV0b24iLCJfdGltZUxlZnQiLCJfc2NvcmUiLCJfYmFza2V0VGFyZ2V0WCIsImFkZFNjb3JlIiwia2VybmVsIiwiS2VybmVsIiwiaW5qZWN0YWJsZSIsInRhcmdldCIsIkluamVjdGlvbk1hcHBpbmciLCJfTWFwcGluZyIsImNsYXNzZXNNYXAiLCJpbml0aWFsQ29uc3RydWN0b3IiLCJfaW5zdGFuY2VSZXN1bHRDb25zdHJ1Y3RvciIsImlzU2luZ2xldG9uIiwiX2lzRm9yY2VDcmVhdGlvbiIsInRvIiwiZ2V0SW5zdGFuY2UiLCJjcmVhdGVJbnN0YW5jZSIsImdldENvbnN0cnVjdG9yIiwiX2NvbnN0cnVjdCIsImhhc0luc3RhbmNlIiwiZGVzdHJveUluc3RhbmNlIiwiYXNTaW5nbGV0b24iLCJpbnN0YW5jZUNvbnN0cnVjdG9yIiwibmV3VGhpcyIsImV4aXN0ZW50aWFsVHlwZSIsIm90aGVyIiwiaXNGb3JjZUNyZWF0aW9uIiwiZm9yY2VDcmVhdGlvbiIsIm9sZFRoaXMiLCJNYXBwaW5nIiwiSXRlbXNQb29sIiwiaW5zdGFudGlhdGUiLCJiaW5kIiwiZ2V0QmluZGluZyIsIm1hcHBpbmciLCJhY3RpdmF0ZSIsImluamVjdGlvbnNMaXN0Iiwia2lsbFpvbmUiLCJfZW5naW5lIiwiWm9uZUtpbGwiLCJraWxsWm9uZVkiLCJERUZBVUxUX0xPQ0FMRSIsIl9sb2FkIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJpMThuIiwid3JhcCIsIl9jYWxsZWUkIiwicHJldiIsIm5leHQiLCJzZW50Iiwic3RvcCIsImd1YXJkcyIsImV4ZWN1dGVPbmNlIiwiZXh0cmFjdEFsbFByb3BlcnRpZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImlzT25jZSIsIndpdGhHdWFyZHMiLCJfa2V5MiIsImV4ZWN1dGlvbkFsbG93ZWRCeUd1YXJkcyIsImd1YXJkIiwiY3JlYXRlRmlsdGVyIiwiZmlsdGVyRmllbGRzIiwicHJvcGVydGllc0luTWFwcGluZyIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJ2ZWxvY2l0eVgiLCJtb3ZlbWVudENvbXAiLCJfZ2FtZSIsImdhbWVTdGF0ZSIsImZydWl0Q29tcCIsIlZlYzMiLCJfc3Bhd25JdGVtcyIsIl9uZXh0U3Bhd25UaW1lIiwiX3NwYXduSW50ZXJ2YWwiLCJpdGVtcyIsInJhdGUiLCJab25lU3Bhd24iLCJfc3Bhd25GcnVpdCIsInRvdGFsV2VpZ2h0IiwicmVkdWNlIiwic3VtIiwicmFuZG9tV2VpZ2h0Iiwic2VsZWN0ZWRJdGVtIiwiU3RhdGVNYWNoaW5lQmFzZSIsIlRpbWVvdXRVdGlscyIsImRlbGF5IiwibXMiLCJzZXRUaW1lb3V0IiwiZ2V0VGltZU91dFByb21pc2UiLCJ0aW1lT3V0IiwiaGFuZGxlciIsInRpbWVvdXQiLCJnZXRJZCIsIm1vdmUiLCJ0d2VlbiIsImJ5IiwiY2hlY2tFbmQiLCJ0aW1lcnMiLCJpc0FjdGl2ZSIsInVuZGVmaW5lZCIsImNsZWFyVGltZW91dCIsImNsZWFyQnlJZCIsInNldEludGVydmFsIiwiX2xlbjIiLCJnZXRJbnRlcnZhbFR3ZWVuIiwiY2xlYXJJbnRlcnZhbCIsImlzTmFOIiwidGwiLCJtYXhJbnRlZ2VyIiwiTUFYX1NBRkVfSU5URUdFUiIsInBvdyIsImxhc3RJZCIsInRpbWVySWQiLCJvYmplY3QiLCJVTklRVUVfSURfUFJPUF9OQU1FIiwicHJldkdsb2JhbFVuaXF1ZUlkIiwiZ2xvYmFsVW5pcXVlSWQiLCJQb2ludCIsInJvdW5kIiwiZ2V0RGVsdGFJblNlYyIsImNvcHlPYmplY3QiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJnZXRQb3NPbkxpbmUiLCJwMCIsInAxIiwicGVyY2VudGFnZSIsImxlbiIsInYiLCJzcXJ0IiwiYW5nbGUiLCJhdGFuMiIsIlBJIiwiX25vZGUiLCJ2aWV3UG9vbE1hcCIsIl90b0FkZCIsIl90b1JlbW92ZSIsImFkZEVudGl0eUxpc3RlbmVyIiwidmlld0NvbXBvbmVudCIsImNyZWF0ZU5vZGVGb3JFbnRpdHkiLCJraWxsRW50aXR5VmlldyIsInNldFdvcmxkUG9zaXRpb24iLCJvbkRldGFjaCIsInJlbW92ZUZyb21QYXJlbnQiLCJvbkVudGl0eUFkZGVkIiwib25FbnRpdHlSZW1vdmVkIiwiX2NyZWF0ZU5vZGVGb3JFbnRpdHkiLCJwYXJlbnQiLCJfbm9kZSRnZXRDb21wb25lbnQkaGkiLCJWaWV3Q29udGFpbmVyIiwiYWRkQ2hpbGQiLCJoYXNDb21wb25lbnQiLCJoaXROb2RlIiwiX3giLCJfeDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7TUFJQTs7OztVQUlzQkEsaUJBQWlCOzs7OztRQWtCdEMsU0FBQUEsa0JBQW1CQyxRQUFrQixFQUNyQzs7Ozs7VUFqQkEsS0FJVUMsUUFBUTs7Ozs7VUFFbEIsS0FJVUMsWUFBWSxHQUFnQyxFQUFFO1VBUXZELElBQUksQ0FBQ0QsUUFBUSxHQUFHRCxRQUFROzs7Ozs7UUFHekIsSUFBQUcsTUFBQSxHQUFBSixpQkFBQSxDQUFBSyxTQUFBOzs7OztRQTBCQUQsTUFBQSxDQUlBRSxXQUFXLEdBQVgsU0FBQUEsY0FDQTs7Ozs7OztRQUdBRixNQUFBLENBS0FHLFVBQVUsR0FBVixTQUFBQSxhQUNBOzs7Ozs7O1FBR0FILE1BQUEsQ0FLQUksT0FBTyxHQUFQLFNBQUFBLFVBQ0E7VUFDQyxJQUFJLENBQUNOLFFBQVEsQ0FBQ08sWUFBWSxDQUFDQyxRQUFRLEVBQUU7Ozs7Ozs7O1FBR3RDTixNQUFBLENBS0FP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QUEsQ0FBQUMsR0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7TUN6SEQ7OztVQUdhNkIsMEJBQTBCLGdFQUFBK0csTUFBQTtRQUFBekksY0FBQSxDQUFBMEIsMEJBQUEsRUFBQStHLE1BQUE7Ozs7O1FBTXRDLFNBQUEvRywyQkFBWWdILGFBQXFCLEVBQ2pDO1VBQUEsSUFBQXhJLEtBQUE7VUFDQ0EsS0FBQSxHQUFBdUksTUFBQSxDQUFBdEksSUFBQSxPQUFNdUksYUFBYSxDQUFDOzs7OztVQUtwQkMsTUFBTSxDQUFDQyxjQUFjLENBQUFDLHNCQUFBLENBQUEzSSxLQUFBLEdBQU93QiwwQkFBMEIsQ0FBQ2pELFNBQVMsQ0FBQztVQUFDLE9BQUF5QixLQUFBOztRQUNsRSxPQUFBd0IsMEJBQUE7TUFBQSxnQkFBQW9ILGdCQUFBLENBZDhDQyxLQUFLO2NBZXBELENBQUFuSixHQUFBLENBQUFDLEdBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O01DbEJEOzs7VUFHYWlELHdCQUF3Qiw4REFBQTJGLE1BQUE7UUFBQXpJLGNBQUEsQ0FBQThDLHdCQUFBLEVBQUEyRixNQUFBOzs7OztRQU1wQyxTQUFBM0YseUJBQVk0RixhQUFxQixFQUNqQztVQUFBLElBQUF4SSxLQUFBO1VBQ0NBLEtBQUEsR0FBQXVJLE1BQUEsQ0FBQXRJLElBQUEsT0FBTXVJLGFBQWEsQ0FBQzs7Ozs7VUFLcEJDLE1BQU0sQ0FBQ0MsY0FBYyxDQUFBQyxzQkFBQSxDQUFBM0ksS0FBQSxHQUFPNEMsd0JBQXdCLENBQUNyRSxTQUFTLENBQUM7VUFBQyxPQUFBeUIsS0FBQTs7UUFDaEUsT0FBQTRDLHdCQUFBO01BQUEsZ0JBQUFnRyxnQkFBQSxDQWQ0Q0MsS0FBSztjQWVsRCxDQUFBbkosR0FBQSxDQUFBQyxHQUFBIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUJhc2VTdGF0ZX0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUJhc2VTdGF0ZVwiO1xuaW1wb3J0IHtJQmFzZVRyYW5zaXRpb259IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lCYXNlVHJhbnNpdGlvblwiO1xuaW1wb3J0IHtBYnN0cmFjdFN0YXRlTWFjaGluZUNvbnRleHR9IGZyb20gXCIuL0Fic3RyYWN0U3RhdGVNYWNoaW5lQ29udGV4dFwiO1xuXG4vKipcbiAqIEFic3RyYWN0IGNsYXNzIHRoYXQgZGVmaW5lIHRoZSBiYXNpYyBiZWhhdmlvciBvZiBtYWNoaW5lIHN0YXRlXG4gKiBAVHlwZVBhcmFtZXRlciBUQ29udGV4dCAtIGEgc3RhdGUgbWFjaGluZSBjb250ZXh0IGNsYXNzLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RCYXNlU3RhdGU8VENvbnRleHQgZXh0ZW5kcyBBYnN0cmFjdFN0YXRlTWFjaGluZUNvbnRleHQ8dW5rbm93biwgdW5rbm93bj4+IGltcGxlbWVudHMgSUJhc2VTdGF0ZTxUQ29udGV4dD5cbntcblx0LyoqXG5cdCAqIFN0YXRlIG1hY2hpbmUgY29udGV4dFxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRwcm90ZWN0ZWQgX2NvbnRleHQ6IFRDb250ZXh0O1xuXG5cdC8qKlxuXHQgKiBTdGF0ZSBtYWNoaW5lIHRyYW5zaXRpb25zXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdHByb3RlY3RlZCBfdHJhbnNpdGlvbnM6IElCYXNlVHJhbnNpdGlvbjxUQ29udGV4dD5bXSA9IFtdO1xuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplIHRoZSBuZXcgaW5zdGFuY2Ugb2YgdGhlIEFic3RyYWN0QmFzZVN0YXRlIHdpdGggY29udGV4dFxuXHQgKiBAcGFyYW0gcENvbnRleHQgLSBBIHN0YXRlIG1hY2hpbmUgY29udGV4dFxuXHQgKi9cblx0cHVibGljIGNvbnN0cnVjdG9yKHBDb250ZXh0OiBUQ29udGV4dClcblx0e1xuXHRcdHRoaXMuX2NvbnRleHQgPSBwQ29udGV4dDtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplIHRoZSBuZXcgaW5zdGFuY2Ugb2YgdGhlIEFic3RyYWN0QmFzZVN0YXRlXG5cdCAqL1xuXHRwdWJsaWMgZ2V0IENvbnRleHQoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX2NvbnRleHQ7XG5cdH1cblxuXHQvKipcblx0ICogQ29udGV4dCBwcm9wZXJ0eSBzZXR0ZXJcblx0ICogQHBhcmFtIHBDb250ZXh0IC0gQSBzdGF0ZSBtYWNoaW5lIGNvbnRleHRcblx0ICovXG5cdHB1YmxpYyBzZXQgQ29udGV4dChwQ29udGV4dDogVENvbnRleHQpXG5cdHtcblx0XHR0aGlzLl9jb250ZXh0ID0gcENvbnRleHQ7XG5cdH1cblxuXHQvKipcblx0ICogQSBsaXN0IG9mIHRyYW5zaXRpb25zIGZvciBjdXJyZW50IHN0YXRlXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0Z2V0IFRyYW5zaXRpb25zKCk6IElCYXNlVHJhbnNpdGlvbjxUQ29udGV4dD5bXVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX3RyYW5zaXRpb25zO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBtZXRob2QgdGhhdCBzdGF0ZSBtYWNoaW5lIGNhbGxpbmcgYmVmb3JlIGVudGVyaW5nIHRoZSBzdGF0ZVxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdEJlZm9yZUVudGVyKCk6IHZvaWRcblx0e1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBtZXRob2QgdGhhdCBzdGF0ZSBtYWNoaW5lIGNhbGxpbmcgb25jZSB0aGlzIHN0YXRlIGhhcyBiZWVuXG5cdCAqIHNldCBidXQgYmVmb3JlIHRoZSBtYWluIGV4ZWN1dGlvblxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdEFmdGVyRW50ZXIoKTogdm9pZFxuXHR7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIG1ldGhvZCB0aGF0IHN0YXRlIG1hY2hpbmUgY2FsbGluZyBvbmNlIHRoaXMgc3RhdGUgaGFzIGJlZW4gc2V0IGFzIHRoZVxuXHQgKiBjdXJyZW50IHN0YXRlIGFuZCBjYWxsYmFja3MgQmVmb3JlRW50ZXIgYW5kIEFmdGVyRW50ZXIgZmluaXNoZWQuXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0RXhlY3V0ZSgpOiB2b2lkXG5cdHtcblx0XHR0aGlzLl9jb250ZXh0LlN0YXRlTWFjaGluZS5Nb3ZlTmV4dCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBtZXRob2QgdGhhdCBzdGF0ZSBtYWNoaW5lIGNhbGxpbmcgcmlnaHQgYmVmb3JlIGNoYW5naW5nXG5cdCAqIHRoZSBjdXJyZW50IHN0YXRlXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0QmVmb3JlRXhpdCgpOiB2b2lkXG5cdHtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgbWV0aG9kIHRoYXQgc3RhdGUgbWFjaGluZSBjYWxsaW5nIHJpZ2h0IGFmdGVyIGNoYW5naW5nIHRoZSBjdXJyZW50IHN0YXRlXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0QWZ0ZXJFeGl0KCk6IHZvaWRcblx0e1xuXHR9XG5cblx0LyoqXG5cdCAqIEFkZCB0cmFuc2l0aW9uIHRvIHRoZSBsaXN0IG9mIHRyYW5zaXRpb25zXG5cdCAqIEBwYXJhbSBwVHJhbnNpdGlvbiAtIEEgdHJhbnNpdGlvbiBvYmplY3QgdG8gc2F2ZSBpbiB0aGUgbGlzdCBvZiBzdGF0ZSB0cmFuc2l0aW9uc1xuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdEFkZFRyYW5zaXRpb24ocFRyYW5zaXRpb246IElCYXNlVHJhbnNpdGlvbjxUQ29udGV4dD4pOiB2b2lkXG5cdHtcblx0XHR0aGlzLl90cmFuc2l0aW9ucy5wdXNoKHBUcmFuc2l0aW9uKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmUgYSB0cmFuc2l0aW9uIG9iamVjdCBmcm9tIHRoZSBsaXN0IG9mIHN0YXRlIHRyYW5zaXRpb25zXG5cdCAqIEBwYXJhbSBwVHJhbnNpdGlvbiAtIEEgdHJhbnNpdGlvbiBvYmplY3QgdG8gcmVtb3ZlIGZyb20gdGhlIGxpc3Qgb2Ygc3RhdGUgdHJhbnNpdGlvbnNcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRSZW1vdmVUcmFuc2l0aW9uKHBUcmFuc2l0aW9uOiBJQmFzZVRyYW5zaXRpb248VENvbnRleHQ+KTogdm9pZFxuXHR7XG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLl90cmFuc2l0aW9ucy5pbmRleE9mKHBUcmFuc2l0aW9uLCAwKTtcblx0XHRpZiAoaW5kZXggPiAtMSlcblx0XHR7XG5cdFx0XHR0aGlzLl90cmFuc2l0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH1cblx0fVxufSIsImltcG9ydCB7SUJhc2VTdGF0ZU1hY2hpbmV9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lCYXNlU3RhdGVNYWNoaW5lXCI7XG5pbXBvcnQge0lCYXNlU3RhdGV9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lCYXNlU3RhdGVcIjtcbmltcG9ydCB7Q29uZGl0aW9uQ2FsbEJhY2t9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0NvbmRpdGlvbkNhbGxCYWNrXCI7XG5pbXBvcnQge1RyYW5zaXRpb25CZWhhdmlvckVudW19IGZyb20gXCIuLi9FbnVtL1RyYW5zaXRpb25CZWhhdmlvdXJFbnVtXCI7XG5pbXBvcnQge0lCYXNlVHJhbnNpdGlvbn0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUJhc2VUcmFuc2l0aW9uXCI7XG5pbXBvcnQge1dyb25nTWFjaGluZVN0YXRlRXhjZXB0aW9ufSBmcm9tIFwiLi4vRXhjZXB0aW9ucy9Xcm9uZ01hY2hpbmVTdGF0ZUV4Y2VwdGlvblwiO1xuaW1wb3J0IHtJbnZhbGlkVHJhbnNpdGlvbkV4Y2VwdGlvbn0gZnJvbSBcIi4uL0V4Y2VwdGlvbnMvSW52YWxpZFRyYW5zaXRpb25FeGNlcHRpb25cIjtcbmltcG9ydCB7TnVsbEluaXRpYWxTdGF0ZUV4Y2VwdGlvbn0gZnJvbSBcIi4uL0V4Y2VwdGlvbnMvTnVsbEluaXRpYWxTdGF0ZUV4Y2VwdGlvblwiO1xuaW1wb3J0IHtOdWxsU3RhdGVFeGNlcHRpb259IGZyb20gXCIuLi9FeGNlcHRpb25zL051bGxTdGF0ZUV4Y2VwdGlvblwiO1xuaW1wb3J0IHtXcm9uZ1N0YXRlSW5kZXhFeGNlcHRpb259IGZyb20gXCIuLi9FeGNlcHRpb25zL1dyb25nU3RhdGVJbmRleEV4Y2VwdGlvblwiO1xuaW1wb3J0IHtBbWJpZ3VvdXNJbml0aWFsU3RhdGVFeGNlcHRpb259IGZyb20gXCIuLi9FeGNlcHRpb25zL0FtYmlndW91c0luaXRpYWxTdGF0ZUV4Y2VwdGlvblwiO1xuaW1wb3J0IHtTdGF0ZU5vdEZvdW5kRXhjZXB0aW9ufSBmcm9tIFwiLi4vRXhjZXB0aW9ucy9TdGF0ZU5vdEZvdW5kRXhjZXB0aW9uXCI7XG5pbXBvcnQge1N0YXRlTWFjaGluZUJlaGF2aW9yRW51bX0gZnJvbSBcIi4uL0VudW0vU3RhdGVNYWNoaW5lQmVoYXZpb3JFbnVtXCI7XG5pbXBvcnQge0Fic3RyYWN0U3RhdGVNYWNoaW5lQ29udGV4dH0gZnJvbSBcIi4vQWJzdHJhY3RTdGF0ZU1hY2hpbmVDb250ZXh0XCI7XG5pbXBvcnQge1N0YXRlVHJhbnNpdGlvbn0gZnJvbSBcIi4uL0Jhc2UvU3RhdGVUcmFuc2l0aW9uXCI7XG5pbXBvcnQge0lTdGF0ZU1hY2hpbmVXaXRoQmVoYXZpb3VyT3B0aW9uc30gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVN0YXRlTWFjaGluZVdpdGhCZWhhdmlvdXJPcHRpb25zXCI7XG5pbXBvcnQge0Fic3RyYWN0RXZlbnREaXNwYXRjaGVyfSBmcm9tIFwiLi9BYnN0cmFjdEV2ZW50RGlzcGF0Y2hlclwiO1xuXG4vKipcbiAqIEFic3RyYWN0IGNsYXNzIHRoYXQgZGVmaW5lIHRoZSBiYXNpYyBiZWhhdmlvciBvZiBzdGF0ZSBtYWNoaW5lLlxuICogQFR5cGVQYXJhbWV0ZXIgVENvbnRleHQgLSBhIHN0YXRlIG1hY2hpbmUgY29udGV4dCBjbGFzcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEFic3RyYWN0QmFzZVN0YXRlTWFjaGluZTxUQ29udGV4dCBleHRlbmRzIEFic3RyYWN0U3RhdGVNYWNoaW5lQ29udGV4dDx1bmtub3duLCB1bmtub3duPiwgVEV2ZW50PiBleHRlbmRzIEFic3RyYWN0RXZlbnREaXNwYXRjaGVyPFRFdmVudD4gaW1wbGVtZW50cyBJQmFzZVN0YXRlTWFjaGluZTxUQ29udGV4dCwgVEV2ZW50PiwgSVN0YXRlTWFjaGluZVdpdGhCZWhhdmlvdXJPcHRpb25zXG57XG5cdC8qKlxuXHQgKiBUaGUgbGlzdCBmbyBvcHRpb25zIGZvciBjdXJyZW50IHN0YXRlIG1hY2hpbmUuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdHByb3RlY3RlZCByZWFkb25seSBfb3B0aW9uczogQXJyYXk8U3RhdGVNYWNoaW5lQmVoYXZpb3JFbnVtPiA9IG5ldyBBcnJheTxTdGF0ZU1hY2hpbmVCZWhhdmlvckVudW0+KCk7XG5cdC8qKlxuXHQgKiBBIGNvbGxlY3Rpb24gb2YgYWxsIHBvc3NpYmxlIHN0YXRlcyBmb3Igc3RhdGUgbWFjaGluZS5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0cHJvdGVjdGVkIHJlYWRvbmx5IF9zdGF0ZXM6IEFycmF5PElCYXNlU3RhdGU8VENvbnRleHQ+PiA9IG5ldyBBcnJheTxJQmFzZVN0YXRlPFRDb250ZXh0Pj4oKTtcblx0LyoqXG5cdCAqIEEgbGlzdCBvZiB0cmFuc2l0aW9ucyBmb3IgdGhpcyBzdGF0ZSBtYWNoaW5lLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgX3RyYW5zaXRpb25zOiBBcnJheTxJQmFzZVRyYW5zaXRpb248VENvbnRleHQ+PiA9IG5ldyBBcnJheTxJQmFzZVRyYW5zaXRpb248VENvbnRleHQ+PigpO1xuXHQvKipcblx0ICogSW5pdGlhbCBzdGF0ZSBvZiB0aGUgc3RhdGUgbWFjaGluZS5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0cHJvdGVjdGVkIF9pbml0aWFsU3RhdGU6IElCYXNlU3RhdGU8VENvbnRleHQ+IHwgbnVsbCA9IG51bGw7XG5cdC8qKlxuXHQgKiBUaGUgY3VycmVudCBzdGF0ZSBmb3Igc3RhdGUgbWFjaGluZS5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0cHJvdGVjdGVkIF9jdXJyZW50U3RhdGU6IElCYXNlU3RhdGU8VENvbnRleHQ+IHwgbnVsbCA9IG51bGw7XG5cdC8qKlxuXHQgKiBUaGUgYmFja2dyb3VuZCBmaWVsZCBmb3IgQ29udGV4dCBwcm9wZXJ0eS5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0cHJvdGVjdGVkIF9jb250ZXh0OiBUQ29udGV4dCB8IG51bGw7XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemUgdGhlIG5ldyBpbnN0YW5jZSBvZiB0aGUgQWJzdHJhY3RCYXNlU3RhdGVNYWNoaW5lXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihwQ29udGV4dDogVENvbnRleHQgfCBudWxsID0gbnVsbCwgcEluaXRpYWxTdGF0ZTogSUJhc2VTdGF0ZTxUQ29udGV4dD4gfCBudWxsID0gbnVsbClcblx0e1xuXHRcdHN1cGVyKClcblx0XHR0aGlzLl9jb250ZXh0ID0gcENvbnRleHQ7XG5cdFx0aWYgKHBJbml0aWFsU3RhdGUgIT0gbnVsbClcblx0XHR7XG5cdFx0XHR0aGlzLkFkZFN0YXRlKHBJbml0aWFsU3RhdGUsIHRydWUpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBBIHN0YXRlIG1hY2hpbmUgY29udGV4dCBnZXR0ZXIuXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0Z2V0IENvbnRleHQoKTogVENvbnRleHQgfCBudWxsXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5fY29udGV4dDtcblx0fVxuXG5cdC8qKlxuXHQgKiBBIHN0YXRlIG1hY2hpbmUgY29udGV4dCBzZXR0ZXIuXG5cdCAqIEBwYXJhbSBwQ29udGV4dCAtIEEgc3RhdGUgbWFjaGluZSBjb250ZXh0IG9iamVjdC5cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRzZXQgQ29udGV4dChwQ29udGV4dDogVENvbnRleHQgfCBudWxsKVxuXHR7XG5cdFx0dGhpcy5fY29udGV4dCA9IHBDb250ZXh0O1xuXHR9XG5cblx0Z2V0IEN1cnJlbnRTdGF0ZSgpOiBJQmFzZVN0YXRlPFRDb250ZXh0PiB8IG51bGxcblx0e1xuXHRcdHJldHVybiB0aGlzLl9jdXJyZW50U3RhdGU7XG5cdH1cblxuXHQvKipcblx0ICogQWRkIHN0YXRlIHRvIHRoZSBzdGF0ZSBtYWNoaW5lIGNvbGxlY3Rpb25cblx0ICogQHBhcmFtIHBTdGF0ZSAtIEFuIElCYXNlU3RhdGUgb2JqZWN0IHRvIGFkZCBpbnRvIHRoZSBsaXN0IG9mIHN0YXRlc1xuXHQgKiBAcGFyYW0gcFNldEFzSW5pdGlhbCAtIFNldCBhIG5ld2x5IGFkZGVkIHN0YXRlIGFzIGEgaW5pdGlhbCBvbmUuXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0QWRkU3RhdGUocFN0YXRlOiBJQmFzZVN0YXRlPFRDb250ZXh0PiwgcFNldEFzSW5pdGlhbCA9IGZhbHNlKTogbnVtYmVyXG5cdHtcblx0XHR0aGlzLl9zdGF0ZXMucHVzaChwU3RhdGUpO1xuXHRcdGlmIChwU2V0QXNJbml0aWFsKVxuXHRcdHtcblx0XHRcdC8vIFNldCB0aGUgcGFzc2VkIHN0YXRlIGFzIGluaXRpYWwgb25lXG5cdFx0XHR0aGlzLlNldEluaXRpYWxTdGF0ZShwU3RhdGUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fc3RhdGVzLmxlbmd0aCAtIDE7IC8vIFJldHVybiB0aGUgbGFzdCBpbmRleCBvZiB0aGUgc3RhdGUgKGN1cnJlbnRseSBhZGRlZCBzdGF0ZSlcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgdHJhbnNpdGlvbiBiZXR3ZWVuIHN0YXRlcyBpbiB0aGUgc3RhdGUgbWFjaGluZS5cblx0ICogQHBhcmFtIHBGcm9tU3RhdGUgLSBBIHN0YXRlIGZyb20gd2hpY2ggdGhpcyB0cmFuc2l0aW9uIHdpbGwgc3RhcnQuXG5cdCAqIEBwYXJhbSBwVG9TdGF0ZSAtIEEgdGFyZ2V0IHN0YXRlIHRoYXQgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBzdGF0ZSBtYWNoaW5lLlxuXHQgKiBAcGFyYW0gcENvbmRpdGlvbiAtIEEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCBpbiBvcmRlciB0byBhbmFseXNlIHRoZSBwb3NzaWJpbGl0eSB0byBtb3ZlIHRocm91Z2ggdGhlIHRyYW5zaXRpb24uXG5cdCAqIEBwYXJhbSBwT3JkZXIgLSBUaGUgZXZhbHVhdGlvbiBvcmRlciB0aGF0IGRlZmluZXMgd2hhdCB0cmFuc2l0aW9uIHdpbGwgYmUgYW5hbHl6ZWQgZmlyc3QuXG5cdCAqIEBwYXJhbSBwQmVoYXZpb3JFbnVtQWZ0ZXJUcmFuc2l0aW9uIC0gRGVmaW5lcyBzdGF0ZSBtYWNoaW5lIGJlaGF2aW9yIGFmdGVyIHRoZSBjb21wbGV0aW9uIHRoZSB0cmFuc2l0aW9uLlxuXHQgKiBJbiBjYXNlIGlmIHRydWUgLSBzdGF0ZSBtYWNoaW5lIHdpbGwgbm90IGNhbGwgRXhlY3V0ZSBjYWxsYmFjayBhZnRlciB0aGUgdHJhbnNpdGlvbi5cblx0ICogQHJlbWFya3MgSW4gc3BpdGUgb2YgdGhlIHZhbHVlIG9mIHRoZSBwQmVoYXZpb3JFbnVtQWZ0ZXJUcmFuc2l0aW9uIGFsbCB0cmFuc2l0aW9uIGNhbGxiYWNrcyBzdWNoIGFzIEJlZm9yZUVudGVyLCBCZWZvcmVFeGl0LCBldGMgd2lsbCBiZSBjYWxsZWQuXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0QWRkVHJhbnNpdGlvbihwRnJvbVN0YXRlOiBJQmFzZVN0YXRlPFRDb250ZXh0Pixcblx0XHRcdFx0ICBwVG9TdGF0ZTogSUJhc2VTdGF0ZTxUQ29udGV4dD4sXG5cdFx0XHRcdCAgcENvbmRpdGlvbj86IENvbmRpdGlvbkNhbGxCYWNrPFRDb250ZXh0Pixcblx0XHRcdFx0ICBwT3JkZXI6IG51bWJlciA9IDAsXG5cdFx0XHRcdCAgcEJlaGF2aW9yRW51bUFmdGVyVHJhbnNpdGlvbjogVHJhbnNpdGlvbkJlaGF2aW9yRW51bSA9IFRyYW5zaXRpb25CZWhhdmlvckVudW0uQ09OVElOVUVfQUZURVJfVFJBTlNJVElPTik6IElCYXNlVHJhbnNpdGlvbjxUQ29udGV4dD5cblx0e1xuXHRcdGNvbnN0IHRyYW5zaXRpb24gPSBuZXcgU3RhdGVUcmFuc2l0aW9uPFRDb250ZXh0Pihcblx0XHRcdHBGcm9tU3RhdGUsXG5cdFx0XHRwVG9TdGF0ZSxcblx0XHRcdHBDb25kaXRpb24sXG5cdFx0XHRwT3JkZXIsXG5cdFx0XHRwQmVoYXZpb3JFbnVtQWZ0ZXJUcmFuc2l0aW9uKTtcblxuXHRcdHRoaXMuX3RyYW5zaXRpb25zLnB1c2godHJhbnNpdGlvbik7XG5cdFx0cmV0dXJuIHRyYW5zaXRpb247XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2sgdGhlIGN1cnJlbnQgc3RhdGUgaW4gc3RhdGUgbWFjaGluZSBhbmQgcmV0dXJuIHRydWUgaW4gY2FzZSBpZiB0aGlzIHN0YXRlIGlzIGluaXRpYWwgb25lLlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdEluSW5pdGlhbFN0YXRlKCk6IGJvb2xlYW5cblx0e1xuXHRcdHJldHVybiB0aGlzLl9jdXJyZW50U3RhdGUgPT0gdGhpcy5faW5pdGlhbFN0YXRlO1xuXHR9XG5cblx0SXNTdGF0ZShzdGF0ZTogSUJhc2VTdGF0ZTxUQ29udGV4dD4pOiBib29sZWFuXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5fY3VycmVudFN0YXRlID09PSBzdGF0ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBZGQgc3RhdGUgdG8gdGhlIHN0YXRlIG1hY2hpbmUgY29sbGVjdGlvbi5cblx0ICogQGV4Y2VwdGlvbiBXcm9uZ01hY2hpbmVTdGF0ZUV4Y2VwdGlvbiAtIE9jY3VycyB3aGVuIGN1cnJlbnQgc3RhdGUgaXMgbnVsbC5cblx0ICogQGV4Y2VwdGlvbiBJbnZhbGlkVHJhbnNpdGlvbkV4Y2VwdGlvbiAtIE9jY3VycyB3aGVuIHRyYW5zaXRpb24gY2hlY2tzIGlzIGZhaWxlZC5cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRNb3ZlTmV4dCgpOiB2b2lkXG5cdHtcblx0XHRpZiAodGhpcy5fY3VycmVudFN0YXRlID09IG51bGwpXG5cdFx0e1xuXHRcdFx0dGhyb3cgbmV3IFdyb25nTWFjaGluZVN0YXRlRXhjZXB0aW9uKFwiVGhlIGN1cnJlbnQgc3RhdGUgaW4gc3RhdGUgbWFjaGluZSBpcyBudWxsIVwiKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IHRyYW5zaXRpb24gb2YgdGhpcy5fY3VycmVudFN0YXRlLlRyYW5zaXRpb25zKVxuXHRcdHtcblx0XHRcdGlmICghdGhpcy5DYW5FeGVjdXRlVHJhbnNpdGlvbih0cmFuc2l0aW9uKSkgY29udGludWU7XG5cdFx0XHQvLyBBbGwgY2hlY2tzIGhhdmUgYmVlbiBwYXNzZWQgLSBzdGFydCB0cmFuc2l0aW9uXG5cdFx0XHR0aGlzLlBlcmZvcm1UcmFuc2l0aW9uKHRyYW5zaXRpb24pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmUgYSBzdGF0ZSBmcm9tIHRoZSBsaXN0IG9mIHN0YXRlcy5cblx0ICogQHBhcmFtIHBTdGF0ZSAtIEEgc3RhdGUgbWFjaGluZSBzdGF0ZSBvYmplY3QuXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0UmVtb3ZlU3RhdGUocFN0YXRlOiBJQmFzZVN0YXRlPFRDb250ZXh0Pik6IHZvaWRcblx0e1xuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5fc3RhdGVzLmluZGV4T2YocFN0YXRlLCAwKTtcblx0XHRpZiAoaW5kZXggPiAtMSlcblx0XHR7XG5cdFx0XHR0aGlzLl9zdGF0ZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9Ly8gdG9kbyB0aHJvdyBhbiBleGNlcHRpb24gZm9yIGZhbHNlP1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZSB0cmFuc2l0aW9uIGZyb20gdGhlIGxpc3Qgb2YgdHJhbnNpdGlvbnMgYW5kIHJlbGF0ZWQgc3RhdGVzLlxuXHQgKiBAcGFyYW0gcFRyYW5zaXRpb24gLSBBbiBvYmplY3Qgb2YgdHJhbnNpdGlvbiB0byByZW1vdmUuXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0UmVtb3ZlVHJhbnNpdGlvbihwVHJhbnNpdGlvbjogSUJhc2VUcmFuc2l0aW9uPFRDb250ZXh0Pik6IHZvaWRcblx0e1xuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5fdHJhbnNpdGlvbnMuaW5kZXhPZihwVHJhbnNpdGlvbiwgMCk7XG5cdFx0aWYgKGluZGV4ID4gLTEpXG5cdFx0e1xuXHRcdFx0dGhpcy5fdHJhbnNpdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9Ly8gdG9kbyB0aHJvdyBhbiBleGNlcHRpb24gZm9yIGZhbHNlP1xuXHRcdHBUcmFuc2l0aW9uLlJlbW92ZUZyb21TdGF0ZXMoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXNldCB0aGUgcHJvY2Vzc2luZyBzdGF0ZSBvZiB0aGUgc3RhdGUgbWFjaGluZSB0byBpbml0aWFsIG9uZVxuXHQgKiBhbmQgb3B0aW9uYWxseSByZXNldCB0aGUgY29udGV4dCBvZiB0aGUgc3RhdGUgbWFjaGluZS5cblx0ICogQHBhcmFtIHBSZXNldFRoZUNvbnRleHQgLSBTaG91bGQgdGhlIG1ldGhvZCByZXNldCB0aGUgY29udGV4dCBvZiB0aGUgc3RhdGUgbWFjaGluZSBvciBub3QuXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0UmVzZXQocFJlc2V0VGhlQ29udGV4dDogYm9vbGVhbik6IHZvaWRcblx0e1xuXHRcdGlmIChwUmVzZXRUaGVDb250ZXh0KVxuXHRcdHtcblx0XHRcdHRoaXMuX2NvbnRleHQ/LlJlc2V0KCk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLl9pbml0aWFsU3RhdGUgIT0gbnVsbClcblx0XHR7XG5cdFx0XHR0aGlzLkV4ZWN1dGVTdGF0ZUNoYW5nZUxpZmVjeWNsZSh0aGlzLl9pbml0aWFsU3RhdGUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgTnVsbEluaXRpYWxTdGF0ZUV4Y2VwdGlvbihcIlRoZSBpbml0aWFsIHN0YXRlIG9mIHN0YXRlIG1hY2hpbmUgaXMgbnVsbCwgcGxlYXNlIGNhbGwgdGhlIFNldEluaXRpYWxTdGF0ZSBiZWZvcmUgdGVoIGNhbGwgUnVuIG1ldGhvZFwiKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydCB0aGUgc3RhdGUgbWFjaGluZSBwcm9jZXNzaW5nIGNoYWluLlxuXHQgKiBAZXhjZXB0aW9uIE51bGxTdGF0ZUV4Y2VwdGlvbiAtIE9jY3VyIHdoZW4gdGhlIGluaXRpYWwgc3RhdGUgb2Ygc3RhdGUgbWFjaGluZSBpcyBudWxsLlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdFJ1bigpOiB2b2lkXG5cdHtcblx0XHRpZiAodGhpcy5fY3VycmVudFN0YXRlID09IG51bGwpXG5cdFx0e1xuXHRcdFx0dGhyb3cgbmV3IE51bGxTdGF0ZUV4Y2VwdGlvbihcIlRoZSBjdXJyZW50IHN0YXRlIG9mIHN0YXRlIG1hY2hpbmUgaXMgbnVsbCwgcGxlYXNlIHNldCB0aGUgc3RhdGUgYmVmb3JlIHRoZSBjYWxsIFJ1biBtZXRob2RcIik7XG5cdFx0fVxuXHRcdHRoaXMuX2N1cnJlbnRTdGF0ZS5FeGVjdXRlKCk7XG5cdH1cblxuXHQvKipcblx0ICogU2V0IHRoZSBpbml0aWFsIHN0YXRlIGJ5IGluZGV4IG9mIHRoZSBzdGF0ZSBpbiB0aGUgbGlzdCBvZiBzdGF0ZXMuXG5cdCAqIEBwYXJhbSBwU3RhdGVJbmRleCAtIEEgc3RhdGUgaW5kZXggaW4gdGhlIGxpc3Qgb2Ygc3RhdGVzLlxuXHQgKiBAcmVtYXJrcyBEdXJpbmcgdGhlIHByb2Nlc3Mgb2YgdGhlIHNldHRpbmcgc3RhdGUgdXAgdGhpcyBtZXRob2Qgd2lsbCBjYWxsIHRoZVxuXHQgKiBCZWZvcmVFbnRlciBhbmQgQWZ0ZXJFbnRlciBjYWxsYmFja3MuXG5cdCAqIEBleGNlcHRpb24gV3JvbmdTdGF0ZUluZGV4RXhjZXB0aW9uIC0gT2NjdXJzIHdoZW4gdGhlIGluZGV4IHBhc3NlZCBhcyBhbiBhcmd1bWVudCBpcyBub3QgcHJlc2VudGVkIGluIHRoZSBsaXN0IG9mIHN0YXRlcy5cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRTZXRJbml0aWFsU3RhdGVCeUluZGV4KHBTdGF0ZUluZGV4OiBudW1iZXIpOiB2b2lkXG5cdHtcblx0XHRpZiAocFN0YXRlSW5kZXggPCAwIHx8IHBTdGF0ZUluZGV4ID49IHRoaXMuX3N0YXRlcy5sZW5ndGgpXG5cdFx0e1xuXHRcdFx0dGhyb3cgbmV3IFdyb25nU3RhdGVJbmRleEV4Y2VwdGlvbihcIlRoZSBpbmRleCBwYXNzZWQgYXMgYW4gYXJndW1lbnQgaXMgbm90IHByZXNlbnRlZCBpbiB0aGUgbGlzdCBvZiBzdGF0ZXMuXCIpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN0YXRlID0gKHRoaXMuX3N0YXRlcylbcFN0YXRlSW5kZXhdO1xuXHRcdHRoaXMuX2luaXRpYWxTdGF0ZSA9IHN0YXRlO1xuXHRcdC8vdG9kbyBwb3NzaWJsZSBjb3VsZCBtYWtlIGEgcHJvYmxlbSB3aXRoIG51bGwgcHJldmlvdXMgc3RhdGVcblx0XHR0aGlzLkV4ZWN1dGVTdGF0ZUNoYW5nZUxpZmVjeWNsZShzdGF0ZSlcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIGluaXRpYWwgc3RhdGUgYnkgaW5zdGFuY2Ugb2YgdGhlIHN0YXRlLlxuXHQgKiBAcGFyYW0gcFN0YXRlIC0gQW4gaW5zdGFuY2Ugb2Ygc3RhdGUuXG5cdCAqIEBwYXJhbSBwUmVzZXRDb250ZXh0RGF0YSAtIElzIGl0IG5lY2Vzc2FyeSB0byByZXNldCBhIHN0YXRlIG1hY2hpbmUgY29udGV4dCBkYXRhIG9yIG5vdC5cblx0ICogQGV4Y2VwdGlvbiBXcm9uZ01hY2hpbmVTdGF0ZUV4Y2VwdGlvbiAtIE9jY3VycyB3aGVuIHRoZSBpbml0aWFsIHN0YXRlIGlzIG5vdCBwcmVzZW50ZWQgaW4gdGhlIGxpc3Qgb2Ygc3RhdGVzLlxuXHQgKiBAZXhjZXB0aW9uIEFtYmlndW91c0luaXRpYWxTdGF0ZUV4Y2VwdGlvbiAtIE9jY3VycyB3aGVuIHNvbWVvbmUgaXMgdHJ5aW5nIHRvIHNldCB1cCB0aGUgaW5pdGlhbCBzdGF0ZSB2aWEgY2FsbGluZ1xuXHQgKiBBZGRTdGF0ZSBvbiB0aGUgc3RhdGUgbWFjaGluZSB3aGVuIHRoZSBpbml0aWFsIHN0YXRlIGFscmVhZHkgc2V0IHVwIHByZXZpb3VzbHkuXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0U2V0SW5pdGlhbFN0YXRlKHBTdGF0ZTogSUJhc2VTdGF0ZTxUQ29udGV4dD4sIHBSZXNldENvbnRleHREYXRhID0gZmFsc2UpOiB2b2lkXG5cdHtcblx0XHRpZiAodGhpcy5faW5pdGlhbFN0YXRlICE9IG51bGwpXG5cdFx0e1xuXHRcdFx0dGhyb3cgbmV3IEFtYmlndW91c0luaXRpYWxTdGF0ZUV4Y2VwdGlvbihcIlRyeWluZyB0byBzZXR1cCB0aGUgaW5pdGlhbCBzdGF0ZSB2aWEgY2FsbGluZyBBZGRTdGF0ZSBvbiBcIiArXG5cdFx0XHRcdFwidGhlIHN0YXRlIG1hY2hpbmUgd2hlbiB0aGUgaW5pdGlhbCBzdGF0ZSBhbHJlYWR5IHNldCB1cCBwcmV2aW91c2x5LlwiKTtcblx0XHR9XG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLl9zdGF0ZXMuaW5kZXhPZihwU3RhdGUsIDApO1xuXHRcdGlmIChpbmRleCA9PSAtMSlcblx0XHR7XG5cdFx0XHR0aHJvdyBuZXcgU3RhdGVOb3RGb3VuZEV4Y2VwdGlvbihcIlRoZSBpbml0aWFsIHN0YXRlIGlzIG5vdCBwcmVzZW50ZWQgaW4gdGhlIGxpc3Qgb2Ygc3RhdGVzLlwiKTtcblx0XHR9XG5cdFx0dGhpcy5faW5pdGlhbFN0YXRlID0gdGhpcy5fc3RhdGVzW2luZGV4XTtcblx0XHR0aGlzLlJlc2V0KHBSZXNldENvbnRleHREYXRhKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja2luZyB3aGF0ZXZlciBzdGF0ZSBpcyBlbmFibGVkIGluIHRoZSBzdGF0ZSBtYWNoaW5lLlxuXHQgKiBAcGFyYW0gcE1hY2hpbmVCZWhhdmlvdXJPcHRpb24gLSBBIHN0YXRlIG1hY2hpbmUgYmVoYXZpb3VyIG9wdGlvbi5cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRwdWJsaWMgSXNCZWhhdmlvdXJPcHRpb25TZXQocE1hY2hpbmVCZWhhdmlvdXJPcHRpb246IFN0YXRlTWFjaGluZUJlaGF2aW9yRW51bSk6IGJvb2xlYW5cblx0e1xuXHRcdGxldCBpbmRleCA9IC0xO1xuXG5cdFx0dGhpcy5fb3B0aW9ucy5mb3JFYWNoKChwT3ByaW9uLCBwSW5kZXgpID0+XG5cdFx0e1xuXHRcdFx0aWYgKHBPcHJpb24udG9GaXhlZCgpID09IHBNYWNoaW5lQmVoYXZpb3VyT3B0aW9uLnRvRml4ZWQoKSlcblx0XHRcdFx0aW5kZXggPSBwSW5kZXhcblx0XHR9KTtcblx0XHRyZXR1cm4gaW5kZXggPiAtMTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIGJlaGF2aW91ciBvcHRpb24gdG8gdGhlIHN0YXRlIG1hY2hpbmUuXG5cdCAqIEBwYXJhbSBwTWFjaGluZUJlaGF2aW91ck9wdGlvbiAtIEEgc3RhdGUgbWFjaGluZSBiZWhhdmlvdXIgb3B0aW9uLlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdFNldEJlaGF2aW91ck9wdGlvbihwTWFjaGluZUJlaGF2aW91ck9wdGlvbjogU3RhdGVNYWNoaW5lQmVoYXZpb3JFbnVtKTogdm9pZFxuXHR7XG5cdFx0aWYgKCF0aGlzLklzQmVoYXZpb3VyT3B0aW9uU2V0KHBNYWNoaW5lQmVoYXZpb3VyT3B0aW9uKSlcblx0XHR7XG5cdFx0XHR0aGlzLl9vcHRpb25zLnB1c2gocE1hY2hpbmVCZWhhdmlvdXJPcHRpb24pXG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFVuc2V0IHRoZSBzcGVjaWZpYyBvcHRpb24gZnJvbSB0aGUgc3RhdGUgbWFjaGluZSBiZWhhdmlvdXIuXG5cdCAqIEBwYXJhbSBwTWFjaGluZUJlaGF2aW91ck9wdGlvbiAtIEEgc3RhdGUgbWFjaGluZSBiZWhhdmlvdXIgb3B0aW9uLlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdFVuc2V0QmVoYXZpb3VyT3B0aW9uKHBNYWNoaW5lQmVoYXZpb3VyT3B0aW9uOiBTdGF0ZU1hY2hpbmVCZWhhdmlvckVudW0pOiB2b2lkXG5cdHtcblx0XHRpZiAoIXRoaXMuSXNCZWhhdmlvdXJPcHRpb25TZXQocE1hY2hpbmVCZWhhdmlvdXJPcHRpb24pKVxuXHRcdHtcblx0XHRcdGNvbnN0IGluZGV4ID0gdGhpcy5fb3B0aW9ucy5pbmRleE9mKHBNYWNoaW5lQmVoYXZpb3VyT3B0aW9uLCAwKTtcblx0XHRcdGlmIChpbmRleCA+IC0xKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLl9vcHRpb25zLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHR9Ly8gdG9kbyB0aHJvdyBhbiBleGNlcHRpb24gZm9yIGZhbHNlP1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBHZXRDdXJyZW50U3RhdGUoKTogSUJhc2VTdGF0ZTxUQ29udGV4dD5cblx0e1xuXHRcdHJldHVybiB0aGlzLl9jdXJyZW50U3RhdGU7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tpbmcgdGhlIGdpdmVuIHRyYW5zaXRpb24gYW5kIHJldHVybiB0aGUgcG9zc2liaWxpdHkgdG8gbW92ZSB0aHJvdWdoIG9uZS5cblx0ICogQHBhcmFtIHBUcmFuc2l0aW9uIC0gQW4gdHJhbnNpdGlvbiB0byBleGFtaW5lLlxuXHQgKiBAcGFyYW0gcFN0cmljdENoZWNrIC0gRGVmaW5lIHRoZSBiZWhhdmlvdXIgb2YgY2hlY2tpbmcsIGluIGNhc2UgaWYgdHJ1ZSB0aHJvdyBhbiBXcm9uZ01hY2hpbmVTdGF0ZUV4Y2VwdGlvbiBpbiBjYXNlIGlmIGN1cnJlbnQgc3RhdGVcblx0ICogb2YgdGhlIHN0YXRlIG1hY2hpbmUgaXMgbm90IHRoZSBvbmUgd2UgaGF2ZSBpbiB0aGUgaW5pdGlhbCBzdGF0ZSBmb3IgdHJhbnNpdGlvbi5cblx0ICogQGV4Y2VwdGlvbiBXcm9uZ01hY2hpbmVTdGF0ZUV4Y2VwdGlvbiAtIE9jY3VycyBpZiB0aGUgcFN0cmljdENoZWNrIGhhdmUgYmVlbiBwYXNzZWQgYXMgdHJ1ZSBhbmQgY3VycmVudCBzdGF0ZVxuXHQgKiAgICAgICAgICAgIGlzIG5vdCB0aGUgaW5pdGlhbCBvbmUgZnJvbSB0aGUgdHJhbnNpdGlvbi5cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdHByb3RlY3RlZCBDYW5FeGVjdXRlVHJhbnNpdGlvbihwVHJhbnNpdGlvbjogSUJhc2VUcmFuc2l0aW9uPFRDb250ZXh0PiwgcFN0cmljdENoZWNrID0gZmFsc2UpOiBib29sZWFuXG5cdHtcblx0XHQvLyBDaGVjayB0aGUgYWN0aXZpdHkgb2Ygc3RhdGVcblx0XHRpZiAoIXBUcmFuc2l0aW9uLklzQWN0aXZlKVxuXHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBTa2lwIHRoZSB0cmFuc2l0aW9uIGluIGNhc2UgaWYgaXQgaXMgbm90IEFjdGl2ZVxuXG5cdFx0Ly8gQ2hlY2sgdGhlIGluaXRpYWwgc3RhdGUgb2YgdHJhbnNpdGlvbiB0byBwcmV2ZW50IHVuZGVmaW5lZCB0cmFuc2l0aW9uc1xuXHRcdGlmIChwVHJhbnNpdGlvbi5Gcm9tU3RhdGUgIT0gdGhpcy5fY3VycmVudFN0YXRlKVxuXHRcdHtcblx0XHRcdGlmICghcFN0cmljdENoZWNrKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR0aHJvdyBuZXcgSW52YWxpZFRyYW5zaXRpb25FeGNlcHRpb24oXCJDdXJyZW50IHN0YXRlIGlzIG5vdCB0aGUgaW5pdGlhbCBzdGF0ZSBvZiBleGVjdXRlZCB0cmFuc2FjdGlvbi5cIiArXG5cdFx0XHRcdFwiIEN1cnJlbnQgc3RhdGU6IHtfY3VycmVudFN0YXRlPy5HZXRUeXBlKCkuTmFtZX0sIGluaXRpYWwgc3RhdGUgb2YgdHJhbnNpdGlvbjogXCIgK1xuXHRcdFx0XHR0eXBlb2YgKHBUcmFuc2l0aW9uLkZyb21TdGF0ZSkpO1xuXHRcdH1cblxuXHRcdC8vIENoZWNrIHRoZSBjb25kaXRpb25zIGFuZCBTa2lwIHRoZSB0cmFuc2l0aW9uIGluIGNhc2UgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgYWxsb3cgdXMgdG8gcGFzIHRocnVcblx0XHRyZXR1cm4gcFRyYW5zaXRpb24uQ2FuRXhlY3V0ZSh0aGlzLl9jb250ZXh0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBFeGVjdXRlIGEgdHJhbnNpdGlvbiBwcm9jZWR1cmUgYW5kIGRlZmluZSB0aGUgc2VxdWVuY2Ugb2YgdHJhbnNpdGlvbiBjYWxsYmFja3MuXG5cdCAqIEBwYXJhbSBwVHJhbnNpdGlvbiAtIEEgdHJhbnNpdGlvbiBvYmplY3QgdGhhdCBzdGF0ZSBtYWNoaW5lIHdpbGwgdXNlIGZvciBwZXJmb3JtaW5nIHRyYW5zaXRpb24uXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRwcm90ZWN0ZWQgUGVyZm9ybVRyYW5zaXRpb24ocFRyYW5zaXRpb246IElCYXNlVHJhbnNpdGlvbjxUQ29udGV4dD4pOiB2b2lkXG5cdHtcblx0XHR0aGlzLkV4ZWN1dGVTdGF0ZUNoYW5nZUxpZmVjeWNsZShwVHJhbnNpdGlvbi5Ub1N0YXRlKTtcblx0XHRpZiAodGhpcy5Jc0JlaGF2aW91ck9wdGlvblNldChTdGF0ZU1hY2hpbmVCZWhhdmlvckVudW0uU1RPUF9PTl9JTklUSUFMX1NUQVRFKVxuXHRcdFx0JiYgcFRyYW5zaXRpb24uVG9TdGF0ZSA9PSB0aGlzLl9pbml0aWFsU3RhdGVcblx0XHRcdCYmIHRoaXMuX2N1cnJlbnRTdGF0ZSA9PSB0aGlzLl9pbml0aWFsU3RhdGUpXG5cdFx0e1xuXHRcdFx0Ly8gV2Ugc2hvdWxkIG5vdCBjYWxsIGV4ZWN1dGUgaWYgd2UgaGF2ZSBzZXQgdGhlIFNUT1BfT05fSU5JVElBTF9TVEFURSxcblx0XHRcdC8vIGFuZCB3ZSBhcmUgYWxyZWFkeSBpbiBpdC5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAocFRyYW5zaXRpb24uQWZ0ZXJUcmFuc2l0aW9uQmVoYXZpb3JFbnVtLnRvRml4ZWQoKSA9PSBUcmFuc2l0aW9uQmVoYXZpb3JFbnVtLlNUT1BfQUZURVJfVFJBTlNJVElPTi50b0ZpeGVkKCkpXG5cdFx0e1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX2N1cnJlbnRTdGF0ZT8uRXhlY3V0ZSgpXG5cdH1cblxuXHQvKiprXG5cdCAqIE1ha2UgdHJhbnNpdGlvbiBvZiB0aGUgc3RhdGUgZnJvbSBjdXJyZW50IG9uZSB0byBnaXZlbiBvbmUuXG5cdCAqIEBwYXJhbSBwVGFyZ2V0U3RhdGUgLSBUaGUgdGFyZ2V0IHN0YXRlIHRvIHRyYW5zaXQgdG8uXG5cdCAqIEByZW1hcmtzIC0gVGhlIGNhbGwgb2YgdGhpcyBtZXRob2QgaXMgaWRlbXBvdGVudFxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0cHJvdGVjdGVkIEV4ZWN1dGVTdGF0ZUNoYW5nZUxpZmVjeWNsZShwVGFyZ2V0U3RhdGU6IElCYXNlU3RhdGU8VENvbnRleHQ+IHwgbnVsbCk6IHZvaWRcblx0e1xuXHRcdGlmICh0aGlzLl9jdXJyZW50U3RhdGUgPT0gcFRhcmdldFN0YXRlKVxuXHRcdHtcblx0XHRcdHJldHVybjsgLy8gTGV0J3MgbWFrZSBhIGNhbGwgb2YgdGhpcyBtZXRob2QgaXMgaWRlbXBvdGVudFxuXHRcdH1cblx0XHRjb25zdCBvbGRTdGF0ZSA9IHRoaXMuX2N1cnJlbnRTdGF0ZTtcblx0XHQvL01ha2UgYmVmb3JlIGNhbGxiYWNrc1xuXHRcdHRoaXMuX2N1cnJlbnRTdGF0ZT8uQmVmb3JlRXhpdCgpO1xuXHRcdHBUYXJnZXRTdGF0ZT8uQmVmb3JlRW50ZXIoKTtcblx0XHQvLyBUcmFuc2l0aW9uIGl0c2VsZlxuXHRcdHRoaXMuX2N1cnJlbnRTdGF0ZSA9IHBUYXJnZXRTdGF0ZTtcblx0XHQvLyBtYWtlIGFmdGVyIGNhbGxiYWNrc1xuXHRcdHRoaXMuX2N1cnJlbnRTdGF0ZT8uQWZ0ZXJFbnRlcigpO1xuXHRcdG9sZFN0YXRlPy5BZnRlckV4aXQoKTtcblx0fVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJjY1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBYnN0cmFjdEV2ZW50RGlzcGF0Y2hlcjxURXZlbnRzPlxue1xuXHRhZGRFdmVudExpc3RlbmVyKHBFdmVudDogVEV2ZW50cywgcENhbGxiYWNrOiAocERhdGE6IGFueSkgPT4gdm9pZCk7XG5cblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcihwRXZlbnQ6IFRFdmVudHMsIHBDYWxsYmFjazogKHBEYXRhOiBhbnkpID0+IHZvaWQpO1xuXG5cdGRpc3BhdGNoKHBFdmVudDogVEV2ZW50cywgcERhdGE6IGFueSk7XG5cblx0cmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEV2ZW50RGlzcGF0Y2hlcjxURXZlbnRzPiBleHRlbmRzIENvbXBvbmVudCBpbXBsZW1lbnRzIElBYnN0cmFjdEV2ZW50RGlzcGF0Y2hlcjxURXZlbnRzPlxue1xuXHRwcml2YXRlIGNhbGxiYWNrczogTWFwPFRFdmVudHMsICgocERhdGE6IGFueSkgPT4gdm9pZClbXT4gPSBuZXcgTWFwPFRFdmVudHMsICgocERhdGE6IGFueSkgPT4gdm9pZClbXT4oKTtcblx0cHJpdmF0ZSBjYWxsYmFja3NGb3JEZWxldGU6IE1hcDxURXZlbnRzLCAoKHBEYXRhOiBhbnkpID0+IHZvaWQpW10+ID0gbmV3IE1hcDxURXZlbnRzLCAoKHBEYXRhOiBhbnkpID0+IHZvaWQpW10+KCk7XG5cdHByaXZhdGUgY2FsbGJhY2tzRm9yQWRkOiBNYXA8VEV2ZW50cywgKChwRGF0YTogYW55KSA9PiB2b2lkKVtdPiA9IG5ldyBNYXA8VEV2ZW50cywgKChwRGF0YTogYW55KSA9PiB2b2lkKVtdPigpO1xuXHRwcml2YXRlIEluRGlzcGF0Y2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwdWJsaWMgcmVtb3ZlQWxsTGlzdGVuZXJzKCk6IHZvaWRcblx0e1xuXHRcdHRoaXMuY2FsbGJhY2tzID0gbmV3IE1hcCgpO1xuXHRcdHRoaXMuY2FsbGJhY2tzRm9yRGVsZXRlID0gbmV3IE1hcCgpO1xuXHRcdHRoaXMuY2FsbGJhY2tzRm9yQWRkID0gbmV3IE1hcCgpO1xuXHR9XG5cblx0cHVibGljIGFkZEV2ZW50TGlzdGVuZXIocEV2ZW50OiBURXZlbnRzLCBwQ2FsbGJhY2s/OiAocERhdGE6IGFueSkgPT4gdm9pZClcblx0e1xuXHRcdGxldCBjYkFycmF5ID0gdGhpcy5jYWxsYmFja3M7XG5cdFx0aWYgKHRoaXMuSW5EaXNwYXRjaClcblx0XHR7XG5cdFx0XHRpZiAodGhpcy5jYWxsYmFja3NGb3JBZGQuc2l6ZSA+IDApXG5cdFx0XHRcdGNiQXJyYXkgPSB0aGlzLmNhbGxiYWNrc0ZvckFkZDtcblx0XHR9XG5cblx0XHRpZiAoIWNiQXJyYXkuaGFzKHBFdmVudCkpXG5cdFx0e1xuXHRcdFx0Y2JBcnJheS5zZXQocEV2ZW50LCBbcENhbGxiYWNrXSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNiQXJyYXkuZ2V0KHBFdmVudCkucHVzaChwQ2FsbGJhY2spO1xuXHR9XG5cblx0cHVibGljIHJlbW92ZUV2ZW50TGlzdGVuZXIocEV2ZW50OiBURXZlbnRzLCBwQ2FsbGJhY2s/OiAocERhdGE6IGFueSkgPT4gdm9pZClcblx0e1xuXHRcdGlmICghdGhpcy5jYWxsYmFja3MuaGFzKHBFdmVudCkpXG5cdFx0e1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmNhbGxiYWNrc0ZvckRlbGV0ZS5oYXMocEV2ZW50KSlcblx0XHR7XG5cdFx0XHRjb25zdCBldmVudENhbGxCYWNrcyA9IHRoaXMuY2FsbGJhY2tzRm9yRGVsZXRlLmdldChwRXZlbnQpO1xuXHRcdFx0ZXZlbnRDYWxsQmFja3MucHVzaChwQ2FsbGJhY2spO1xuXHRcdFx0dGhpcy5jYWxsYmFja3NGb3JEZWxldGUuc2V0KHBFdmVudCwgZXZlbnRDYWxsQmFja3MpO1xuXHRcdH0gZWxzZVxuXHRcdHtcblx0XHRcdHRoaXMuY2FsbGJhY2tzRm9yRGVsZXRlLnNldChwRXZlbnQsIFtwQ2FsbGJhY2tdKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5JbkRpc3BhdGNoKVxuXHRcdHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmRlbGV0ZUNhbGxiYWNrcygpO1xuXHR9XG5cblx0cHJpdmF0ZSBkZWxldGVDYWxsYmFja3MoKTogdm9pZFxuXHR7XG5cdFx0aWYgKHRoaXMuY2FsbGJhY2tzRm9yRGVsZXRlLnNpemUgPD0gMClcblx0XHR7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuY2FsbGJhY2tzRm9yRGVsZXRlLmZvckVhY2goKHBDYWxsYmFja1RvRGVsZXRlQXJyYXksIHBFdmVudE5hbWUpID0+XG5cdFx0e1xuXHRcdFx0Y29uc3QgY2FsbGJhY2tBcnJheSA9IHRoaXMuY2FsbGJhY2tzLmdldChwRXZlbnROYW1lKTtcblxuXHRcdFx0aWYgKGNhbGxiYWNrQXJyYXkgJiYgY2FsbGJhY2tBcnJheS5sZW5ndGggPiAwKVxuXHRcdFx0e1xuXHRcdFx0XHRjb25zdCBjYWxsYmFja3MgPSBjYWxsYmFja0FycmF5LmZpbHRlcihwQ2FsbGJhY2sgPT5cblx0XHRcdFx0XHQhcENhbGxiYWNrVG9EZWxldGVBcnJheT8uc29tZShwQ2FsbGJhY2tUb0RlbGV0ZSA9PiBwQ2FsbGJhY2tUb0RlbGV0ZSA9PT0gcENhbGxiYWNrKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHR0aGlzLmNhbGxiYWNrcy5zZXQocEV2ZW50TmFtZSwgY2FsbGJhY2tzKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMuY2FsbGJhY2tzRm9yRGVsZXRlLmNsZWFyKCk7XG5cdH1cblxuXHRwcml2YXRlIGFkZENhbGxiYWNrcygpOiB2b2lkXG5cdHtcblx0XHRpZiAodGhpcy5jYWxsYmFja3NGb3JBZGQuc2l6ZSA8PSAwKVxuXHRcdHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5jYWxsYmFja3NGb3JBZGQuZm9yRWFjaCgocENhbGxiYWNrc1RvQWRkQXJyYXksIHBFdmVudE5hbWUpID0+XG5cdFx0e1xuXHRcdFx0Y29uc3QgY2FsbGJhY2tBcnJheSA9IHRoaXMuY2FsbGJhY2tzLmdldChwRXZlbnROYW1lKTtcblx0XHRcdGlmIChjYWxsYmFja0FycmF5ICYmIGNhbGxiYWNrQXJyYXkubGVuZ3RoID4gMClcblx0XHRcdHtcblx0XHRcdFx0Y29uc3QgY2FsbGJhY2tzVG9BZGQgPSBwQ2FsbGJhY2tzVG9BZGRBcnJheS5maWx0ZXIocENhbGxiYWNrID0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2tBcnJheT8uc29tZShwQ2FsbGJhY2tUb0FkZCA9PiBwQ2FsbGJhY2tUb0FkZCA9PT0gcENhbGxiYWNrKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmIChjYWxsYmFja0FycmF5Lmxlbmd0aCA+IDApXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLmNhbGxiYWNrcy5zZXQocEV2ZW50TmFtZSwgWy4uLmNhbGxiYWNrQXJyYXksIC4uLmNhbGxiYWNrc1RvQWRkXSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLmNhbGxiYWNrcy5zZXQocEV2ZW50TmFtZSwgcENhbGxiYWNrc1RvQWRkQXJyYXkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5jYWxsYmFja3NGb3JBZGQuY2xlYXIoKTtcblx0fVxuXG5cdGRpc3BhdGNoKHBFdmVudDogVEV2ZW50cywgcERhdGE/OiBhbnkpXG5cdHtcblx0XHR0aGlzLkluRGlzcGF0Y2ggPSB0cnVlO1xuXHRcdGlmICghdGhpcy5jYWxsYmFja3MuaGFzKHBFdmVudCkpXG5cdFx0e1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBjYWxsYmFja0FycmF5ID0gdGhpcy5jYWxsYmFja3MuZ2V0KHBFdmVudClcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNhbGxiYWNrQXJyYXkubGVuZ3RoOyBpKyspXG5cdFx0e1xuXHRcdFx0Y29uc3QgY2FsbGJhY2sgPSBjYWxsYmFja0FycmF5W2ldO1xuXHRcdFx0Y2FsbGJhY2socERhdGEpO1xuXHRcdH1cblxuXHRcdHRoaXMuSW5EaXNwYXRjaCA9IGZhbHNlO1xuXHRcdHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG5cdFx0dGhpcy5kZWxldGVDYWxsYmFja3MoKTtcblx0fVxufVxuIiwiaW1wb3J0IHtJUG9vbH0gZnJvbSBcIi4vSVBvb2xcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0UG9vbDxUPiBpbXBsZW1lbnRzIElQb29sPFQ+XG57XG5cdHByb3RlY3RlZCByZWFkb25seSBvYmplY3RzOiBUW10gPSBbXTtcblxuXHRpbml0KHBTaXplOiBudW1iZXIpXG5cdHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBTaXplOyBpKyspXG5cdFx0e1xuXHRcdFx0dGhpcy5yZWxlYXNlKHRoaXMuY3JlYXRlTmV3SW5zdGFuY2UoKSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0b2J0YWluKCk6IFRcblx0e1xuXHRcdHJldHVybiB0aGlzLm9iamVjdHMucG9wKCkgfHwgdGhpcy5jcmVhdGVOZXdJbnN0YW5jZSgpO1xuXHR9XG5cblx0cmVsZWFzZShwT2JqZWN0OiBUKTogdm9pZFxuXHR7XG5cdFx0dGhpcy5vYmplY3RzLnB1c2gocE9iamVjdCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgY3JlYXRlTmV3SW5zdGFuY2UoKTogVDtcbn1cbiIsImltcG9ydCB7SVN0YXRlTWFjaGluZUNvbnRleHR9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lTdGF0ZU1hY2hpbmVDb250ZXh0XCI7XG5pbXBvcnQge0lCYXNlU3RhdGVNYWNoaW5lfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQmFzZVN0YXRlTWFjaGluZVwiO1xuXG4vKipcbiAqIEFic3RyYWN0IGFuZCBiYXNpYyBzdGF0ZSBtYWNoaW5lLlxuICogQFR5cGVQYXJhbWV0ZXIgVENvbnRleHQgLSBhIHN0YXRlIG1hY2hpbmUgY29udGV4dCBjbGFzcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEFic3RyYWN0U3RhdGVNYWNoaW5lQ29udGV4dDxUQ29udGV4dCwgVEV2ZW50PiBpbXBsZW1lbnRzIElTdGF0ZU1hY2hpbmVDb250ZXh0PFRDb250ZXh0LCBURXZlbnQ+XG57XG5cdHByb3RlY3RlZCBfc3RhdGVNYWNoaW5lOiBJQmFzZVN0YXRlTWFjaGluZTxUQ29udGV4dCwgVEV2ZW50PlxuXG5cdGNvbnN0cnVjdG9yKHBTdGF0ZU1hY2hpbmU6IElCYXNlU3RhdGVNYWNoaW5lPFRDb250ZXh0LCBURXZlbnQ+KVxuXHR7XG5cdFx0dGhpcy5fc3RhdGVNYWNoaW5lID0gcFN0YXRlTWFjaGluZTtcblx0fVxuXG5cdGdldCBTdGF0ZU1hY2hpbmUoKTogSUJhc2VTdGF0ZU1hY2hpbmU8VENvbnRleHQsIFRFdmVudD5cblx0e1xuXHRcdHJldHVybiB0aGlzLl9zdGF0ZU1hY2hpbmU7XG5cdH1cblxuXHRSZXNldCgpOiB2b2lkXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cblx0e1xuXG5cdH1cbn0iLCJpbXBvcnQge0lCYXNlVHJhbnNpdGlvbn0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUJhc2VUcmFuc2l0aW9uXCI7XG5pbXBvcnQge1RyYW5zaXRpb25CZWhhdmlvckVudW19IGZyb20gXCIuLi9FbnVtL1RyYW5zaXRpb25CZWhhdmlvdXJFbnVtXCI7XG5pbXBvcnQge0NvbmRpdGlvbkNhbGxCYWNrfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9Db25kaXRpb25DYWxsQmFja1wiO1xuaW1wb3J0IHtJQmFzZVN0YXRlfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQmFzZVN0YXRlXCI7XG5pbXBvcnQge051bGxTdGF0ZUV4Y2VwdGlvbn0gZnJvbSBcIi4uL0V4Y2VwdGlvbnMvTnVsbFN0YXRlRXhjZXB0aW9uXCI7XG5cbi8qKlxuICogQW4gYWJzdHJhY3QgaW1wbGVtZW50YXRpb24gb2YgdGhlIElCYXNlVHJhbnNpdGlvblxuICogQFR5cGVQYXJhbWV0ZXIgVENvbnRleHQgLSBhIHN0YXRlIG1hY2hpbmUgY29udGV4dCBjbGFzcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEFic3RyYWN0VHJhbnNpdGlvbjxUQ29udGV4dD4gaW1wbGVtZW50cyBJQmFzZVRyYW5zaXRpb248VENvbnRleHQ+XG57XG5cdC8qKlxuXHQgKiBUaGUgZXZhbHVhdGlvbiBvcmRlciBmb3IgdGhpcyB0cmFuc2l0aW9uLCB0aGUgZGVmYXVsdCB2YWx1ZSBpcyAwLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRwcm90ZWN0ZWQgX29yZGVyID0gMDtcblxuXHRwcm90ZWN0ZWQgX2NvbmRpdGlvbjogQ29uZGl0aW9uQ2FsbEJhY2s8VENvbnRleHQ+IHwgbnVsbCA9IG51bGw7XG5cdHByb3RlY3RlZCBfdHJhbnNpdGlvbkJlaGF2aW9yOiBUcmFuc2l0aW9uQmVoYXZpb3JFbnVtID1cblx0XHRUcmFuc2l0aW9uQmVoYXZpb3JFbnVtLkNPTlRJTlVFX0FGVEVSX1RSQU5TSVRJT047XG5cdC8qKlxuXHQgKiBUaGUgaW5pdGlhbCBzdGF0ZSBvZiB0cmFuc2l0aW9uLlxuXHQgKiBJbiBjYXNlIGlmIHRoaXMgcGFyYW1ldGVyIHdpbGwgbm90IGJlIGVxdWFsIHRvIHRoZSBzdGF0ZSBtYWNoaW5lIGN1cnJlbnQgc3RhdGVcblx0ICogaW4gbW9tZW50IG9mIGNhbGxpbmcgdGhlIG1ldGhvZCBDYW5FeGVjdXRlLCBzdGF0ZSBtYWNoaW5lIGNhbiByaXNlIGFuIGV4Y2VwdGlvbi5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0cHJvdGVjdGVkIF9mcm9tU3RhdGU6IElCYXNlU3RhdGU8VENvbnRleHQ+O1xuXHQvKipcblx0ICogVGhlIHRhcmdldCBzdGF0ZSBvZiB0cmFuc2l0aW9uLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRwcm90ZWN0ZWQgX3RvU3RhdGU6IElCYXNlU3RhdGU8VENvbnRleHQ+O1xuXHRwcm90ZWN0ZWQgX2lzQWN0aXZlID0gdHJ1ZTtcblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIEFic3RyYWN0VHJhbnNpdGlvbiBjbGFzcyBhbmQgc2V0dXBcblx0ICogQHBhcmFtIHBGcm9tU3RhdGUgLSBUaGUgaW5pdGlhbCBzdGF0ZSBvZiB0cmFuc2l0aW9uLlxuXHQgKiBAcGFyYW0gcFRvU3RhdGUgLSBUaGUgdGFyZ2V0IHN0YXRlIG9mIHRyYW5zaXRpb24uXG5cdCAqIEBwYXJhbSBwQ29uZGl0aW9uIC0gQSBmdW5jdGlvbiB0aGF0IG11c3QgcmV0dXJuIGJvb2wgYW5kIGluZGljYXRlcyB0aGUgYXZhaWxhYmlsaXR5IG9mIHBhc3NpbmcgdHJhbnNpdGlvbi5cblx0ICogQHBhcmFtIHBPcmRlciAtIEFuIGV2YWx1YXRpb24gb3JkZXIuXG5cdCAqIEBwYXJhbSBwQWZ0ZXJUcmFuc2l0aW9uQmVoYXZpb3JFbnVtIC0gU3RhdGUgbWFjaGluZSBiZWhhdmlvciBleGVjdXRpb24gYWZ0ZXIgcGVyZm9ybWluZyB0cmFuc2l0aW9uIHRocm91Z2ggdGhlIHN0YXRlLlxuXHQgKiBAcmVtYXJrcyBUaGUgZGVmYXVsdCBiZWhhdmlvciBmb3IgdGhlIHN0YXRlIG1hY2hpbmUgYWZ0ZXIgdHJhbnNhY3Rpb24gaXNcblx0ICogQ09OVElOVUVfQUZURVJfVFJBTlNJVElPTiB3aXRjaCB3aWxsIGNvbnRpbnVlIHRoZSBleGVjdXRpb24gKGNhbGwgdGhlIEV4ZWN1dGUgY2FsbGJhY2spIGFmdGVyIHRyYW5zYWN0aW9uLlxuXHQgKi9cblx0Y29uc3RydWN0b3IocEZyb21TdGF0ZTogSUJhc2VTdGF0ZTxUQ29udGV4dD4sXG5cdFx0XHRcdHBUb1N0YXRlOiBJQmFzZVN0YXRlPFRDb250ZXh0Pixcblx0XHRcdFx0cENvbmRpdGlvbjogQ29uZGl0aW9uQ2FsbEJhY2s8VENvbnRleHQ+IHwgbnVsbCA9IG51bGwsXG5cdFx0XHRcdHBPcmRlciA9IDAsXG5cdFx0XHRcdHBBZnRlclRyYW5zaXRpb25CZWhhdmlvckVudW06IFRyYW5zaXRpb25CZWhhdmlvckVudW0gPVxuXHRcdFx0XHRcdFRyYW5zaXRpb25CZWhhdmlvckVudW0uQ09OVElOVUVfQUZURVJfVFJBTlNJVElPTilcblx0e1xuXHRcdHRoaXMuX2Zyb21TdGF0ZSA9IHBGcm9tU3RhdGU7XG5cdFx0dGhpcy5fdG9TdGF0ZSA9IHBUb1N0YXRlO1xuXHRcdHRoaXMuX2NvbmRpdGlvbiA9IHBDb25kaXRpb247XG5cdFx0dGhpcy5fb3JkZXIgPSBwT3JkZXI7XG5cdFx0dGhpcy5fdHJhbnNpdGlvbkJlaGF2aW9yID0gcEFmdGVyVHJhbnNpdGlvbkJlaGF2aW9yRW51bTtcblx0XHR0aGlzLl9mcm9tU3RhdGUuQWRkVHJhbnNpdGlvbih0aGlzKTtcblx0XHR0aGlzLl90b1N0YXRlLkFkZFRyYW5zaXRpb24odGhpcyk7XG5cdH1cblxuXHQvKipcblx0ICogU3RhdGUgbWFjaGluZSBleGVjdXRpb24gYmVoYXZpb3IgYWZ0ZXIgcGVyZm9ybWluZyB0cmFuc2l0aW9uIHRocm91Z2ggdGhlIHN0YXRlLlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdGdldCBBZnRlclRyYW5zaXRpb25CZWhhdmlvckVudW0oKTogVHJhbnNpdGlvbkJlaGF2aW9yRW51bVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX3RyYW5zaXRpb25CZWhhdmlvcjtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGF0ZSBtYWNoaW5lIGV4ZWN1dGlvbiBiZWhhdmlvciBhZnRlciBwZXJmb3JtaW5nIHRyYW5zaXRpb24gdGhyb3VnaCB0aGUgc3RhdGUuXG5cdCAqIEBwYXJhbSBwVmFsdWUgLSBBbiBlbnVtZXJhdGlvbiB2YWx1ZSB0aGF0IHJlcHJlc2VudHMgdGhlIGJlaGF2aW9yIGFmdGVyXG5cdCAqIHBlcmZvcm1pbmcgdHJhbnNpdGlvbiB0aHJvdWdoIHRoZSBzdGF0ZS5cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRzZXQgQWZ0ZXJUcmFuc2l0aW9uQmVoYXZpb3JFbnVtKHBWYWx1ZTogVHJhbnNpdGlvbkJlaGF2aW9yRW51bSlcblx0e1xuXHRcdHRoaXMuX3RyYW5zaXRpb25CZWhhdmlvciA9IHBWYWx1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBIGNvbmRpdGlvbiBmdW5jdGlvbiwgdGhhdCBkZWZpbmVzIGF2YWlsYWJpbGl0eSBvZiB0cmFuc2l0aW9uIGFuZCByZXR1cm5zXG5cdCAqIHRoZSBCb29sZWFuIHRoYXQgcmVwcmVzZW50aW5nIHRoZSBhdmFpbGFiaWxpdHkgb2YgdHJhbnNhY3Rpb24gdG8gcGFzcy5cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRnZXQgQ29uZGl0aW9uKCk6IENvbmRpdGlvbkNhbGxCYWNrPFRDb250ZXh0PiB8IG51bGxcblx0e1xuXHRcdHJldHVybiB0aGlzLl9jb25kaXRpb247XG5cdH1cblxuXHQvKipcblx0ICogQSBjb25kaXRpb24gZnVuY3Rpb24sIHRoYXQgZGVmaW5lcyBhdmFpbGFiaWxpdHkgb2YgdHJhbnNpdGlvbiBhbmQgcmV0dXJuc1xuXHQgKiB0aGUgQm9vbGVhbiB0aGF0IHJlcHJlc2VudGluZyB0aGUgYXZhaWxhYmlsaXR5IG9mIHRyYW5zYWN0aW9uIHRvIHBhc3MuXG5cdCAqIEBwYXJhbSBwQ29uZGl0aW9uIC0gQSBjb25kaXRpb24gY2FsbGJhY2sgdGhhdCB3aWxsIGJlIHVzZWQgYXMgcGFzcyB0aHJvdWdoIGd1YXJkLlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdHNldCBDb25kaXRpb24ocENvbmRpdGlvbjogQ29uZGl0aW9uQ2FsbEJhY2s8VENvbnRleHQ+IHwgbnVsbClcblx0e1xuXHRcdHRoaXMuX2NvbmRpdGlvbiA9IHBDb25kaXRpb247XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGluaXRpYWwgc3RhdGUgb2YgdHJhbnNpdGlvbi5cblx0ICogQHJlbWFya3MgSW4gY2FzZSBpZiB0aGlzIHBhcmFtZXRlciB3aWxsIG5vdCBiZSBlcXVhbCB0byB0aGUgc3RhdGUgbWFjaGluZVxuXHQgKiBjdXJyZW50IHN0YXRlIGluIG1vbWVudCBvZiBjYWxsaW5nIHRoZSBtZXRob2QgQ2FuRXhlY3V0ZSwgc3RhdGUgbWFjaGluZVxuXHQgKiBjYW4gcmlzZSBhbiBleGNlcHRpb24uXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0Z2V0IEZyb21TdGF0ZSgpOiBJQmFzZVN0YXRlPFRDb250ZXh0PlxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX2Zyb21TdGF0ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgaW5pdGlhbCBzdGF0ZSBvZiB0cmFuc2l0aW9uLlxuXHQgKiBAcGFyYW0gcFN0YXRlIC0gQW4gaW5pdGlhbCBzdGF0ZSBvZiB0cmFuc2l0aW9uLlxuXHQgKiBAcmVtYXJrcyBJbiBjYXNlIGlmIHRoaXMgcGFyYW1ldGVyIHdpbGwgbm90IGJlIGVxdWFsIHRvIHRoZSBzdGF0ZSBtYWNoaW5lXG5cdCAqIGN1cnJlbnQgc3RhdGUgaW4gbW9tZW50IG9mIGNhbGxpbmcgdGhlIG1ldGhvZCBDYW5FeGVjdXRlLCBzdGF0ZSBtYWNoaW5lXG5cdCAqIGNhbiByaXNlIGFuIGV4Y2VwdGlvbi5cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRzZXQgRnJvbVN0YXRlKHBTdGF0ZTogSUJhc2VTdGF0ZTxUQ29udGV4dD4pXG5cdHtcblx0XHR0aGlzLl9mcm9tU3RhdGUgPSBwU3RhdGU7XG5cdH1cblxuXHQvKipcblx0ICogUmVwcmVzZW50cyB0aGEgc3RhdGUgb2YgdGhlIHRyYW5zaXRpb246IElzIHRoaXMgdHJhbnNpdGlvbiBhY3RpdmUgb3Igbm90LlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdGdldCBJc0FjdGl2ZSgpOiBib29sZWFuXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5faXNBY3RpdmU7XG5cdH1cblxuXHQvKipcblx0ICogUmVwcmVzZW50cyB0aGEgc3RhdGUgb2YgdGhlIHRyYW5zaXRpb246IElzIHRoaXMgdHJhbnNpdGlvbiBhY3RpdmUgb3Igbm90LlxuXHQgKiBAcGFyYW0gcFZhbHVlIC0gQW4gYWN0aXZpdHkgb2YgdGhlIHRyYW5zaXRpb246IHRydWUgLSBhY3RpdmUsIGZhbHNlIC0gbm90IGFjdGl2ZS5cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRzZXQgSXNBY3RpdmUocFZhbHVlOiBib29sZWFuKVxuXHR7XG5cdFx0dGhpcy5faXNBY3RpdmUgPSBwVmFsdWU7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGV2YWx1YXRpb24gb3JkZXIgZm9yIHRoaXMgdHJhbnNpdGlvbiwgdGhlIGRlZmF1bHQgdmFsdWUgaXMgMC5cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRnZXQgT3JkZXIoKTogbnVtYmVyXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5fb3JkZXI7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGV2YWx1YXRpb24gb3JkZXIgZm9yIHRoaXMgdHJhbnNpdGlvbiwgdGhlIGRlZmF1bHQgdmFsdWUgaXMgMC5cblx0ICogQHBhcmFtIHBPcmRlciAtIGFuIG9yZGVyIHZhbHVlLlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdHNldCBPcmRlcihwT3JkZXI6IG51bWJlcilcblx0e1xuXHRcdHRoaXMuX29yZGVyID0gcE9yZGVyO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSB0YXJnZXQgc3RhdGUgb2YgdHJhbnNpdGlvbi5cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRnZXQgVG9TdGF0ZSgpOiBJQmFzZVN0YXRlPFRDb250ZXh0PlxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX3RvU3RhdGU7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIHRhcmdldCBzdGF0ZSBvZiB0cmFuc2l0aW9uLlxuXHQgKiBAcGFyYW0gcFRvU3RhdGUgLSBBIHRhcmdldCBzdGFyZSB0byBtb3ZlIHRvLlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdHNldCBUb1N0YXRlKHBUb1N0YXRlOiBJQmFzZVN0YXRlPFRDb250ZXh0Pilcblx0e1xuXHRcdHRoaXMuX3RvU3RhdGUgPSBwVG9TdGF0ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZWZpbmUgcG9zc2liaWxpdHkgdG8gZXhlY3V0ZSB0cmFuc2l0aW9uIGJldHdlZW4gZGVmaW5lZCBzdGF0ZXMuXG5cdCAqIEBwYXJhbSBwQ29udGV4dCAtIEEgc3RhdGUgbWFjaGluZSBjb250ZXh0IHRvIGFuYWx5c2UuXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0Q2FuRXhlY3V0ZShwQ29udGV4dDogVENvbnRleHQgfCBudWxsKTogYm9vbGVhblxuXHR7XG5cdFx0aWYgKHBDb250ZXh0ID09IG51bGwpXG5cdFx0e1xuXHRcdFx0dGhyb3cgbmV3IE51bGxTdGF0ZUV4Y2VwdGlvbignVGhlIHN0YXRlIHBhc3NlZCB0byB0aGUgbWV0aG9kIGlzIG51bGwhJyk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgd2UgaGF2ZW4ndCBzZXQgdXAgY29uZGl0aW9uIC0ganVzdCBwYXNzIHRoZSB0cmFuc2l0aW9uXG5cdFx0aWYgKHRoaXMuQ29uZGl0aW9uID09IG51bGwpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5Db25kaXRpb24uY2FsbCh0aGlzLCBwQ29udGV4dCk7XG5cdFx0Ly8gSW4gY2FzZSBpZiB0aGUgcmVzdWx0IGlzIHRydWUgLSBwYXNzIHRoZSBjb25kaXRpb25cblx0XHRyZXR1cm4gcmVzdWx0IHx8IHJlc3VsdCA9PSBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZSB0aGUgY3VycmVudCB0cmFuc2l0aW9uIGZyb20gdGhlIHN0YXRlcyAoRnJvbVN0YXRlLCBUb1N0YXRlKS5cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRSZW1vdmVGcm9tU3RhdGVzKCk6IHZvaWRcblx0e1xuXHRcdGlmICh0aGlzLkZyb21TdGF0ZSAhPSBudWxsKVxuXHRcdHtcblx0XHRcdHRoaXMuRnJvbVN0YXRlLlJlbW92ZVRyYW5zaXRpb24odGhpcyk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuVG9TdGF0ZSAhPSBudWxsKVxuXHRcdHtcblx0XHRcdHRoaXMuVG9TdGF0ZS5SZW1vdmVUcmFuc2l0aW9uKHRoaXMpO1xuXHRcdH1cblx0fVxufSIsIi8qKlxuICogT2NjdXJzIHdoZW4gc3RhdGUgbWFjaGluZSBoYXZlIG1vcmUgdGhhbiBvbmUgaW5pdGlhbCBzdGF0ZSBhbmQgY2FuJ3QgcmVzb2x2ZVxuICogdGhlIG9wZXJhdGlvbiAoYWRkIHN0YXRlLCByZW1vdmUgc3RhdGUsIHJlc2V0IGV0YykuXG4gKi9cbmV4cG9ydCBjbGFzcyBBbWJpZ3VvdXNJbml0aWFsU3RhdGVFeGNlcHRpb24gZXh0ZW5kcyBFcnJvclxue1xuXHQvKipcblx0ICogSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIEFtYmlndW91c0luaXRpYWxTdGF0ZUV4Y2VwdGlvbiBjbGFzcy5cblx0ICogQHBhcmFtIHBFcnJvck1lc3NhZ2UgLSBUaGUgbWVzc2FnZSB0aGF0IGRlc2NyaWJlcyB0aGUgZXJyb3IuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihwRXJyb3JNZXNzYWdlOiBzdHJpbmcpXG5cdHtcblx0XHRzdXBlcihwRXJyb3JNZXNzYWdlKTtcblx0XHQvLyBJdCdzIHdvcnRoIG1lbnRpb25pbmcgdGhhdCBPYmplY3Quc2V0UHJvdG90eXBlT2YgbmVlZHMgdG8gYmUgY2FsbGVkXG5cdFx0Ly8gaW1tZWRpYXRlbHkgYWZ0ZXIgYW55IHN1cGVyKC4uLikgY2FsbHMuXG5cblx0XHQvLyBTZXQgdGhlIHByb3RvdHlwZSBleHBsaWNpdGx5XG5cdFx0T2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIEFtYmlndW91c0luaXRpYWxTdGF0ZUV4Y2VwdGlvbi5wcm90b3R5cGUpO1xuXHR9XG59IiwiaW1wb3J0IHtBbmltYXRpb24sIGRpcmVjdG9yLCBOb2RlLCBzcH0gZnJvbSAnY2MnO1xuXG5leHBvcnQgdHlwZSBBbmltYXRpb25Qcm9taXNlID0gUHJvbWlzZTxzcC5zcGluZS5BbmltYXRpb24gfCB2b2lkPjtcblxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbnNVdGlsc1xue1xuXHRwcml2YXRlIHN0YXRpYyBzcGluZVByb21pc2VSZXNvbHZlczogTWFwPHNwLlNrZWxldG9uLCBGdW5jdGlvbj4gPSBuZXcgTWFwPHNwLlNrZWxldG9uLCBGdW5jdGlvbj4oKTtcblx0cHJpdmF0ZSBzdGF0aWMgYW5pbWF0aW9uUHJvbWlzZVJlc29sdmVzOiBNYXA8QW5pbWF0aW9uLCBGdW5jdGlvbj4gPSBuZXcgTWFwPEFuaW1hdGlvbiwgRnVuY3Rpb24+KCk7XG5cblx0cHVibGljIHN0YXRpYyBwbGF5U3BpbmUocFNwaW5lOiBzcC5Ta2VsZXRvbiwgcEFuaW1hdGlvbk5hbWU6IHN0cmluZywgcExvb3A6IGJvb2xlYW4gPSBmYWxzZSk6IEFuaW1hdGlvblByb21pc2Vcblx0e1xuXHRcdHBTcGluZS5wYXVzZWQgPSBmYWxzZTtcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8c3Auc3BpbmUuQW5pbWF0aW9uIHwgdm9pZD4ocmVzb2x2ZSA9PlxuXHRcdHtcblx0XHRcdC8vIGhhY2sgdG8gYmUgc3VyZSBza2VsZXRvbiB3aWxsIGJlIGFkZGVkIHRvIHJlbmRlclxuXHRcdFx0ZGlyZWN0b3IuX25vZGVBY3RpdmF0b3IuYWN0aXZhdGVOb2RlKHBTcGluZS5ub2RlLCB0cnVlKTtcblx0XHRcdHBTcGluZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cblx0XHRcdGlmIChwU3BpbmUuZmluZEFuaW1hdGlvbihwQW5pbWF0aW9uTmFtZSkgPT0gbnVsbClcblx0XHRcdHtcblx0XHRcdFx0Y29uc29sZS53YXJuKFwiLS0tLT4gU3BpbmUgQW5pbWF0aW9uIG5vdCBmb3VuZFwiLCBwQW5pbWF0aW9uTmFtZSlcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRwU3BpbmUuc2V0QW5pbWF0aW9uKDAsIHBBbmltYXRpb25OYW1lLCBwTG9vcCk7XG5cdFx0XHRpZiAocExvb3ApXG5cdFx0XHR7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH0gZWxzZVxuXHRcdFx0e1xuXHRcdFx0XHRBbmltYXRpb25zVXRpbHMuc3BpbmVQcm9taXNlUmVzb2x2ZXMuc2V0KHBTcGluZSwgcmVzb2x2ZSk7XG5cdFx0XHRcdHBTcGluZS5zZXRDb21wbGV0ZUxpc3RlbmVyKChyZXMpID0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwU3BpbmUuc2V0Q29tcGxldGVMaXN0ZW5lcihudWxsKTtcblx0XHRcdFx0XHRBbmltYXRpb25zVXRpbHMuc3BpbmVQcm9taXNlUmVzb2x2ZXMuZGVsZXRlKHBTcGluZSk7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXMuYW5pbWF0aW9uKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIHBsYXlBbmltYXRpb24ocE5vZGU6IE5vZGUsIHBBbmltYXRpb25OYW1lOiBzdHJpbmcgPSBudWxsKTogUHJvbWlzZTx2b2lkPlxuXHR7XG5cdFx0Y29uc3QgYW5pbWF0aW9uID0gcE5vZGUuZ2V0Q29tcG9uZW50KEFuaW1hdGlvbik7XG5cdFx0aWYgKCFhbmltYXRpb24pXG5cdFx0e1xuXHRcdFx0Y29uc29sZS53YXJuKFwiLS0tLT4gVGltZWxpbmUgQW5pbWF0aW9uIGNvbXBvbmVudCBub3QgZm91bmQgZm9yIG5vZGVcIiwgcE5vZGUubmFtZSlcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAocEFuaW1hdGlvbk5hbWUgJiYgIWFuaW1hdGlvbi5jbGlwcy5maW5kKGNsaXAgPT4gY2xpcC5uYW1lID09IHBBbmltYXRpb25OYW1lKSlcblx0XHR7XG5cdFx0XHRjb25zb2xlLndhcm4oXCItLS0tPiBUaW1lbGluZSBBbmltYXRpb24gbmFtZSBub3QgZm91bmRcIiwgcEFuaW1hdGlvbk5hbWUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+XG5cdFx0e1xuXHRcdFx0QW5pbWF0aW9uc1V0aWxzLmFuaW1hdGlvblByb21pc2VSZXNvbHZlcy5zZXQoYW5pbWF0aW9uLCByZXNvbHZlKTtcblx0XHRcdGFuaW1hdGlvbi5vbmNlKEFuaW1hdGlvbi5FdmVudFR5cGUuRklOSVNIRUQsICgpID0+XG5cdFx0XHR7XG5cdFx0XHRcdEFuaW1hdGlvbnNVdGlscy5hbmltYXRpb25Qcm9taXNlUmVzb2x2ZXMuZGVsZXRlKGFuaW1hdGlvbik7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH0pO1xuXHRcdFx0YW5pbWF0aW9uLnBsYXkocEFuaW1hdGlvbk5hbWUpO1xuXHRcdH0pO1xuXHR9XG59IiwiaW1wb3J0IHtMYWJlbCwgTm9kZX0gZnJvbSBcImNjXCI7XG5pbXBvcnQge1Rlcm1pbmFibGVDb250ZXh0fSBmcm9tIFwiLi9zdGF0ZU1hdHRlci9UZXJtaW5hYmxlL1Rlcm1pbmFibGVDb250ZXh0XCI7XG5pbXBvcnQge0FwcEV2ZW50c30gZnJvbSBcIi4vQXBwRXZlbnRzXCI7XG5pbXBvcnQge0lTdGF0ZU1hY2hpbmVDb250ZXh0fSBmcm9tIFwiLi9zdGF0ZU1hdHRlci9JbnRlcmZhY2VzL0lTdGF0ZU1hY2hpbmVDb250ZXh0XCI7XG5pbXBvcnQge0dhbWVDb25maWd9IGZyb20gXCIuLi90eXBlcy9HYW1lQ29uZmlnXCI7XG5cbmV4cG9ydCBjbGFzcyBBcHBDb250ZXh0IGV4dGVuZHMgVGVybWluYWJsZUNvbnRleHQ8QXBwQ29udGV4dCwgQXBwRXZlbnRzPiBpbXBsZW1lbnRzIElTdGF0ZU1hY2hpbmVDb250ZXh0PEFwcENvbnRleHQsIEFwcEV2ZW50cz5cbntcblx0Y29uZmlnOiBHYW1lQ29uZmlnO1xuXHRsb2NhbGU6IE1hcDxzdHJpbmcsIHN0cmluZz47XG5cblx0c3RhcnRlck5vZGU6IE5vZGU7XG5cdGdhbWVVSTogTm9kZTtcblx0dG9hc3ROb2RlOiBOb2RlO1xuXHR0b2FzdExhYmVsOiBMYWJlbDtcblxuXHRvblVwZGF0ZTogKGR0OiBudW1iZXIpID0+IHZvaWQgfCBudWxsID0gbnVsbDtcbn0iLCJleHBvcnQgZW51bSBBcHBFdmVudHNcbntcblxufSIsImltcG9ydCB7X2RlY29yYXRvciwgQ29tcG9uZW50LCBmaW5kLCBMYWJlbH0gZnJvbSBcImNjXCI7XG5pbXBvcnQge0FwcFN0YXRlTWFjaGluZX0gZnJvbSBcIi4vZnNtL0FwcFN0YXRlTWFjaGluZVwiO1xuaW1wb3J0IHtBcHBDb250ZXh0fSBmcm9tIFwiLi9mc20vQXBwQ29udGV4dFwiO1xuaW1wb3J0IHtMb2FkaW5nU3RhdGV9IGZyb20gXCIuL2ZzbS9zdGF0ZXMvTG9hZGluZ1N0YXRlXCI7XG5pbXBvcnQge0ludHJvU3RhdGV9IGZyb20gXCIuL2ZzbS9zdGF0ZXMvSW50cm9TdGF0ZVwiO1xuaW1wb3J0IHtQbGF5R2FtZVN0YXRlfSBmcm9tIFwiLi9mc20vc3RhdGVzL1BsYXlHYW1lU3RhdGVcIjtcbmltcG9ydCB7R2FtZU92ZXJTdGF0ZX0gZnJvbSBcIi4vZnNtL3N0YXRlcy9HYW1lT3ZlclN0YXRlXCI7XG5pbXBvcnQge05vZGVOYW1lc30gZnJvbSBcIi4vTm9kZU5hbWVzXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBtZW51fSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdBcHBJbmRleCcpXG5AbWVudSgnKipBcHAvQXBwSW5kZXgnKVxuZXhwb3J0IGNsYXNzIEFwcEluZGV4IGV4dGVuZHMgQ29tcG9uZW50XG57XG5cdHByaXZhdGUgX3N0YXRlTWFjaGluZTogQXBwU3RhdGVNYWNoaW5lO1xuXHRwcml2YXRlIF9jb250ZXh0OiBBcHBDb250ZXh0O1xuXG5cdG9uTG9hZCgpXG5cdHtcblx0XHR0aGlzLl9zdGF0ZU1hY2hpbmUgPSBuZXcgQXBwU3RhdGVNYWNoaW5lKCk7XG5cdFx0dGhpcy5fY29udGV4dCA9IG5ldyBBcHBDb250ZXh0KHRoaXMuX3N0YXRlTWFjaGluZSk7XG5cdFx0dGhpcy5fc3RhdGVNYWNoaW5lLkNvbnRleHQgPSB0aGlzLl9jb250ZXh0O1xuXHRcdHRoaXMuX2NvbnRleHQuc3RhcnRlck5vZGUgPSB0aGlzLm5vZGU7XG5cdFx0dGhpcy5fY29udGV4dC5nYW1lVUkgPSBmaW5kKE5vZGVOYW1lcy5Ub3RhbFBvaW50cyk7XG5cdFx0dGhpcy5fY29udGV4dC50b2FzdE5vZGUgPSBmaW5kKE5vZGVOYW1lcy5Ub2FzdE1lc3NhZ2UpO1xuXHRcdHRoaXMuX2NvbnRleHQudG9hc3RMYWJlbCA9IHRoaXMuX2NvbnRleHQudG9hc3ROb2RlLmdldENoaWxkQnlOYW1lKFwiVmFsdWVcIikuZ2V0Q29tcG9uZW50KExhYmVsKTtcblxuXHRcdGNvbnN0IGxvYWRpbmdTdGF0ZSA9IG5ldyBMb2FkaW5nU3RhdGUodGhpcy5fY29udGV4dCk7XG5cdFx0Y29uc3QgaW50cm9TdGF0ZSA9IG5ldyBJbnRyb1N0YXRlKHRoaXMuX2NvbnRleHQpO1xuXHRcdGNvbnN0IHBsYXlpbmdTdGF0ZSA9IG5ldyBQbGF5R2FtZVN0YXRlKHRoaXMuX2NvbnRleHQpO1xuXHRcdGNvbnN0IGdhbWVPdmVyU3RhdGUgPSBuZXcgR2FtZU92ZXJTdGF0ZSh0aGlzLl9jb250ZXh0KTtcblxuXHRcdHRoaXMuX3N0YXRlTWFjaGluZS5BZGRTdGF0ZShsb2FkaW5nU3RhdGUsIHRydWUpO1xuXHRcdHRoaXMuX3N0YXRlTWFjaGluZS5BZGRTdGF0ZShpbnRyb1N0YXRlKTtcblx0XHR0aGlzLl9zdGF0ZU1hY2hpbmUuQWRkU3RhdGUocGxheWluZ1N0YXRlKTtcblx0XHR0aGlzLl9zdGF0ZU1hY2hpbmUuQWRkU3RhdGUoZ2FtZU92ZXJTdGF0ZSk7XG5cblx0XHR0aGlzLl9zdGF0ZU1hY2hpbmUuQWRkVHJhbnNpdGlvbihsb2FkaW5nU3RhdGUsIGludHJvU3RhdGUpO1xuXHRcdHRoaXMuX3N0YXRlTWFjaGluZS5BZGRUcmFuc2l0aW9uKGludHJvU3RhdGUsIHBsYXlpbmdTdGF0ZSk7XG5cdFx0dGhpcy5fc3RhdGVNYWNoaW5lLkFkZFRyYW5zaXRpb24ocGxheWluZ1N0YXRlLCBnYW1lT3ZlclN0YXRlKTtcblx0XHR0aGlzLl9zdGF0ZU1hY2hpbmUuQWRkVHJhbnNpdGlvbihnYW1lT3ZlclN0YXRlLCBpbnRyb1N0YXRlKTtcblxuXHRcdHRoaXMuX3N0YXRlTWFjaGluZS5SdW4oKTtcblx0fVxuXG5cdHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZFxuXHR7XG5cdFx0dGhpcy5fY29udGV4dC5vblVwZGF0ZT8uKGR0KTtcblx0fVxufSIsImltcG9ydCB7QWJzdHJhY3RCYXNlU3RhdGVNYWNoaW5lfSBmcm9tIFwiLi9zdGF0ZU1hdHRlci9BYnN0cmFjdC9BYnN0cmFjdEJhc2VTdGF0ZU1hY2hpbmVcIjtcbmltcG9ydCB7QXBwQ29udGV4dH0gZnJvbSBcIi4vQXBwQ29udGV4dFwiO1xuaW1wb3J0IHtBcHBFdmVudHN9IGZyb20gXCIuL0FwcEV2ZW50c1wiO1xuaW1wb3J0IHtJQmFzZVRyYW5zaXRpb259IGZyb20gXCIuL3N0YXRlTWF0dGVyL0ludGVyZmFjZXMvSUJhc2VUcmFuc2l0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBBcHBTdGF0ZU1hY2hpbmUgZXh0ZW5kcyBBYnN0cmFjdEJhc2VTdGF0ZU1hY2hpbmU8QXBwQ29udGV4dCwgQXBwRXZlbnRzPlxue1xuXHRwcm90ZWN0ZWQgUGVyZm9ybVRyYW5zaXRpb24ocFRyYW5zaXRpb246IElCYXNlVHJhbnNpdGlvbjxBcHBDb250ZXh0Pik6IHZvaWRcblx0e1xuXHRcdGNvbnNvbGUubG9nKFwiVHJhbnNpdGlvblwiLCBwVHJhbnNpdGlvbi5Gcm9tU3RhdGUsIHBUcmFuc2l0aW9uLlRvU3RhdGUpO1xuXHRcdHN1cGVyLlBlcmZvcm1UcmFuc2l0aW9uKHBUcmFuc2l0aW9uKTtcblx0fVxufSIsImV4cG9ydCBpbnRlcmZhY2UgSUFzc29jaWF0aXZlQXJyYXk8VD5cbntcblx0W2tleTogc3RyaW5nXTogVDtcbn1cblxuZXhwb3J0IGNsYXNzIEFycmF5VXRpbHNcbntcblx0cHJvdGVjdGVkIHN0YXRpYyBSRU1PVkVfQ09VTlRfQUxMOiBudW1iZXIgPSAtMTtcblxuXHRwdWJsaWMgc3RhdGljIHJlbW92ZUl0ZW0obGlzdDogYW55W10sIGl0ZW06IGFueSwgcmVtb3ZlQ291bnQ6IG51bWJlciA9IEFycmF5VXRpbHMuUkVNT1ZFX0NPVU5UX0FMTCk6IGJvb2xlYW5cblx0e1xuXHRcdGxldCByZXN1bHQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRcdGlmIChyZW1vdmVDb3VudCA9PT0gQXJyYXlVdGlscy5SRU1PVkVfQ09VTlRfQUxMKVxuXHRcdHtcblx0XHRcdHJlbW92ZUNvdW50ID0gTnVtYmVyLk1BWF9WQUxVRTtcblx0XHR9XG5cblx0XHRsZXQgdG90YWxSZW1vdmVkQ291bnQ6IG51bWJlciA9IDA7XG5cdFx0bGV0IGl0ZW1JbmRleDogbnVtYmVyID0gbGlzdC5pbmRleE9mKGl0ZW0pO1xuXHRcdHdoaWxlIChpdGVtSW5kZXggIT09IC0xICYmIHRvdGFsUmVtb3ZlZENvdW50IDwgcmVtb3ZlQ291bnQpXG5cdFx0e1xuXHRcdFx0bGlzdC5zcGxpY2UoaXRlbUluZGV4LCAxKTtcblxuXHRcdFx0aXRlbUluZGV4ID0gbGlzdC5pbmRleE9mKGl0ZW0sIGl0ZW1JbmRleCk7XG5cdFx0XHR0b3RhbFJlbW92ZWRDb3VudCsrO1xuXG5cdFx0XHRyZXN1bHQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIHJlbW92ZUl0ZW1zRnJvbUFycmF5PFQ+KGxpc3Q6IFRbXSwgcmVtb3ZlSXRlbXM6IFRbXSk6IHZvaWRcblx0e1xuXHRcdGxldCBpdGVtOiBUO1xuXHRcdGZvciAobGV0IGl0ZW1JbmRleDogbnVtYmVyID0gMDsgaXRlbUluZGV4IDwgcmVtb3ZlSXRlbXMubGVuZ3RoOyBpdGVtSW5kZXgrKylcblx0XHR7XG5cdFx0XHRpdGVtID0gcmVtb3ZlSXRlbXNbaXRlbUluZGV4XTtcblx0XHRcdEFycmF5VXRpbHMucmVtb3ZlSXRlbShsaXN0LCBpdGVtKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGdldFJhbmRvbUl0ZW08VD4obGlzdDogVFtdLCBleGNlcHQ/OiBUW10pOiBUXG5cdHtcblx0XHRsZXQgcmVzdWx0OiBUO1xuXG5cdFx0aWYgKGxpc3QgJiYgbGlzdC5sZW5ndGggPiAwKVxuXHRcdHtcblxuXHRcdFx0aWYgKGV4Y2VwdClcblx0XHRcdHtcblx0XHRcdFx0bGlzdCA9IGxpc3QuY29uY2F0KCk7XG5cdFx0XHRcdEFycmF5VXRpbHMucmVtb3ZlSXRlbXNGcm9tQXJyYXkobGlzdCwgZXhjZXB0KTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdGVtcEluZGV4OiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsaXN0Lmxlbmd0aCk7XG5cdFx0XHRyZXN1bHQgPSBsaXN0W3RlbXBJbmRleF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgcmVtb3ZlRHVwbGljYXRlcyhhcnJheTogYW55W10pOiBhbnlbXVxuXHR7XG5cdFx0cmV0dXJuIGFycmF5LmZpbHRlcihBcnJheVV0aWxzLnJlbW92ZUR1cGxpY2F0ZXNGaWx0ZXIpO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBzaHVmZmxlKGFycmF5OiBhbnlbXSk6IGFueVtdXG5cdHtcblx0XHRyZXR1cm4gYXJyYXkuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcblx0fVxuXG5cdHN0YXRpYyBmaW5kPFQ+KGFycmF5OiBBcnJheTxUPiwgcHJlZGljYXRlOiAoaXRlbTogVCkgPT4gYm9vbGVhbik6IFRcblx0e1xuXHRcdGZvciAoY29uc3QgaXRlbSBvZiBhcnJheSlcblx0XHR7XG5cdFx0XHRpZiAocHJlZGljYXRlKGl0ZW0pKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gaXRlbTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRzdGF0aWMgbWVyZ2VVbmlxdWU8VD4oYTE6IFRbXSwgYTI6IFRbXSk6IFRbXVxuXHR7XG5cdFx0Y29uc3QgcmVzOiBUW10gPSBhMS5maWx0ZXIoKHZhbHVlOiBULCBpbmRleDogbnVtYmVyLCBhOiBUW10pOiBib29sZWFuID0+IGEyLmluZGV4T2YodmFsdWUpIDwgMCk7XG5cdFx0cmV0dXJuIHJlcy5jb25jYXQoYTIpO1xuXHR9XG5cblx0c3RhdGljIHZhbHVlczxUPihtYXA6IElBc3NvY2lhdGl2ZUFycmF5PFQ+KTogVFtdXG5cdHtcblx0XHRjb25zdCBsaXN0OiBUW10gPSBbXTtcblxuXHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG1hcCkpXG5cdFx0e1xuXHRcdFx0bGlzdC5wdXNoKG1hcFtrZXldKTtcblx0XHR9XG5cdFx0cmV0dXJuIGxpc3Q7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGdldEFycmF5RmlsbGVkV2l0aFJhbmdlKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogbnVtYmVyW11cblx0e1xuXHRcdHJldHVybiBBcnJheShlbmQgLSBzdGFydCArIDEpLmZpbGwoMCkubWFwKChfLCBpZHgpID0+IHN0YXJ0ICsgaWR4KTtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgZ2V0V2VpZ2h0ZWRSYW5kb20ob3B0aW9uczogeyBpdGVtOiBudW1iZXIsIHdlaWdodDogbnVtYmVyIH1bXSk6IG51bWJlclxuXHR7XG5cdFx0bGV0IGk7XG5cdFx0Y29uc3Qgd2VpZ2h0czogbnVtYmVyW10gPSBbXTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKylcblx0XHR7XG5cdFx0XHR3ZWlnaHRzW2ldID0gb3B0aW9uc1tpXS53ZWlnaHQgKyAod2VpZ2h0c1tpIC0gMV0gfHwgMCk7XG5cdFx0fVxuXHRcdGNvbnN0IHJhbmRvbTogbnVtYmVyID0gTWF0aC5yYW5kb20oKSAqIHdlaWdodHNbd2VpZ2h0cy5sZW5ndGggLSAxXTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgd2VpZ2h0cy5sZW5ndGg7IGkrKylcblx0XHR7XG5cdFx0XHRpZiAod2VpZ2h0c1tpXSA+IHJhbmRvbSlcblx0XHRcdHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBvcHRpb25zW2ldLml0ZW07XG5cdH1cblxuXHRwcm90ZWN0ZWQgc3RhdGljIHJlbW92ZUR1cGxpY2F0ZXNGaWx0ZXIoaXRlbTogYW55LCBpbmRleDogbnVtYmVyLCBhcnJheTogYW55W10pOiBib29sZWFuXG5cdHtcblx0XHRyZXR1cm4gKGluZGV4ID09PSAwKSA/IHRydWUgOiBhcnJheS5sYXN0SW5kZXhPZihpdGVtLCBpbmRleCAtIDEpID09PSAtMTtcblx0fVxufVxuIiwiaW1wb3J0IHtKc29uQXNzZXQsIFByZWZhYiwgcmVzb3VyY2VzfSBmcm9tICdjYyc7XG5cbmV4cG9ydCBjbGFzcyBBc3NldHNMb2FkZXJcbntcblx0cHVibGljIHN0YXRpYyBsb2FkSlNPTjxUPihwYXRoOiBzdHJpbmcpOiBQcm9taXNlPFQ+XG5cdHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT5cblx0XHR7XG5cdFx0XHRyZXNvdXJjZXMubG9hZChwYXRoLCBKc29uQXNzZXQsIChlcnIsIGpzb25Bc3NldCkgPT5cblx0XHRcdHtcblx0XHRcdFx0aWYgKGVycilcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXNvbHZlKGpzb25Bc3NldC5qc29uIGFzIFQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGxvYWRQcmVmYWIocGF0aDogc3RyaW5nKTogUHJvbWlzZTxQcmVmYWI+XG5cdHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT5cblx0XHR7XG5cdFx0XHRyZXNvdXJjZXMubG9hZChwYXRoLCBQcmVmYWIsIChlcnIsIHByZWZhYikgPT5cblx0XHRcdHtcblx0XHRcdFx0aWYgKGVycilcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXNvbHZlKHByZWZhYik7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufSIsImltcG9ydCB7QWJzdHJhY3RCYXNlU3RhdGV9IGZyb20gXCIuLi9BYnN0cmFjdC9BYnN0cmFjdEJhc2VTdGF0ZVwiO1xuaW1wb3J0IHtUZXJtaW5hYmxlQ29udGV4dH0gZnJvbSBcIi4vVGVybWluYWJsZUNvbnRleHRcIjtcblxuZXhwb3J0IGNsYXNzIEJhc2VUZXJtaW5hYmxlU3RhdGU8VENvbnRleHQgZXh0ZW5kcyBUZXJtaW5hYmxlQ29udGV4dDxhbnksIGFueT4+IGV4dGVuZHMgQWJzdHJhY3RCYXNlU3RhdGU8VENvbnRleHQ+XG57XG5cdEJlZm9yZUVudGVyKCk6IHZvaWRcblx0e1xuXHR9XG5cblx0cHVibGljIEJlZm9yZUV4aXQoKVxuXHR7XG5cdH1cblxuXHRUZXJtaW5hdGUoKTogdm9pZFxuXHR7XG5cdH1cbn0iLCJpbXBvcnQge0Fic3RyYWN0QmFzZVN0YXRlTWFjaGluZX0gZnJvbSBcIi4uL0Fic3RyYWN0L0Fic3RyYWN0QmFzZVN0YXRlTWFjaGluZVwiO1xuaW1wb3J0IHtUZXJtaW5hYmxlQ29udGV4dH0gZnJvbSBcIi4vVGVybWluYWJsZUNvbnRleHRcIjtcbmltcG9ydCB7QmFzZVRlcm1pbmFibGVTdGF0ZX0gZnJvbSBcIi4vQmFzZVRlcm1pbmFibGVTdGF0ZVwiO1xuaW1wb3J0IHtJQmFzZVN0YXRlfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQmFzZVN0YXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBCYXNlVGVybWluYWJsZVN0YXRlTWFjaGluZTxUQ29udGV4dCBleHRlbmRzIFRlcm1pbmFibGVDb250ZXh0PGFueSwgYW55PiwgVEV2ZW50PiBleHRlbmRzIEFic3RyYWN0QmFzZVN0YXRlTWFjaGluZTxUQ29udGV4dCwgVEV2ZW50Plxue1xuXHRwcm90ZWN0ZWQgX2N1cnJlbnRTdGF0ZTogSUJhc2VTdGF0ZTxUQ29udGV4dD4gfCBCYXNlVGVybWluYWJsZVN0YXRlPFRDb250ZXh0PiB8IG51bGwgPSBudWxsO1xuXG5cdHB1YmxpYyBnZXQgY3VycmVudFN0YXRlTmFtZSgpOiBzdHJpbmdcblx0e1xuXHRcdHJldHVybiB0aGlzLl9jdXJyZW50U3RhdGUuY29uc3RydWN0b3IubmFtZTtcblx0fVxuXG5cdHB1YmxpYyBUZXJtaW5hdGUoKTogdm9pZFxuXHR7XG5cdFx0dGhpcy5fY29udGV4dC5pc1Rlcm1pbmF0ZWQgPSB0cnVlO1xuXHRcdGlmICh0aGlzLl9jdXJyZW50U3RhdGUgaW5zdGFuY2VvZiBCYXNlVGVybWluYWJsZVN0YXRlKVxuXHRcdHtcblx0XHRcdHRoaXMuX2N1cnJlbnRTdGF0ZS5UZXJtaW5hdGUoKTtcblx0XHR9IGVsc2Vcblx0XHR7XG5cblx0XHR9XG5cdH1cbn0iLCJpbXBvcnQgTm92YUVDUyBmcm9tIFwiQG5vdmEtZW5naW5lL2Vjc1wiO1xuXG5leHBvcnQgY2xhc3MgQmFza2V0Q29tcG9uZW50IGltcGxlbWVudHMgTm92YUVDUy5Db21wb25lbnRcbntcbiAgICBzdGF0aWMgdGFnOiBzdHJpbmcgPSBcIkJhc2tldENvbXBvbmVudFwiO1xuXG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICB9XG59XG4iLCJpbXBvcnQgTm92YUVDUyBmcm9tIFwiQG5vdmEtZW5naW5lL2Vjc1wiO1xuaW1wb3J0IHtCYXNrZXRDb21wb25lbnR9IGZyb20gXCIuLi9jb21wb25lbnRzL0Jhc2tldENvbXBvbmVudFwiO1xuaW1wb3J0IHtmaW5kLCBOb2RlfSBmcm9tIFwiY2NcIjtcbmltcG9ydCB7R2FtZVN0YXRlfSBmcm9tIFwiLi4vLi4vc3RhdGUvR2FtZVN0YXRlXCI7XG5pbXBvcnQge2luamVjdH0gZnJvbSBcIi4uLy4uL2luamVjdHMvaW5qZWN0XCI7XG5pbXBvcnQge0dhbWVFbmdpbmV9IGZyb20gXCIuLi9HYW1lRW5naW5lXCI7XG5pbXBvcnQge05vZGVOYW1lc30gZnJvbSBcIi4uLy4uL05vZGVOYW1lc1wiO1xuaW1wb3J0IHtFbnRpdGllc0ZhY3Rvcnl9IGZyb20gXCIuLi8uLi9mYWN0b3JpZXMvRW50aXRpZXNGYWN0b3J5XCI7XG5pbXBvcnQge1Bvc2l0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3NpdGlvbkNvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgQmFza2V0TW92ZW1lbnRTeXN0ZW0gZXh0ZW5kcyBOb3ZhRUNTLlN5c3RlbVxue1xuXHRwcm90ZWN0ZWQgZmFtaWx5PzogTm92YUVDUy5GYW1pbHk7XG5cdHByaXZhdGUgYmFza2V0Wm9uZTogTm9kZTtcblx0cHJpdmF0ZSBfZ2FtZVN0YXRlOiBHYW1lU3RhdGUgPSBpbmplY3QoR2FtZVN0YXRlKTtcblxuXHRwdWJsaWMgb25BdHRhY2goZW5naW5lOiBHYW1lRW5naW5lKTogdm9pZFxuXHR7XG5cdFx0c3VwZXIub25BdHRhY2goZW5naW5lKTtcblxuXHRcdHRoaXMuYmFza2V0Wm9uZSA9IGZpbmQoTm9kZU5hbWVzLlpvbmVCYXNrZXQpO1xuXHRcdGVuZ2luZS5hZGRFbnRpdHkoRW50aXRpZXNGYWN0b3J5LmNyZWF0ZUJhc2tldEVudGl0eSgpKTtcblxuXHRcdHRoaXMuZmFtaWx5ID0gbmV3IE5vdmFFQ1MuRmFtaWx5QnVpbGRlcihlbmdpbmUpXG5cdFx0XHQuaW5jbHVkZShCYXNrZXRDb21wb25lbnQpXG5cdFx0XHQuYnVpbGQoKTtcblx0fVxuXG5cdHB1YmxpYyB1cGRhdGUoZW5naW5lOiBHYW1lRW5naW5lLCBkZWx0YTogbnVtYmVyKTogdm9pZFxuXHR7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZhbWlseS5lbnRpdGllcy5sZW5ndGg7IGkrKylcblx0XHR7XG5cdFx0XHRjb25zdCBlbnRpdHkgPSB0aGlzLmZhbWlseS5lbnRpdGllc1tpXTtcblx0XHRcdGNvbnN0IHBvc0NvbXAgPSBlbnRpdHkuZ2V0Q29tcG9uZW50KFBvc2l0aW9uQ29tcG9uZW50KTtcblx0XHRcdHBvc0NvbXAuY3VycmVudFggPSB0aGlzLl9nYW1lU3RhdGUuZ2V0U3RhdGUoKS5iYXNrZXRQb3NpdGlvblg7XG5cdFx0XHRwb3NDb21wLmN1cnJlbnRZID0gdGhpcy5iYXNrZXRab25lLmdldFdvcmxkUG9zaXRpb24oKS55O1xuXHRcdH1cblxuXHR9XG59XG4iLCJpbXBvcnQgTm92YUVDUyBmcm9tIFwiQG5vdmEtZW5naW5lL2Vjc1wiO1xuaW1wb3J0IHtHYW1lRW5naW5lfSBmcm9tIFwiLi4vR2FtZUVuZ2luZVwiO1xuaW1wb3J0IHtGcnVpdENvbXBvbmVudH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRnJ1aXRDb21wb25lbnRcIjtcbmltcG9ydCB7QmFza2V0Q29tcG9uZW50fSBmcm9tIFwiLi4vY29tcG9uZW50cy9CYXNrZXRDb21wb25lbnRcIjtcbmltcG9ydCB7SGl0Q29tcG9uZW50fSBmcm9tIFwiLi4vY29tcG9uZW50cy9IaXRDb21wb25lbnRcIjtcblxuZXhwb3J0IGNsYXNzIEJhc2tldFZTRnJ1aXRDb2xsaXNpb25TeXN0ZW0gZXh0ZW5kcyBOb3ZhRUNTLlN5c3RlbVxue1xuXHRwcm90ZWN0ZWQgZmFtaWx5RnJ1aXRzPzogTm92YUVDUy5GYW1pbHk7XG5cdHByb3RlY3RlZCBmYW1pbHlCYXNrZXQ/OiBOb3ZhRUNTLkZhbWlseTtcblxuXHRvbkF0dGFjaChlbmdpbmU6IEdhbWVFbmdpbmUpOiB2b2lkXG5cdHtcblx0XHRzdXBlci5vbkF0dGFjaChlbmdpbmUpO1xuXG5cdFx0dGhpcy5mYW1pbHlGcnVpdHMgPSBuZXcgTm92YUVDUy5GYW1pbHlCdWlsZGVyKGVuZ2luZSlcblx0XHRcdC5pbmNsdWRlKEZydWl0Q29tcG9uZW50KVxuXHRcdFx0LmluY2x1ZGUoSGl0Q29tcG9uZW50KVxuXHRcdFx0LmJ1aWxkKCk7XG5cblx0XHR0aGlzLmZhbWlseUJhc2tldCA9IG5ldyBOb3ZhRUNTLkZhbWlseUJ1aWxkZXIoZW5naW5lKVxuXHRcdFx0LmluY2x1ZGUoQmFza2V0Q29tcG9uZW50KVxuXHRcdFx0LmluY2x1ZGUoSGl0Q29tcG9uZW50KVxuXHRcdFx0LmJ1aWxkKCk7XG5cdH1cblxuXHR1cGRhdGUoZW5naW5lOiBHYW1lRW5naW5lLCBkZWx0YTogbnVtYmVyKTogdm9pZFxuXHR7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZhbWlseUJhc2tldC5lbnRpdGllcy5sZW5ndGg7IGkrKylcblx0XHR7XG5cdFx0XHRjb25zdCBlbnRpdHkxID0gdGhpcy5mYW1pbHlCYXNrZXQuZW50aXRpZXNbaV07XG5cdFx0XHRjb25zdCBib3gxID0gZW50aXR5MS5nZXRDb21wb25lbnQoSGl0Q29tcG9uZW50KS5oaXRUcmFuc2Zvcm0/LmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpO1xuXG5cdFx0XHRpZiAoIWJveDEpIGNvbnRpbnVlO1xuXG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZmFtaWx5RnJ1aXRzLmVudGl0aWVzLmxlbmd0aDsgaisrKVxuXHRcdFx0e1xuXHRcdFx0XHRjb25zdCBlbnRpdHkyID0gdGhpcy5mYW1pbHlGcnVpdHMuZW50aXRpZXNbal07XG5cdFx0XHRcdGNvbnN0IGhpdENvbXAgPSBlbnRpdHkyLmdldENvbXBvbmVudChIaXRDb21wb25lbnQpO1xuXHRcdFx0XHRjb25zdCBib3gyID0gaGl0Q29tcC5oaXRUcmFuc2Zvcm0/LmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpO1xuXG5cdFx0XHRcdGlmICghYm94MikgY29udGludWU7XG5cblx0XHRcdFx0aWYgKGJveDEuaW50ZXJzZWN0cyhib3gyKSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGhpdENvbXAua2lsbGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHtOb2RlfSBmcm9tIFwiY2NcIjtcbmltcG9ydCB7Q29jb3NGbG9hdGluZ0xhYmVsfSBmcm9tIFwiLi4vY29jb3NDb21wb25lbnRzL3VpL0NvY29zRmxvYXRpbmdMYWJlbFwiO1xuaW1wb3J0IHtmb3JtYXRIYW5kbGVycywgRm9ybWF0VHlwZX0gZnJvbSBcIi4uL3V0aWxzL0Zvcm1hdFV0aWxzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxvYXRpbmdMYWJlbERhdGFcbntcblx0c2NvcmU6IG51bWJlcjtcblx0Zm9ybWF0dGVyOiBGb3JtYXRUeXBlXG59XG5cbmV4cG9ydCB0eXBlIENvY29zRmFjdG9yeUZ1bmMgPSAobm9kZTogTm9kZSwgZGF0YTogYW55KSA9PiB2b2lkO1xuXG5leHBvcnQgY2xhc3MgQ29jb3NGYWN0b3J5XG57XG5cdHB1YmxpYyBzdGF0aWMgYnVpbGRGbG9hdGluZ0xhYmVsKG5vZGU6IE5vZGUsIGRhdGE6IEZsb2F0aW5nTGFiZWxEYXRhKVxuXHR7XG5cdFx0Y29uc3QgY29tcCA9IG5vZGUuZ2V0Q29tcG9uZW50KENvY29zRmxvYXRpbmdMYWJlbCk7XG5cdFx0Y29uc3QgZm9ybWF0RnVuYzogKHY6IG51bWJlcikgPT4gc3RyaW5nID0gZm9ybWF0SGFuZGxlcnNbZGF0YS5mb3JtYXR0ZXJdO1xuXHRcdGNvbXAubGFiZWwuc3RyaW5nID0gZm9ybWF0RnVuYyhkYXRhLnNjb3JlKTtcblx0fVxufSIsImltcG9ydCB7X2RlY29yYXRvciwgQ29tcG9uZW50LCBMYWJlbH0gZnJvbSAnY2MnO1xuaW1wb3J0IHtFQ29jb3NOb2RlRXZlbnRzfSBmcm9tIFwiLi4vRUNvY29zTm9kZUV2ZW50c1wiO1xuaW1wb3J0IHtBbmltYXRpb25zVXRpbHN9IGZyb20gXCIuLi8uLi91dGlscy9BbmltYXRpb25zVXRpbHNcIjtcblxuY29uc3Qge2NjY2xhc3MsIG1lbnUsIHByb3BlcnR5fSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdDb2Nvc0Zsb2F0aW5nTGFiZWwnKVxuQG1lbnUoJyoqQXBwL1VJL0NvY29zRmxvYXRpbmdMYWJlbCcpXG5leHBvcnQgY2xhc3MgQ29jb3NGbG9hdGluZ0xhYmVsIGV4dGVuZHMgQ29tcG9uZW50XG57XG5cdEBwcm9wZXJ0eSh7dHlwZTogTGFiZWx9KVxuXHRwdWJsaWMgbGFiZWw6IExhYmVsO1xuXG5cdG9uRW5hYmxlKClcblx0e1xuXHRcdEFuaW1hdGlvbnNVdGlscy5wbGF5QW5pbWF0aW9uKHRoaXMubGFiZWwubm9kZSkudGhlbigoKSA9PlxuXHRcdHtcblx0XHRcdHRoaXMubm9kZS5lbWl0KEVDb2Nvc05vZGVFdmVudHMuQW5pbWF0aW9uQ29tcGxldGUpO1xuXHRcdH0pO1xuXHR9XG59IiwiaW1wb3J0IHtfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGV9IGZyb20gJ2NjJztcblxuY29uc3Qge2NjY2xhc3MsIG1lbnUsIHByb3BlcnR5fSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdIaXRDb21wb25lbnQnKVxuQG1lbnUoJyoqQXBwL0hpdENvbXBvbmVudCcpXG5leHBvcnQgY2xhc3MgQ29jb3NIaXRDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnRcbntcblx0QHByb3BlcnR5KHt0eXBlOiBOb2RlfSlcblx0cHVibGljIGhpdE5vZGU6IE5vZGU7XG59IiwiaW1wb3J0IHtfZGVjb3JhdG9yLCBDb21wb25lbnQsIEV2ZW50TW91c2UsIEV2ZW50VG91Y2gsIE5vZGUsIFZlYzJ9IGZyb20gJ2NjJztcbmltcG9ydCB7R2FtZVN0YXRlfSBmcm9tIFwiLi4vc3RhdGUvR2FtZVN0YXRlXCI7XG5pbXBvcnQge2luamVjdH0gZnJvbSBcIi4uL2luamVjdHMvaW5qZWN0XCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBtZW51fSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdDb2Nvc1BsYXllckNvbnRyb2xsZXInKVxuQG1lbnUoJyoqQXBwL0NvY29zUGxheWVyQ29udHJvbGxlcicpXG5leHBvcnQgY2xhc3MgQ29jb3NQbGF5ZXJDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50XG57XG4gICAgcHJpdmF0ZSBfZ2FtZVN0YXRlOiBHYW1lU3RhdGUgPSBpbmplY3QoR2FtZVN0YXRlKTtcblxuICAgIG9uTG9hZCgpXG4gICAge1xuICAgICAgICB0aGlzLm5vZGUub24oTm9kZS5FdmVudFR5cGUuTU9VU0VfTU9WRSwgKGV2ZW50OiBFdmVudE1vdXNlKSA9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vdXNlUG9zOiBWZWMyID0gZXZlbnQuZ2V0VUlMb2NhdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVTdGF0ZS5zZXRCYXNrZXRUYXJnZXRQb3NpdGlvbihtb3VzZVBvcy54KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLm5vZGUub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGV2ZW50OiBFdmVudFRvdWNoKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCB0b3VjaFBvczogVmVjMiA9IGV2ZW50LmdldFVJTG9jYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVTdGF0ZS5zZXRCYXNrZXRUYXJnZXRQb3NpdGlvbih0b3VjaFBvcy54KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7X2RlY29yYXRvciwgQ0NTdHJpbmcsIENvbXBvbmVudCwgRW51bSwgTGFiZWx9IGZyb20gJ2NjJztcbmltcG9ydCB7Zm9ybWF0SGFuZGxlcnMsIEZvcm1hdFR5cGV9IGZyb20gXCIuLi8uLi91dGlscy9Gb3JtYXRVdGlsc1wiO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gXCIuLi8uLi9pbmplY3RzL2luamVjdFwiO1xuaW1wb3J0IHtHYW1lU3RhdGV9IGZyb20gXCIuLi8uLi9zdGF0ZS9HYW1lU3RhdGVcIjtcblxuY29uc3Qge2NjY2xhc3MsIG1lbnUsIHByb3BlcnR5LCByZXF1aXJlQ29tcG9uZW50fSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdVSUNvdW50ZXInKVxuQG1lbnUoJyoqQXBwL1VJL1VJQ291bnRlcicpXG5AcmVxdWlyZUNvbXBvbmVudChMYWJlbClcbmV4cG9ydCBjbGFzcyBDb2Nvc1VJQ291bnRlciBleHRlbmRzIENvbXBvbmVudFxue1xuXHRAcHJvcGVydHkoe3R5cGU6IENDU3RyaW5nfSlcblx0cHVibGljIHByb3BlcnR5OiBzdHJpbmc7XG5cblx0QHByb3BlcnR5KHt0eXBlOiBFbnVtKEZvcm1hdFR5cGUpfSlcblx0cHVibGljIGZvcm1hdHRlcjogRm9ybWF0VHlwZSA9IEZvcm1hdFR5cGUuTm9Gb3JtYXQ7XG5cblx0cHJpdmF0ZSBfbGFiZWw6IExhYmVsO1xuXHRwcml2YXRlIF9zdGF0ZTogR2FtZVN0YXRlID0gaW5qZWN0KEdhbWVTdGF0ZSk7XG5cblx0b25Mb2FkKCk6IHZvaWRcblx0e1xuXHRcdHRoaXMuX2xhYmVsID0gdGhpcy5nZXRDb21wb25lbnQoTGFiZWwpO1xuXHR9XG5cblx0dXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkXG5cdHtcblx0XHRjb25zdCB2YWx1ZTogbnVtYmVyID0gdGhpcy5fc3RhdGUuZ2V0U3RhdGUoKVt0aGlzLnByb3BlcnR5XTtcblx0XHRjb25zdCBmb3JtYXRGdW5jOiAodjogbnVtYmVyKSA9PiBzdHJpbmcgPSBmb3JtYXRIYW5kbGVyc1t0aGlzLmZvcm1hdHRlcl07XG5cblx0XHR0aGlzLl9sYWJlbC5zdHJpbmcgPSBmb3JtYXRGdW5jKHZhbHVlKTtcblx0fVxufSIsIi8qKlxuICogQSB0cmFuc2l0aW9uIGNhbGxiYWNrXG4gKiBAVHlwZVBhcmFtZXRlciBUQ29udGV4dCAtIGEgc3RhdGUgbWFjaGluZSBjb250ZXh0IGNsYXNzLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCB0eXBlIENvbmRpdGlvbkNhbGxCYWNrPFRDb250ZXh0PiA9IChwQ29udGV4dDogVENvbnRleHQpID0+IGJvb2xlYW4gfCBudWxsOyIsImltcG9ydCB7SW5qZWN0aW9uTWFwcGluZywgS2VybmVsQ2xhc3Nlc01hcH0gZnJvbSBcIi4vSW5qZWN0aW9uTWFwcGluZ1wiO1xuaW1wb3J0IHtJSW5qZWN0YWJsZX0gZnJvbSBcIi4vaW50ZXJmYWNlcy9JSW5qZWN0YWJsZVwiO1xuaW1wb3J0IHtDbGFzc30gZnJvbSBcIi4vdHlwZS9UeXBlXCI7XG5pbXBvcnQge0RpY3Rpb25hcnl9IGZyb20gXCIuL3NoYXJlZC9EaWN0aW9uYXJ5XCI7XG5cbmV4cG9ydCBjb25zdCBjbGFzc01hcDogS2VybmVsQ2xhc3Nlc01hcCA9IG5ldyBEaWN0aW9uYXJ5PENsYXNzPElJbmplY3RhYmxlPiwgSW5qZWN0aW9uTWFwcGluZzxJSW5qZWN0YWJsZT4+KCk7IiwiaW1wb3J0IHtVbmlxdWVVdGlsc30gZnJvbSBcIi4uL3V0aWxzL1VuaXF1ZVV0aWxzXCI7XG5pbXBvcnQge0lBc3NvY2lhdGl2ZUFycmF5fSBmcm9tIFwiLi4vLi4vdXRpbHMvQXJyYXlVdGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgRGljdGlvbmFyeTxLZXlUeXBlIGV4dGVuZHMgb2JqZWN0LCBJdGVtVHlwZT5cbntcblx0cHJvdGVjdGVkIG1hcDogSUFzc29jaWF0aXZlQXJyYXk8SXRlbVR5cGU+ID0ge307XG5cblx0cHVibGljIGdldChrZXk6IEtleVR5cGUpOiBJdGVtVHlwZVxuXHR7XG5cdFx0Y29uc3QgdGVtcElkOiBzdHJpbmcgPSBVbmlxdWVVdGlscy5nZXRPYmplY3RVbmlxdWVJZChrZXkpO1xuXHRcdHJldHVybiB0aGlzLm1hcFt0ZW1wSWRdO1xuXHR9XG5cblx0cHVibGljIGFkZChrZXk6IEtleVR5cGUsIGl0ZW06IEl0ZW1UeXBlKTogdm9pZFxuXHR7XG5cdFx0Y29uc3QgdGVtcElkOiBzdHJpbmcgPSBVbmlxdWVVdGlscy5nZXRPYmplY3RVbmlxdWVJZChrZXkpO1xuXHRcdHRoaXMubWFwW3RlbXBJZF0gPSBpdGVtO1xuXHR9XG5cblx0cHVibGljIHJlbW92ZShrZXk6IEtleVR5cGUpOiB2b2lkXG5cdHtcblx0XHRjb25zdCB0ZW1wSWQ6IHN0cmluZyA9IFVuaXF1ZVV0aWxzLmdldE9iamVjdFVuaXF1ZUlkKGtleSk7XG5cdFx0ZGVsZXRlIHRoaXMubWFwW3RlbXBJZF07XG5cdH1cblxuXHRwdWJsaWMgZm9yRWFjaChjYWxsYmFja2ZuOiAodmFsdWU6IEl0ZW1UeXBlKSA9PiB2b2lkKVxuXHR7XG5cdFx0Y29uc3Qga2V5czogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh0aGlzLm1hcCk7XG5cdFx0bGV0IHRlbXBLZXk6IHN0cmluZztcblx0XHRjb25zdCBrZXlzQ291bnQ6IG51bWJlciA9IGtleXMubGVuZ3RoO1xuXHRcdGZvciAobGV0IGtleUluZGV4OiBudW1iZXIgPSAwOyBrZXlJbmRleCA8IGtleXNDb3VudDsga2V5SW5kZXgrKylcblx0XHR7XG5cdFx0XHR0ZW1wS2V5ID0ga2V5c1trZXlJbmRleF07XG5cdFx0XHRjYWxsYmFja2ZuKHRoaXMubWFwW3RlbXBLZXldKTtcblx0XHR9XG5cdH1cblxufVxuIiwiZXhwb3J0IGVudW0gRUNvY29zTm9kZUV2ZW50c1xue1xuXHRBbmltYXRpb25Db21wbGV0ZSA9ICdhbmltYXRpb25Db21wbGV0ZSdcbn0iLCJleHBvcnQgZW51bSBFSXRlbXNDYXRlZ29yeVxue1xuXHRBLCBCLCBDXG59IiwiaW1wb3J0IE5vdmFFQ1MgZnJvbSBcIkBub3ZhLWVuZ2luZS9lY3NcIjtcbmltcG9ydCB7RnJ1aXRJdGVtfSBmcm9tIFwiLi4vdHlwZXMvR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IHtGcnVpdENvbXBvbmVudH0gZnJvbSBcIi4uL2Vjcy9jb21wb25lbnRzL0ZydWl0Q29tcG9uZW50XCI7XG5pbXBvcnQge01vdmVtZW50Q29tcG9uZW50fSBmcm9tIFwiLi4vZWNzL2NvbXBvbmVudHMvTW92ZW1lbnRDb21wb25lbnRcIjtcbmltcG9ydCB7QmFza2V0Q29tcG9uZW50fSBmcm9tIFwiLi4vZWNzL2NvbXBvbmVudHMvQmFza2V0Q29tcG9uZW50XCI7XG5pbXBvcnQge05vZGUsIFVJVHJhbnNmb3JtLCBWZWMzLCB2aWV3fSBmcm9tIFwiY2NcIjtcbmltcG9ydCB7Vmlld0NvbXBvbmVudH0gZnJvbSBcIi4uL2Vjcy9jb21wb25lbnRzL1ZpZXdDb21wb25lbnRcIjtcbmltcG9ydCB7SGl0Q29tcG9uZW50fSBmcm9tIFwiLi4vZWNzL2NvbXBvbmVudHMvSGl0Q29tcG9uZW50XCI7XG5pbXBvcnQge1ByZWZhYk5hbWVzfSBmcm9tIFwiLi4vUHJlZmFiTmFtZXNcIjtcbmltcG9ydCB7UG9zaXRpb25Db21wb25lbnR9IGZyb20gXCIuLi9lY3MvY29tcG9uZW50cy9Qb3NpdGlvbkNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb2Nvc0ZhY3RvcnksIEZsb2F0aW5nTGFiZWxEYXRhfSBmcm9tIFwiLi9Db2Nvc0ZhY3RvcnlcIjtcbmltcG9ydCB7Rm9ybWF0VHlwZX0gZnJvbSBcIi4uL3V0aWxzL0Zvcm1hdFV0aWxzXCI7XG5cbmV4cG9ydCBlbnVtIEVFbnRpdHlJRHNcbntcbiAgICBGbG9hdGluZ0xhYmVsID0gXCJGbG9hdGluZ0xhYmVsXCIsXG4gICAgRnJ1aXQgPSBcIkZydWl0XCIsXG4gICAgQmFza2V0ID0gXCJCYXNrZXRcIlxufVxuXG5leHBvcnQgY2xhc3MgRW50aXRpZXNGYWN0b3J5XG57XG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVGbG9hdGluZ0xhYmVsRW50aXR5KHdvcmxkUG9zaXRpb246IFZlYzMsIHNjb3JlOiBudW1iZXIpOiBOb3ZhRUNTLkVudGl0eVxuICAgIHtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gbmV3IE5vdmFFQ1MuRW50aXR5KCk7XG4gICAgICAgIGVudGl0eS5pZCA9IEVFbnRpdHlJRHMuRmxvYXRpbmdMYWJlbDtcblxuICAgICAgICBjb25zdCB2aWV3Q29tcCA9IGVudGl0eS5wdXRDb21wb25lbnQoVmlld0NvbXBvbmVudDxGbG9hdGluZ0xhYmVsRGF0YT4pXG4gICAgICAgIHZpZXdDb21wLnByZWZhYlBhdGggPSBQcmVmYWJOYW1lcy5JdGVtUG9pbnRzO1xuICAgICAgICB2aWV3Q29tcC5kYXRhID0ge3Njb3JlLCBmb3JtYXR0ZXI6IEZvcm1hdFR5cGUuRmxvYXRpbmdQb2ludHN9O1xuICAgICAgICB2aWV3Q29tcC5mYWN0b3J5RnVuYyA9IENvY29zRmFjdG9yeS5idWlsZEZsb2F0aW5nTGFiZWw7XG4gICAgICAgIGVudGl0eS5wdXRDb21wb25lbnQoUG9zaXRpb25Db21wb25lbnQpLmN1cnJlbnRYID0gd29ybGRQb3NpdGlvbi54O1xuICAgICAgICBlbnRpdHkuZ2V0Q29tcG9uZW50KFBvc2l0aW9uQ29tcG9uZW50KS5jdXJyZW50WSA9IHdvcmxkUG9zaXRpb24ueTtcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUZydWl0RW50aXR5KGZydWl0OiBGcnVpdEl0ZW0sIHNwYXduWm9uZTogTm9kZSk6IE5vdmFFQ1MuRW50aXR5XG4gICAge1xuICAgICAgICBjb25zdCBlbnRpdHkgPSBuZXcgTm92YUVDUy5FbnRpdHkoKTtcbiAgICAgICAgZW50aXR5LmlkID0gRUVudGl0eUlEcy5GcnVpdDtcblxuICAgICAgICBlbnRpdHkucHV0Q29tcG9uZW50KEZydWl0Q29tcG9uZW50KTtcbiAgICAgICAgY29uc3QgZnJ1aXRDb21wb25lbnQgPSBlbnRpdHkuZ2V0Q29tcG9uZW50PEZydWl0Q29tcG9uZW50PihGcnVpdENvbXBvbmVudCk7XG4gICAgICAgIGlmIChmcnVpdENvbXBvbmVudClcbiAgICAgICAge1xuICAgICAgICAgICAgZnJ1aXRDb21wb25lbnQuY2F0ZWdvcnkgPSBmcnVpdC5jYXRlZ29yeTtcbiAgICAgICAgICAgIGZydWl0Q29tcG9uZW50LnR5cGUgPSBmcnVpdC50eXBlO1xuICAgICAgICAgICAgZnJ1aXRDb21wb25lbnQucG9pbnRzID0gZnJ1aXQucG9pbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3Bhd25UcmFuc2Zvcm0gPSBzcGF3blpvbmUuZ2V0Q29tcG9uZW50KFVJVHJhbnNmb3JtKTtcbiAgICAgICAgY29uc3Qgc3Bhd25XaWR0aCA9IHNwYXduVHJhbnNmb3JtID8gc3Bhd25UcmFuc2Zvcm0ud2lkdGggOiB2aWV3LmdldFZpc2libGVTaXplKCkud2lkdGg7XG4gICAgICAgIGNvbnN0IHNwYXduUG9zID0gc3Bhd25ab25lLmdldFdvcmxkUG9zaXRpb24oKTtcbiAgICAgICAgY29uc3QgcmFuZG9tWCA9IHNwYXduUG9zLnggLSBzcGF3bldpZHRoIC8gMiArIE1hdGgucmFuZG9tKCkgKiBzcGF3bldpZHRoO1xuICAgICAgICBjb25zdCBzdGFydFkgPSBzcGF3blBvcy55O1xuXG4gICAgICAgIGVudGl0eS5wdXRDb21wb25lbnQoUG9zaXRpb25Db21wb25lbnQpLmN1cnJlbnRYID0gcmFuZG9tWDtcbiAgICAgICAgZW50aXR5LmdldENvbXBvbmVudChQb3NpdGlvbkNvbXBvbmVudCkuY3VycmVudFkgPSBzdGFydFk7XG4gICAgICAgIGVudGl0eS5wdXRDb21wb25lbnQoTW92ZW1lbnRDb21wb25lbnQpLnZlbG9jaXR5WSA9IC1mcnVpdC5zcGVlZDtcbiAgICAgICAgZW50aXR5LnB1dENvbXBvbmVudChWaWV3Q29tcG9uZW50KS5wcmVmYWJQYXRoID0gYHByZWZhYnMvZnJ1aXRzL3R5cGUke2ZydWl0LmNhdGVnb3J5fS8ke2ZydWl0LnR5cGV9YDtcbiAgICAgICAgZW50aXR5LnB1dENvbXBvbmVudChIaXRDb21wb25lbnQpO1xuXG4gICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVCYXNrZXRFbnRpdHkoKTogTm92YUVDUy5FbnRpdHlcbiAgICB7XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IG5ldyBOb3ZhRUNTLkVudGl0eSgpO1xuICAgICAgICBlbnRpdHkuaWQgPSBFRW50aXR5SURzLkJhc2tldDtcblxuICAgICAgICBlbnRpdHkucHV0Q29tcG9uZW50KEJhc2tldENvbXBvbmVudCk7XG4gICAgICAgIGVudGl0eS5wdXRDb21wb25lbnQoUG9zaXRpb25Db21wb25lbnQpO1xuICAgICAgICBlbnRpdHkucHV0Q29tcG9uZW50KFZpZXdDb21wb25lbnQpLnByZWZhYlBhdGggPSBgcHJlZmFicy9CYXNrZXRgO1xuICAgICAgICBlbnRpdHkucHV0Q29tcG9uZW50KEhpdENvbXBvbmVudCk7XG5cbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG59XG4iLCJleHBvcnQgZW51bSBGb3JtYXRUeXBlXG57XG5cdE5vRm9ybWF0LFxuXHRNTXNzLFxuXHRUb3RhbFBvaW50cyxcblx0RmxvYXRpbmdQb2ludHNcbn1cblxuZXhwb3J0IGNsYXNzIEZvcm1hdFV0aWxzXG57XG5cdHB1YmxpYyBzdGF0aWMgbm9Gb3JtYXQodmFsdWU6IG51bWJlcik6IHN0cmluZ1xuXHR7XG5cdFx0cmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIHRvTU1zcyh2YWx1ZTogbnVtYmVyKTogc3RyaW5nXG5cdHtcblx0XHRpZiAodmFsdWUgPCAwIHx8ICFOdW1iZXIuaXNGaW5pdGUodmFsdWUpKVxuXHRcdHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW5wdXQ6IG11c3QgYmUgYSBub24tbmVnYXRpdmUgZmluaXRlIG51bWJlclwiKTtcblx0XHR9XG5cblx0XHRjb25zdCBtbSA9IE1hdGguZmxvb3IodmFsdWUgLyA2MCk7XG5cdFx0Y29uc3Qgc3MgPSBNYXRoLmZsb29yKHZhbHVlICUgNjApO1xuXG5cdFx0cmV0dXJuIChtbSA8IDEwID8gXCIwXCIgOiBcIlwiKSArIG1tICsgXCI6XCIgKyAoc3MgPCAxMCA/IFwiMFwiIDogXCJcIikgKyBzcztcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgdG9Ub3RhbFBvaW50cyh2YWx1ZTogbnVtYmVyKTogc3RyaW5nXG5cdHtcblx0XHRyZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgdG9GbG9hdGluZ1BvaW50cyh2YWx1ZTogbnVtYmVyKTogc3RyaW5nXG5cdHtcblx0XHRyZXR1cm4gYCske3ZhbHVlLnRvU3RyaW5nKCl9YDtcblx0fVxufVxuXG5leHBvcnQgY29uc3QgZm9ybWF0SGFuZGxlcnMgPSB7XG5cdFtGb3JtYXRUeXBlLk5vRm9ybWF0XTogRm9ybWF0VXRpbHMubm9Gb3JtYXQsXG5cdFtGb3JtYXRUeXBlLk1Nc3NdOiBGb3JtYXRVdGlscy50b01Nc3MsXG5cdFtGb3JtYXRUeXBlLlRvdGFsUG9pbnRzXTogRm9ybWF0VXRpbHMudG9Ub3RhbFBvaW50cyxcblx0W0Zvcm1hdFR5cGUuRmxvYXRpbmdQb2ludHNdOiBGb3JtYXRVdGlscy50b0Zsb2F0aW5nUG9pbnRzXG59IiwiaW1wb3J0IE5vdmFFQ1MgZnJvbSBcIkBub3ZhLWVuZ2luZS9lY3NcIjtcbmltcG9ydCB7RUl0ZW1zQ2F0ZWdvcnl9IGZyb20gXCIuLi8uLi90eXBlcy9FSXRlbXNDYXRlZ29yeVwiO1xuXG5leHBvcnQgY2xhc3MgRnJ1aXRDb21wb25lbnQgaW1wbGVtZW50cyBOb3ZhRUNTLkNvbXBvbmVudFxue1xuICAgIHN0YXRpYyB0YWc6IHN0cmluZyA9IFwiRnJ1aXRDb21wb25lbnRcIjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgY2F0ZWdvcnk6IEVJdGVtc0NhdGVnb3J5ID0gRUl0ZW1zQ2F0ZWdvcnkuQSxcbiAgICAgICAgcHVibGljIHR5cGU6IHN0cmluZyA9IFwiXCIsXG4gICAgICAgIHB1YmxpYyBwb2ludHM6IG51bWJlciA9IDBcbiAgICApXG4gICAge1xuICAgIH1cbn1cbiIsImltcG9ydCBOb3ZhRUNTIGZyb20gXCJAbm92YS1lbmdpbmUvZWNzXCI7XG5pbXBvcnQge2luamVjdH0gZnJvbSBcIi4uL2luamVjdHMvaW5qZWN0XCI7XG5pbXBvcnQge0dhbWVTdGF0ZX0gZnJvbSBcIi4uL3N0YXRlL0dhbWVTdGF0ZVwiO1xuaW1wb3J0IHtHYW1lQ29uZmlnfSBmcm9tIFwiLi4vdHlwZXMvR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IHtTcGF3bkZydWl0U3lzdGVtfSBmcm9tIFwiLi9zeXN0ZW1zL1NwYXduRnJ1aXRTeXN0ZW1cIjtcbmltcG9ydCB7Vmlld01hbmFnZW1lbnRTeXN0ZW19IGZyb20gXCIuL3N5c3RlbXMvVmlld01hbmFnZW1lbnRTeXN0ZW1cIjtcbmltcG9ydCB7QmFza2V0TW92ZW1lbnRTeXN0ZW19IGZyb20gXCIuL3N5c3RlbXMvQmFza2V0TW92ZW1lbnRTeXN0ZW1cIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xuaW1wb3J0IHtCYXNrZXRWU0ZydWl0Q29sbGlzaW9uU3lzdGVtfSBmcm9tIFwiLi9zeXN0ZW1zL0Jhc2tldFZTRnJ1aXRDb2xsaXNpb25TeXN0ZW1cIjtcbmltcG9ydCB7U2NvcmVzU3lzdGVtfSBmcm9tIFwiLi9zeXN0ZW1zL1Njb3Jlc1N5c3RlbVwiO1xuaW1wb3J0IHtJdGVtc1Bvb2x9IGZyb20gXCIuLi9wb29sL0l0ZW1zUG9vbFwiO1xuaW1wb3J0IHtNb3ZlbWVudHNTeXN0ZW19IGZyb20gXCIuL3N5c3RlbXMvTW92ZW1lbnRzU3lzdGVtXCI7XG5pbXBvcnQge0tpbGxGcnVpdFN5c3RlbX0gZnJvbSBcIi4vc3lzdGVtcy9LaWxsRnJ1aXRTeXN0ZW1cIjtcbmltcG9ydCB7S2lsbFZpZXdTeXN0ZW19IGZyb20gXCIuL3N5c3RlbXMvS2lsbFZpZXdTeXN0ZW1cIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVFbmdpbmUgZXh0ZW5kcyBOb3ZhRUNTLkVuZ2luZVxue1xuXHRwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEdhbWVFbmdpbmU7XG5cdHByaXZhdGUgX2dhbWVTdGF0ZTogR2FtZVN0YXRlID0gaW5qZWN0KEdhbWVTdGF0ZSk7XG5cdHByaXZhdGUgcmVhZG9ubHkgX2dhbWVTcGVlZDogbnVtYmVyID0gMTtcblx0cHJpdmF0ZSBfdGltZSA9IDA7XG5cdHByaXZhdGUgX3N5c3RlbXNMaXN0OiBOb3ZhRUNTLlN5c3RlbVtdID0gW107XG5cdHByaXZhdGUgX2NvbmZpZzogR2FtZUNvbmZpZyB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIF92aWV3UG9vbE1hcDogTWFwPHN0cmluZywgSXRlbXNQb29sPiA9IG5ldyBNYXA8c3RyaW5nLCBJdGVtc1Bvb2w+KCk7IC8vIHByZWZhYiBwYXRoIC8gcG9vbFxuXG5cdGNvbnN0cnVjdG9yKClcblx0e1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBHYW1lRW5naW5lXG5cdHtcblx0XHRpZiAoIUdhbWVFbmdpbmUuX2luc3RhbmNlKVxuXHRcdHtcblx0XHRcdEdhbWVFbmdpbmUuX2luc3RhbmNlID0gbmV3IEdhbWVFbmdpbmUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIEdhbWVFbmdpbmUuX2luc3RhbmNlO1xuXHR9XG5cblx0cHVibGljIGdldCBjb25maWcoKTogR2FtZUNvbmZpZ1xuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcblx0fVxuXG5cdHB1YmxpYyBpbml0KGNvbmZpZzogR2FtZUNvbmZpZyk6IHZvaWRcblx0e1xuXHRcdHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblx0XHR0aGlzLl9pbml0U3lzdGVtcygpO1xuXHRcdHRoaXMuX2dhbWVTdGF0ZS5zdGFydFRpbWUoY29uZmlnLnRpbWUpO1xuXHR9XG5cblx0cHVibGljIGNsZWFuKCk6IHZvaWRcblx0e1xuXHRcdHRoaXMuX3N5c3RlbXNMaXN0LmZvckVhY2goc3lzdGVtID0+IHRoaXMucmVtb3ZlU3lzdGVtKHN5c3RlbSkpO1xuXHRcdHRoaXMuZW50aXRpZXMuZm9yRWFjaChlbnRpdHkgPT4gdGhpcy5yZW1vdmVFbnRpdHkoZW50aXR5KSk7XG5cdFx0dGhpcy5fZ2FtZVN0YXRlLmNsZWFuKCk7XG5cdH1cblxuXHR1cGRhdGUoZHQ6IG51bWJlcik6IGJvb2xlYW5cblx0e1xuXHRcdGNvbnN0IG1heEZQUyA9IDYwO1xuXHRcdGNvbnN0IG1pbkZQUyA9IDMwO1xuXHRcdGNvbnN0IGZyYW1lVGltZSA9IDEgLyBtYXhGUFM7XG5cblx0XHR0aGlzLl90aW1lICs9IGR0ICogdGhpcy5fZ2FtZVNwZWVkO1xuXHRcdGxldCBjb3VudCA9IE1hdGgubWluKFxuXHRcdFx0TWF0aC5mbG9vcih0aGlzLl90aW1lIC8gZnJhbWVUaW1lKSxcblx0XHRcdG1heEZQUyAvIG1pbkZQU1xuXHRcdCk7XG5cdFx0aWYgKHRoaXMuX3RpbWUgLyBmcmFtZVRpbWUgPiAwLjk5KVxuXHRcdHtcblx0XHRcdGNvdW50ID0gY291bnQgPCAxID8gMSA6IGNvdW50O1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHRzdXBlci51cGRhdGUoVXRpbHMucm91bmRUbyhmcmFtZVRpbWUgKiAxMDAwLCA1KSk7XG5cdFx0XHRcdHRoaXMuX3RpbWUgLT0gZnJhbWVUaW1lO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuX2dhbWVTdGF0ZS5zcGVuZFRpbWUoZnJhbWVUaW1lICogY291bnQpO1xuXG5cdFx0cmV0dXJuIHRoaXMuX2dhbWVTdGF0ZS5nZXRTdGF0ZSgpLnRpbWVMZWZ0ID49IDE7XG5cdH1cblxuXHRwcml2YXRlIF9pbml0U3lzdGVtcygpOiB2b2lkXG5cdHtcblx0XHR0aGlzLl9zeXN0ZW1zTGlzdCA9IFtcblx0XHRcdG5ldyBTcGF3bkZydWl0U3lzdGVtKCksXG5cdFx0XHRuZXcgTW92ZW1lbnRzU3lzdGVtKCksXG5cdFx0XHRuZXcgVmlld01hbmFnZW1lbnRTeXN0ZW0odGhpcy5fdmlld1Bvb2xNYXApLFxuXHRcdFx0bmV3IEJhc2tldFZTRnJ1aXRDb2xsaXNpb25TeXN0ZW0oKSxcblx0XHRcdG5ldyBTY29yZXNTeXN0ZW0oKSxcblx0XHRcdG5ldyBCYXNrZXRNb3ZlbWVudFN5c3RlbSgpLFxuXHRcdFx0bmV3IEtpbGxGcnVpdFN5c3RlbSgpLFxuXHRcdFx0bmV3IEtpbGxWaWV3U3lzdGVtKClcblx0XHRdO1xuXG5cdFx0dGhpcy5fc3lzdGVtc0xpc3QuZm9yRWFjaChzeXN0ZW0gPT4gdGhpcy5hZGRTeXN0ZW0oc3lzdGVtKSk7XG5cdH1cbn0iLCJpbXBvcnQge0Fic3RyYWN0QmFzZVN0YXRlfSBmcm9tIFwiLi4vc3RhdGVNYXR0ZXIvQWJzdHJhY3QvQWJzdHJhY3RCYXNlU3RhdGVcIjtcbmltcG9ydCB7QXBwQ29udGV4dH0gZnJvbSBcIi4uL0FwcENvbnRleHRcIjtcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiY2NcIjtcbmltcG9ydCB7R2FtZUVuZ2luZX0gZnJvbSBcIi4uLy4uL2Vjcy9HYW1lRW5naW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lT3ZlclN0YXRlIGV4dGVuZHMgQWJzdHJhY3RCYXNlU3RhdGU8QXBwQ29udGV4dD5cbntcblx0cHVibGljIEV4ZWN1dGUoKVxuXHR7XG5cdFx0dGhpcy5fY29udGV4dC50b2FzdExhYmVsLnN0cmluZyA9IHRoaXMuX2NvbnRleHQubG9jYWxlLmdldChcImdhbWVfb3ZlclwiKTtcblx0XHR0aGlzLl9jb250ZXh0LnN0YXJ0ZXJOb2RlLm9uKEJ1dHRvbi5FdmVudFR5cGUuQ0xJQ0ssICgpID0+XG5cdFx0e1xuXHRcdFx0dGhpcy5fY29udGV4dC5zdGFydGVyTm9kZS5vZmYoQnV0dG9uLkV2ZW50VHlwZS5DTElDSyk7XG5cdFx0XHRHYW1lRW5naW5lLmluc3RhbmNlLmNsZWFuKCk7XG5cdFx0XHRzdXBlci5FeGVjdXRlKCk7XG5cdFx0fSk7XG5cdH1cbn0iLCJpbXBvcnQge0lHYW1lU3RhdGUsIElHYW1lU3RhdGVSZWFkZXIsIElHYW1lU3RhdGVXcml0ZXJ9IGZyb20gJy4uL2ludGVyZmFjZXMvSUdhbWVTdGF0ZSc7XG5pbXBvcnQge3NpbmdsZXRvbn0gZnJvbSBcIi4uL2luamVjdHMvZGVjb3JhdG9ycy9zaW5nbGV0b25cIjtcblxuQHNpbmdsZXRvbigpXG5leHBvcnQgY2xhc3MgR2FtZVN0YXRlIGltcGxlbWVudHMgSUdhbWVTdGF0ZVJlYWRlciwgSUdhbWVTdGF0ZVdyaXRlclxue1xuXHRwcml2YXRlIF90aW1lTGVmdDogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSBfc2NvcmU6IG51bWJlciA9IDA7XG5cdHByaXZhdGUgX2Jhc2tldFRhcmdldFg6IG51bWJlciA9IDA7XG5cblx0cHVibGljIHNldEJhc2tldFRhcmdldFBvc2l0aW9uKHg6IG51bWJlcik6IHZvaWRcblx0e1xuXHRcdHRoaXMuX2Jhc2tldFRhcmdldFggPSB4O1xuXHRcdC8vY29uc29sZS5sb2coXCJzZXRCYXNrZXRUYXJnZXRQb3NpdGlvblwiLCB0aGlzLl9iYXNrZXRUYXJnZXRYKTtcblx0fVxuXG5cdHB1YmxpYyBhZGRTY29yZShwb2ludHM6IG51bWJlcik6IHZvaWRcblx0e1xuXHRcdHRoaXMuX3Njb3JlICs9IHBvaW50cztcblx0fVxuXG5cdHB1YmxpYyBzdGFydFRpbWUodGltZUxlZnQ6IG51bWJlcik6IHZvaWRcblx0e1xuXHRcdHRoaXMuX3RpbWVMZWZ0ID0gdGltZUxlZnQ7XG5cdH1cblxuXHRwdWJsaWMgc3BlbmRUaW1lKHRpbWU6IG51bWJlcik6IHZvaWRcblx0e1xuXHRcdHRoaXMuX3RpbWVMZWZ0IC09IHRpbWU7XG5cdH1cblxuXHRwdWJsaWMgZ2V0U3RhdGUoKTogSUdhbWVTdGF0ZVxuXHR7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRpbWVMZWZ0OiB0aGlzLl90aW1lTGVmdCxcblx0XHRcdHNjb3JlOiB0aGlzLl9zY29yZSxcblx0XHRcdGJhc2tldFBvc2l0aW9uWDogdGhpcy5fYmFza2V0VGFyZ2V0WFxuXHRcdH07XG5cdH1cblxuXHRwdWJsaWMgY2xlYW4oKTogdm9pZFxuXHR7XG5cdFx0dGhpcy5fdGltZUxlZnQgPSAwO1xuXHRcdHRoaXMuX3Njb3JlID0gMDtcblx0XHR0aGlzLl9iYXNrZXRUYXJnZXRYID0gMDtcblx0fVxufVxuIiwiaW1wb3J0IE5vdmFFQ1MgZnJvbSBcIkBub3ZhLWVuZ2luZS9lY3NcIjtcbmltcG9ydCB7VUlUcmFuc2Zvcm19IGZyb20gXCJjY1wiO1xuaW1wb3J0IHtJS2lsbGFibGVQcm9wc30gZnJvbSBcIi4vSUtpbGxhYmxlXCI7XG5cbmV4cG9ydCBjbGFzcyBIaXRDb21wb25lbnQgaW1wbGVtZW50cyBOb3ZhRUNTLkNvbXBvbmVudCwgSUtpbGxhYmxlUHJvcHNcbntcbiAgICBzdGF0aWMgdGFnOiBzdHJpbmcgPSBcIkhpdENvbXBvbmVudFwiO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBoaXRUcmFuc2Zvcm06IFVJVHJhbnNmb3JtIHwgbnVsbCA9IG51bGwsXG4gICAgICAgIHB1YmxpYyBraWxsZWQ6IGJvb2xlYW4gPSBmYWxzZVxuICAgIClcbiAgICB7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtJQmFzZVRyYW5zaXRpb259IGZyb20gXCIuL0lCYXNlVHJhbnNpdGlvblwiO1xuXG4vKipcbiAqIEJhc2UgaW50ZXJmYWNlIGZvciBtYWNoaW5lIHN0YXRlXG4gKiBAVHlwZVBhcmFtZXRlciBUQ29udGV4dCAtIGEgc3RhdGUgbWFjaGluZSBjb250ZXh0IGNsYXNzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElCYXNlU3RhdGU8VENvbnRleHQ+XG57XG5cdC8qKlxuXHQgKiBUaGUgbWV0aG9kIHRoYXQgc3RhdGUgbWFjaGluZSBjYWxsaW5nIGJlZm9yZSBlbnRlcmluZyB0aGUgc3RhdGVcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRCZWZvcmVFbnRlcigpOiB2b2lkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbWV0aG9kIHRoYXQgc3RhdGUgbWFjaGluZSBjYWxsaW5nIG9uY2UgdGhpcyBzdGF0ZSBoYXMgYmVlblxuXHQgKiBzZXQgYnV0IGJlZm9yZSB0aGUgbWFpbiBleGVjdXRpb25cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRBZnRlckVudGVyKCk6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBtZXRob2QgdGhhdCBzdGF0ZSBtYWNoaW5lIGNhbGxpbmcgb25jZSB0aGlzIHN0YXRlIGhhcyBiZWVuIHNldCBhcyB0aGVcblx0ICogY3VycmVudCBzdGF0ZSBhbmQgY2FsbGJhY2tzIEJlZm9yZUVudGVyIGFuZCBBZnRlckVudGVyIGZpbmlzaGVkLlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdEV4ZWN1dGUoKTogdm9pZDtcblxuXHQvKipcblx0ICogVGhlIG1ldGhvZCB0aGF0IHN0YXRlIG1hY2hpbmUgY2FsbGluZyByaWdodCBiZWZvcmUgY2hhbmdpbmdcblx0ICogdGhlIGN1cnJlbnQgc3RhdGVcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRCZWZvcmVFeGl0KCk6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBtZXRob2QgdGhhdCBzdGF0ZSBtYWNoaW5lIGNhbGxpbmcgcmlnaHQgYWZ0ZXIgY2hhbmdpbmcgdGhlIGN1cnJlbnQgc3RhdGVcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRBZnRlckV4aXQoKTogdm9pZDtcblxuXHQvKipcblx0ICogQWRkIHRyYW5zaXRpb24gdG8gdGhlIGxpc3Qgb2YgdHJhbnNpdGlvbnNcblx0ICogQHBhcmFtIHBUcmFuc2l0aW9uIC0gQSB0cmFuc2l0aW9uIG9iamVjdCB0byBzYXZlIGluIHRoZSBsaXN0IG9mIHN0YXRlIHRyYW5zaXRpb25zXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0QWRkVHJhbnNpdGlvbihwVHJhbnNpdGlvbjogSUJhc2VUcmFuc2l0aW9uPFRDb250ZXh0Pik6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIFJlbW92ZSBhIHRyYW5zaXRpb24gb2JqZWN0IGZyb20gdGhlIGxpc3Qgb2Ygc3RhdGUgdHJhbnNpdGlvbnNcblx0ICogQHBhcmFtIHBUcmFuc2l0aW9uIC0gQSB0cmFuc2l0aW9uIG9iamVjdCB0byByZW1vdmUgZnJvbSB0aGUgbGlzdCBvZiBzdGF0ZSB0cmFuc2l0aW9uc1xuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdFJlbW92ZVRyYW5zaXRpb24ocFRyYW5zaXRpb246IElCYXNlVHJhbnNpdGlvbjxUQ29udGV4dD4pOiB2b2lkO1xuXG5cdC8qKlxuXHQgKiBBIGxpc3Qgb2YgdHJhbnNpdGlvbnMgZm9yIGN1cnJlbnQgc3RhdGVcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRnZXQgVHJhbnNpdGlvbnMoKTogQXJyYXk8SUJhc2VUcmFuc2l0aW9uPFRDb250ZXh0Pj47XG59IiwiaW1wb3J0IHtJQmFzZVN0YXRlfSBmcm9tIFwiLi9JQmFzZVN0YXRlXCI7XG5pbXBvcnQge0NvbmRpdGlvbkNhbGxCYWNrfSBmcm9tIFwiLi9Db25kaXRpb25DYWxsQmFja1wiO1xuaW1wb3J0IHtUcmFuc2l0aW9uQmVoYXZpb3JFbnVtfSBmcm9tIFwiLi4vRW51bS9UcmFuc2l0aW9uQmVoYXZpb3VyRW51bVwiO1xuaW1wb3J0IHtJQmFzZVRyYW5zaXRpb259IGZyb20gXCIuL0lCYXNlVHJhbnNpdGlvblwiO1xuaW1wb3J0IHtJQWJzdHJhY3RFdmVudERpc3BhdGNoZXJ9IGZyb20gXCIuLi9BYnN0cmFjdC9BYnN0cmFjdEV2ZW50RGlzcGF0Y2hlclwiO1xuXG4vKipcbiAqIEJhc2Ugc3RhdGUgbWFjaGluZSBpbnRlcmZhY2VcbiAqIEBUeXBlUGFyYW1ldGVyIFRDb250ZXh0IC0gYSBzdGF0ZSBtYWNoaW5lIGNvbnRleHQgY2xhc3MuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQmFzZVN0YXRlTWFjaGluZTxUQ29udGV4dCwgVEV2ZW50PiBleHRlbmRzIElBYnN0cmFjdEV2ZW50RGlzcGF0Y2hlcjxURXZlbnQ+XG57XG5cdC8qKlxuXHQgKiBTZXQgdGhlIGluaXRpYWwgc3RhdGUgYnkgaW5kZXggb2YgdGhlIHN0YXRlIGluIHRoZSBsaXN0IG9mIHN0YXRlcy5cblx0ICogQHBhcmFtIHBTdGF0ZUluZGV4IC0gQW4gaW5kZXggb2YgdGhlIHN0YXRlIGluIHRoZSBsaXN0IG9mIHN0YXRlc1xuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdFNldEluaXRpYWxTdGF0ZUJ5SW5kZXgocFN0YXRlSW5kZXg6IG51bWJlcik6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgaW5pdGlhbCBzdGF0ZSBieSBpbnN0YW5jZSBvZiB0aGUgc3RhdGUuXG5cdCAqIEBwYXJhbSBwU3RhdGUgLSBBbiBpbnN0YW5jZSBvZiBzdGF0ZVxuXHQgKiBAcGFyYW0gcFJlc2V0Q29udGV4dERhdGEgLSBJcyBpdCBuZWNlc3NhcnkgdG8gcmVzZXQgYSBzdGF0ZSBtYWNoaW5lIGNvbnRleHQgZGF0YS5cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRTZXRJbml0aWFsU3RhdGUocFN0YXRlOiBJQmFzZVN0YXRlPFRDb250ZXh0PiwgcFJlc2V0Q29udGV4dERhdGE6IGJvb2xlYW4pOiB2b2lkO1xuXG5cdC8qKlxuXHQgKiBUaGUgcHJvcGVydHkgdGhhdCBjb250YWlucyBzdGF0ZSBtYWNoaW5lIGN1cnJlbnQgY29udGV4dC5cblx0ICogQHBhcmFtIHBDb250ZXh0IC0gQSBzdGF0ZSBtYWNoaW5lIGNvbnRleHRcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRzZXQgQ29udGV4dChwQ29udGV4dDogVENvbnRleHQgfCBudWxsKTtcblxuXHQvKipcblx0ICogR2V0dGVyIG1ldGhvZCBvZiB0aGUgcHJvcGVydHkgdGhhdCBjb250YWlucyBzdGF0ZSBtYWNoaW5lIGN1cnJlbnQgY29udGV4dC5cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRnZXQgQ29udGV4dCgpOiBUQ29udGV4dCB8IG51bGw7XG5cblx0LyoqXG5cdCAqIE1vdmUgc3RhdGUgbWFjaGluZSB0byB0aGUgbmV4dCBzdGF0ZVxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdE1vdmVOZXh0KCk6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIEFkZCBzdGF0ZSB0byB0aGUgc3RhdGUgbWFjaGluZSBjb2xsZWN0aW9uLlxuXHQgKiBAcGFyYW0gcFN0YXRlIC0gQSBzdGF0ZSBvYmplY3QuXG5cdCAqIEBwYXJhbSBwU2V0QXNJbml0aWFsIC0gU2V0IGEgbmV3bHkgYWRkZWQgc3RhdGUgYXMgaW5pdGlhbCBvbmVcblx0ICogQHJldHVybnMgQXJyYXkgc3RhdGUgb3JkZXIgaW4gdGhlIGxpc3Qgb2Ygc3RhdGVzLlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdEFkZFN0YXRlKHBTdGF0ZTogSUJhc2VTdGF0ZTxUQ29udGV4dD4sIHBTZXRBc0luaXRpYWw6IGJvb2xlYW4pOiBudW1iZXI7XG5cblx0LyoqXG5cdCAqIFJlbW92ZSBhIHN0YXRlIGZyb20gdGhlIGxpc3Qgb2Ygc3RhdGVzLlxuXHQgKiBAcGFyYW0gcFN0YXRlIC0gQSBzdGF0ZSBvYmplY3QgdG8gcmVtb3ZlLlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdFJlbW92ZVN0YXRlKHBTdGF0ZTogSUJhc2VTdGF0ZTxUQ29udGV4dD4pOiB2b2lkO1xuXG5cdC8qKlxuXHQgKiBDaGVjayB0aGUgY3VycmVudCBzdGF0ZSBpbiBzdGF0ZSBtYWNoaW5lIGFuZCByZXR1cm4gdHJ1ZSBpbiBjYXNlIGlmIHRoaXMgc3RhdGUgaXMgaW5pdGlhbCBvbmUuXG5cdCAqIEByZXR1cm5zIERvZXMgdGhlIGN1cnJlbnQgc3RhdGUgaXMgaW5pdGlhbCBvbmUgb3Igbm90LlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdEluSW5pdGlhbFN0YXRlKCk6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIFJlc2V0IHRoZSBwcm9jZXNzaW5nIHN0YXRlIG9mIHRoZSBzdGF0ZSBtYWNoaW5lIHRvIGluaXRpYWwgb25lXG5cdCAqIGFuZCBvcHRpb25hbGx5IHJlc2V0IHRoZSBjb250ZXh0IG9mIHRoZSBzdGF0ZSBtYWNoaW5lLlxuXHQgKiBAcGFyYW0gcFJlc2V0VGhlQ29udGV4dCAtXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0UmVzZXQocFJlc2V0VGhlQ29udGV4dDogYm9vbGVhbik6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIFN0YXJ0IHRoZSBzdGF0ZSBtYWNoaW5lIHByb2Nlc3NpbmcgY2hhaW4uXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0UnVuKCk6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIENyZWF0ZSB0cmFuc2l0aW9uIGJldHdlZW4gc3RhdGVzIGluIHRoZSBzdGF0ZSBtYWNoaW5lLlxuXHQgKiBAcGFyYW0gcEZyb21TdGF0ZSAtIEEgc3RhdGUgZnJvbSB3aGljaCB0aGlzIHRyYW5zaXRpb24gd2lsbCBzdGFydC5cblx0ICogQHBhcmFtIHBUb1N0YXRlIC0gQSB0YXJnZXQgc3RhdGUgdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHN0YXRlIG1hY2hpbmUuXG5cdCAqIEBwYXJhbSBwQ29uZGl0aW9uIC0gQSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIGluIG9yZGVyIHRvIGFuYWx5c2UgdGhlXG5cdCAqICAgICAgICAgICAgICAgICAgICAgcG9zc2liaWxpdHkgdG8gbW92ZSB0aHJvdWdoIHRoZSB0cmFuc2l0aW9uXG5cdCAqIEBwYXJhbSBwT3JkZXIgLSBUaGUgZXZhbHVhdGlvbiBvcmRlciB0aGF0IGRlZmluZXMgd2hhdCB0cmFuc2l0aW9uXG5cdCAqICAgICAgICAgICAgICAgICB3aWxsIGJlIGFuYWx5emVkIGZpcnN0LlxuXHQgKiBAcGFyYW0gcEJlaGF2aW9yRW51bUFmdGVyVHJhbnNpdGlvbiAtIERlZmluZXMgc3RhdGUgbWFjaGluZSBiZWhhdmlvciBhZnRlciB0aGUgY29tcGxldGlvbiB0aGUgdHJhbnNpdGlvbi5cblx0ICogSW4gY2FzZSBpZiB0cnVlIC0gc3RhdGUgbWFjaGluZSB3aWxsIG5vdCBjYWxsIEV4ZWN1dGUgY2FsbGJhY2sgYWZ0ZXIgdGhlIHRyYW5zaXRpb24uXG5cdCAqIEByZW1hcmtzIEluIHNwaXRlIG9mIHRoZSB2YWx1ZSBvZiB0aGUgcEJlaGF2aW9yRW51bUFmdGVyVHJhbnNpdGlvbiBhbGwgdHJhbnNpdGlvbiBjYWxsYmFja3Mgc3VjaCBhcyBCZWZvcmVFbnRlcixcblx0ICogQmVmb3JlRXhpdCwgZXRjIHdpbGwgYmUgY2FsbGVkLlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdEFkZFRyYW5zaXRpb24ocEZyb21TdGF0ZTogSUJhc2VTdGF0ZTxUQ29udGV4dD4sXG5cdFx0XHRcdCAgcFRvU3RhdGU6IElCYXNlU3RhdGU8VENvbnRleHQ+LFxuXHRcdFx0XHQgIHBDb25kaXRpb246IENvbmRpdGlvbkNhbGxCYWNrPFRDb250ZXh0Pixcblx0XHRcdFx0ICBwT3JkZXI6IG51bWJlcixcblx0XHRcdFx0ICBwQmVoYXZpb3JFbnVtQWZ0ZXJUcmFuc2l0aW9uOiBUcmFuc2l0aW9uQmVoYXZpb3JFbnVtKTogSUJhc2VUcmFuc2l0aW9uPFRDb250ZXh0PjtcblxuXHQvKipcblx0ICogUmVtb3ZlIHRyYW5zaXRpb24gZnJvbSB0aGUgbGlzdCBvZiB0cmFuc2l0aW9ucyBhbmQgcmVsYXRlZCBzdGF0ZXMuXG5cdCAqIEBwYXJhbSBwVHJhbnNpdGlvbiAtIEFuIG9iamVjdCBvZiB0cmFuc2l0aW9uIHRvIHJlbW92ZS5cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRSZW1vdmVUcmFuc2l0aW9uKHBUcmFuc2l0aW9uOiBJQmFzZVRyYW5zaXRpb248VENvbnRleHQ+KTogdm9pZDtcbn0iLCJpbXBvcnQge0lCYXNlU3RhdGV9IGZyb20gXCIuL0lCYXNlU3RhdGVcIjtcbmltcG9ydCB7Q29uZGl0aW9uQ2FsbEJhY2t9IGZyb20gXCIuL0NvbmRpdGlvbkNhbGxCYWNrXCI7XG5pbXBvcnQge1RyYW5zaXRpb25CZWhhdmlvckVudW19IGZyb20gXCIuLi9FbnVtL1RyYW5zaXRpb25CZWhhdmlvdXJFbnVtXCI7XG5cbi8qKlxuICogQmFzZSBpbnRlcmZhY2UgZm9yIHNpbXBsZSB0cmFuc2l0aW9uIGJldHdlZW4gdHdvIHN0YXRlc1xuICogQFR5cGVQYXJhbWV0ZXIgVENvbnRleHQgLSBhIHN0YXRlIG1hY2hpbmUgY29udGV4dCBjbGFzcy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgaW50ZXJmYWNlIElCYXNlVHJhbnNpdGlvbjxUQ29udGV4dD5cbntcblx0LyoqXG5cdCAqIEEgc2V0dGVyIGZvciBjaGVja2luZyBvcmRlciBpbiBjYXNlIG9mIG11bHRpcGxlIHRyYW5zaXRpb25zLlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdGdldCBPcmRlcigpOiBudW1iZXI7XG5cblx0LyoqXG5cdCAqIEEgc2V0dGVyIGZvciBjaGVja2luZyBvcmRlciBpbiBjYXNlIG9mIG11bHRpcGxlIHRyYW5zaXRpb25zLlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdHNldCBPcmRlcihDU1NGb250UGFsZXR0ZVZhbHVlc1J1bGU6IG51bWJlcik7XG5cblx0LyoqXG5cdCAqIEEgZ2V0dGVyIGZvciBhIHN0YXRlIHRoYXQgc3RhdGUgbWFjaGluZSB3aWxsIHVzZSB0byBjaGFuZ2UgPGI+ZnJvbTwvYj4uXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0Z2V0IEZyb21TdGF0ZSgpOiBJQmFzZVN0YXRlPFRDb250ZXh0PjtcblxuXHQvKipcblx0ICogQSBzZXR0ZXIgZm9yIHN0YXRlIHRoYXQgc3RhdGUgbWFjaGluZSB3aWxsIHVzZSB0byBjaGFuZ2UgPGI+ZnJvbTwvYj4uXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0c2V0IEZyb21TdGF0ZShwU3RhdGU6IElCYXNlU3RhdGU8VENvbnRleHQ+KTtcblxuXHQvKipcblx0ICogQSBzZXR0ZXIgZm9yIGEgc3RhdGUgdGhhdCBzdGF0ZSBtYWNoaW5lIHdpbGwgdXNlIHRvIGNoYW5nZSA8Yj50bzwvYj4uXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0Z2V0IFRvU3RhdGUoKTogSUJhc2VTdGF0ZTxUQ29udGV4dD47XG5cblx0LyoqXG5cdCAqIEEgc2V0dGVyIGZvciBhIHN0YXRlIHRoYXQgc3RhdGUgbWFjaGluZSB3aWxsIHVzZSB0byBjaGFuZ2UgPGI+dG88L2I+LlxuXHQgKiBAcGFyYW0gcFN0YXRlIC0gQSB0YXJnZXQgc3RhdGUuXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0c2V0IFRvU3RhdGUocFN0YXRlOiBJQmFzZVN0YXRlPFRDb250ZXh0Pik7XG5cblx0LyoqXG5cdCAqIFJlbW92ZSB0cmFuc2l0aW9uIGxpbmtzIGZyb20gdGhlIHN0YXRlcyBpbnNpZGUuXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0UmVtb3ZlRnJvbVN0YXRlcygpOiB2b2lkO1xuXG5cdC8qKlxuXHQgKiBJcyB0aGlzIHRyYW5zaXRpb24gYWN0aXZlXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0Z2V0IElzQWN0aXZlKCk6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIElzIHRoaXMgdHJhbnNpdGlvbiBhY3RpdmVcblx0ICogQHBhcmFtIHBWYWx1ZSAtIElzIGFjdGl2ZSBzdGF0ZSBvZiB0cmFuc2l0aW9uXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0c2V0IElzQWN0aXZlKHBWYWx1ZTogYm9vbGVhbik7XG5cblx0LyoqXG5cdCAqIERlZmluZSBwb3NzaWJpbGl0eSB0byBleGVjdXRlIHRyYW5zaXRpb24gYmV0d2VlbiBkZWZpbmVkIHN0YXRlc1xuXHQgKiBAcGFyYW0gcENvbnRleHQgLSBBIHN0YXRlIG1hY2hpbmUgY29udGV4dFxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdENhbkV4ZWN1dGUocENvbnRleHQ6IFRDb250ZXh0IHwgbnVsbCk6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIEEgZ2V0dGVyIGZvciBhbiBhY3Rpb24gdGhhdCBkZWZpbmVzIGEgcG9zc2liaWxpdHkgdG8gbWFrZSBhIHRyYW5zaXRpb25cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRnZXQgQ29uZGl0aW9uKCk6IENvbmRpdGlvbkNhbGxCYWNrPFRDb250ZXh0PiB8IG51bGw7XG5cblx0LyoqXG5cdCAqIEEgc2V0dGVyIGZvciBhbiBhY3Rpb24gdGhhdCBkZWZpbmVzIGEgcG9zc2liaWxpdHkgdG8gbWFrZSBhIHRyYW5zaXRpb25cblx0ICogQHBhcmFtIHBDb25kaXRpb25cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRzZXQgQ29uZGl0aW9uKHBDb25kaXRpb246IENvbmRpdGlvbkNhbGxCYWNrPFRDb250ZXh0PiB8IG51bGwpO1xuXG5cdC8qKlxuXHQgKiBTdG9wIHN0YXRlIG1hY2hpbmUgZXhlY3V0aW9uIGFmdGVyIHBlcmZvcm1pbmcgdHJhbnNpdGlvbiB0aHJ1IHRoZSBzdGF0ZVxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdGdldCBBZnRlclRyYW5zaXRpb25CZWhhdmlvckVudW0oKTogVHJhbnNpdGlvbkJlaGF2aW9yRW51bTtcblxuXHQvKipcblx0ICogU3RvcCBzdGF0ZSBtYWNoaW5lIGV4ZWN1dGlvbiBhZnRlciBwZXJmb3JtaW5nIHRyYW5zaXRpb24gdGhyb3VnaCB0aGUgc3RhdGVcblx0ICogQHBhcmFtIHBCZWhhdmlvdXIgLSBBIHBhcmFtZXRlciB0aGF0IGRlZmluZXMgYSBzdG9wIHN0YXRlIG1hY2hpbmUgZXhlY3V0aW9uIGJlaGF2aW91clxuXHQgKiBhZnRlciBwZXJmb3JtaW5nIHRyYW5zaXRpb24gdGhyb3VnaCB0aGUgc3RhdGVcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRzZXQgQWZ0ZXJUcmFuc2l0aW9uQmVoYXZpb3JFbnVtKHBCZWhhdmlvdXI6IFRyYW5zaXRpb25CZWhhdmlvckVudW0pO1xufSIsImltcG9ydCB7SUluamVjdGFibGV9IGZyb20gXCIuL2ludGVyZmFjZXMvSUluamVjdGFibGVcIjtcbmltcG9ydCB7Q2xhc3N9IGZyb20gXCIuL3R5cGUvVHlwZVwiO1xuaW1wb3J0IHtLZXJuZWx9IGZyb20gXCIuL0tlcm5lbFwiO1xuXG5leHBvcnQgY29uc3Qga2VybmVsID0gbmV3IEtlcm5lbCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0PEsgZXh0ZW5kcyBULCBUIGV4dGVuZHMgSUluamVjdGFibGU+KGNvbnN0cnVjdG9yOiBDbGFzczxUPik6IEtcbntcblx0cmV0dXJuIGtlcm5lbC5nZXQoY29uc3RydWN0b3IpO1xufSIsImltcG9ydCB7SW5qZWN0aW9uTWFwcGluZ30gZnJvbSBcIi4uL0luamVjdGlvbk1hcHBpbmdcIjtcbmltcG9ydCB7Y2xhc3NNYXB9IGZyb20gXCIuLi9kZXBlbmRlbmN5LWluamVjdGlvblwiO1xuaW1wb3J0IHtDb25zdHJ1Y3Rvcn0gZnJvbSBcIi4uL3R5cGUvVHlwZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0YWJsZTxUPigpOiAodGFyZ2V0OiBDb25zdHJ1Y3RvcjxUPikgPT4gdm9pZFxue1xuXHRyZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogQ29uc3RydWN0b3I8VD4pOiB2b2lkXG5cdHtcblx0XHRjb25zdCByZXN1bHQ6IEluamVjdGlvbk1hcHBpbmc8VD4gPSA8SW5qZWN0aW9uTWFwcGluZzxUPj5jbGFzc01hcC5nZXQodGFyZ2V0KTtcblx0XHRpZiAoIXJlc3VsdClcblx0XHR7XG5cdFx0XHRuZXcgSW5qZWN0aW9uTWFwcGluZyhjbGFzc01hcCwgdGFyZ2V0KTtcblx0XHR9XG5cdH07XG59XG4iLCJpbXBvcnQge0lJbmplY3RhYmxlfSBmcm9tIFwiLi9pbnRlcmZhY2VzL0lJbmplY3RhYmxlXCI7XG5pbXBvcnQge0NsYXNzLCBDb25zdHJ1Y3Rvcn0gZnJvbSBcIi4vdHlwZS9UeXBlXCI7XG5pbXBvcnQge0RpY3Rpb25hcnl9IGZyb20gXCIuL3NoYXJlZC9EaWN0aW9uYXJ5XCI7XG5pbXBvcnQge01hcHBpbmd9IGZyb20gXCIuL3NoYXJlZC9NYXBwaW5nXCI7XG5cbmV4cG9ydCB0eXBlIEtlcm5lbENsYXNzZXNNYXAgPSBEaWN0aW9uYXJ5PENsYXNzPElJbmplY3RhYmxlPiwgSW5qZWN0aW9uTWFwcGluZzxJSW5qZWN0YWJsZT4+O1xuXG5leHBvcnQgY2xhc3MgSW5qZWN0aW9uTWFwcGluZzxUQmFzZSBleHRlbmRzIElJbmplY3RhYmxlLCBUUmVzdWx0IGV4dGVuZHMgVEJhc2UgPSBUQmFzZT4gZXh0ZW5kcyBNYXBwaW5nXG57XG5cdHByb3RlY3RlZCBfaW5zdGFuY2VSZXN1bHRDb25zdHJ1Y3RvcjogQ29uc3RydWN0b3I8VFJlc3VsdD4gPSBudWxsO1xuXHRwcml2YXRlIGluc3RhbmNlOiBUUmVzdWx0ID0gbnVsbDtcblx0cHJpdmF0ZSBpc1NpbmdsZXRvbjogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIGFyZ3M6IGFueVtdID0gW107XG5cblx0cHJpdmF0ZSBfaXNGb3JjZUNyZWF0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjbGFzc2VzTWFwOiBLZXJuZWxDbGFzc2VzTWFwLCBpbml0aWFsQ29uc3RydWN0b3I6IENsYXNzPFRCYXNlPilcblx0e1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy50byhpbml0aWFsQ29uc3RydWN0b3IgYXMgYW55KTtcblx0fVxuXG5cdGdldEluc3RhbmNlKCk6IFRSZXN1bHRcblx0e1xuXHRcdGlmICh0aGlzLmlzU2luZ2xldG9uKVxuXHRcdHtcblx0XHRcdGlmICghdGhpcy5pbnN0YW5jZSlcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5pbnN0YW5jZSA9IHRoaXMuY3JlYXRlSW5zdGFuY2UoKTtcblx0XHRcdFx0Ly8gaWYgKF9fREVWX18pIHtcblx0XHRcdFx0Ly8gICAgIC8vIERldmVsb3BtZW50IHRvb2wgZm9yIGNyZWF0ZSBhIGdsb2JhbCBsaW5rIHRvIHRoZSBjbGFzc1xuXHRcdFx0XHQvLyAgICAgRGVidWdVdGlscy5tYXBPYmplY3RUb0dsb2JhbElkKHRoaXMuaW5zdGFuY2UsIHRoaXMuaW5zdGFuY2UuY29uc3RydWN0b3IubmFtZSwgXCJzXCIpO1xuXHRcdFx0XHQvLyB9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlSW5zdGFuY2UoKTtcblx0fVxuXG5cdGNyZWF0ZUluc3RhbmNlKCk6IFRSZXN1bHRcblx0e1xuXHRcdGNvbnN0IGNvbnN0cnVjdG9yID0gdGhpcy5nZXRDb25zdHJ1Y3RvcigpO1xuXHRcdHJldHVybiBuZXcgY29uc3RydWN0b3IoLi4udGhpcy5hcmdzKTtcblx0fVxuXG5cdGdldENvbnN0cnVjdG9yKCk6IENvbnN0cnVjdG9yPFRSZXN1bHQ+XG5cdHtcblx0XHRpZiAodGhpcy5faW5zdGFuY2VSZXN1bHRDb25zdHJ1Y3Rvcilcblx0XHR7XG5cdFx0XHRyZXR1cm4gdGhpcy5faW5zdGFuY2VSZXN1bHRDb25zdHJ1Y3Rvcjtcblx0XHR9XG5cblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb25zdHJ1Y3RvciBpcyBub3QgYm91bmQhXCIpO1xuXHR9XG5cblx0aGFzSW5zdGFuY2UoKTogYm9vbGVhblxuXHR7XG5cdFx0cmV0dXJuICEhdGhpcy5pbnN0YW5jZSAmJiB0aGlzLmlzU2luZ2xldG9uO1xuXHR9XG5cblx0ZGVzdHJveUluc3RhbmNlKCk6IHZvaWRcblx0e1xuXHRcdHRoaXMuaW5zdGFuY2UgPSBudWxsO1xuXHR9XG5cblx0YXNTaW5nbGV0b24oKTogSW5qZWN0aW9uTWFwcGluZzxUQmFzZSwgVFJlc3VsdD5cblx0e1xuXHRcdHRoaXMuaXNTaW5nbGV0b24gPSB0cnVlO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dG88VFJlc3VsdE92ZXJyaWRlIGV4dGVuZHMgVEJhc2U+KGluc3RhbmNlQ29uc3RydWN0b3I6IENvbnN0cnVjdG9yPFRSZXN1bHRPdmVycmlkZT4pOiBJbmplY3Rpb25NYXBwaW5nPFRCYXNlLCBUUmVzdWx0T3ZlcnJpZGU+XG5cdHtcblxuXHRcdGlmICghaW5zdGFuY2VDb25zdHJ1Y3Rvcilcblx0XHR7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBpcyBhbiB1bmRlZmluZWQgY29uc3RydWN0b3IgeW91IGFyZSB0cnlpbmcgYmluZCB0by5cIik7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmV3VGhpcyA9IHRoaXMuZXhpc3RlbnRpYWxUeXBlPFRSZXN1bHRPdmVycmlkZT4odGhpcyk7XG5cdFx0Y29uc3Qgb3RoZXIgPSB0aGlzLmNsYXNzZXNNYXAuZ2V0KGluc3RhbmNlQ29uc3RydWN0b3IpO1xuXHRcdGlmIChvdGhlcilcblx0XHR7XG5cdFx0XHRjb25zb2xlLndhcm4oXCJDb25zdHJ1Y3RvciBhbHJlYWR5IGJvdW5kIFwiICsgaW5zdGFuY2VDb25zdHJ1Y3Rvci5uYW1lKTtcblx0XHR9XG5cdFx0bmV3VGhpcy5faW5zdGFuY2VSZXN1bHRDb25zdHJ1Y3RvciA9IGluc3RhbmNlQ29uc3RydWN0b3I7XG5cdFx0bmV3VGhpcy5pbnN0YW5jZSA9IG51bGw7XG5cdFx0dGhpcy5jbGFzc2VzTWFwLmFkZChpbnN0YW5jZUNvbnN0cnVjdG9yLCB0aGlzKTtcblxuXHRcdHJldHVybiBuZXdUaGlzO1xuXHR9XG5cblx0aXNGb3JjZUNyZWF0aW9uKCk6IGJvb2xlYW5cblx0e1xuXHRcdHJldHVybiB0aGlzLl9pc0ZvcmNlQ3JlYXRpb247XG5cdH1cblxuXHRmb3JjZUNyZWF0aW9uKCk6IEluamVjdGlvbk1hcHBpbmc8VEJhc2UsIFRSZXN1bHQ+XG5cdHtcblx0XHR0aGlzLl9pc0ZvcmNlQ3JlYXRpb24gPSB0cnVlO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cHJvdGVjdGVkIGV4aXN0ZW50aWFsVHlwZTxUUmVzdWx0T3ZlcnJpZGUgZXh0ZW5kcyBUQmFzZT4ob2xkVGhpczogSW5qZWN0aW9uTWFwcGluZzxUQmFzZSwgVFJlc3VsdD4pOiBJbmplY3Rpb25NYXBwaW5nPFRCYXNlLCBUUmVzdWx0T3ZlcnJpZGU+XG5cdHtcblx0XHRyZXR1cm4gPEluamVjdGlvbk1hcHBpbmc8VEJhc2UsIFRSZXN1bHRPdmVycmlkZT4+KG9sZFRoaXMgYXMgYW55KTtcblx0fVxuXG59XG4iLCJpbXBvcnQge0J1dHRvbn0gZnJvbSBcImNjXCI7XG5pbXBvcnQge0Fic3RyYWN0QmFzZVN0YXRlfSBmcm9tIFwiLi4vc3RhdGVNYXR0ZXIvQWJzdHJhY3QvQWJzdHJhY3RCYXNlU3RhdGVcIjtcbmltcG9ydCB7QXBwQ29udGV4dH0gZnJvbSBcIi4uL0FwcENvbnRleHRcIjtcblxuZXhwb3J0IGNsYXNzIEludHJvU3RhdGUgZXh0ZW5kcyBBYnN0cmFjdEJhc2VTdGF0ZTxBcHBDb250ZXh0Plxue1xuXHRwdWJsaWMgRXhlY3V0ZSgpXG5cdHtcblx0XHR0aGlzLl9jb250ZXh0LnRvYXN0TGFiZWwuc3RyaW5nID0gdGhpcy5fY29udGV4dC5sb2NhbGUuZ2V0KFwiaW50cm9cIik7XG5cblx0XHR0aGlzLl9jb250ZXh0LnN0YXJ0ZXJOb2RlLm9uKEJ1dHRvbi5FdmVudFR5cGUuQ0xJQ0ssICgpID0+XG5cdFx0e1xuXHRcdFx0dGhpcy5fY29udGV4dC5zdGFydGVyTm9kZS5vZmYoQnV0dG9uLkV2ZW50VHlwZS5DTElDSyk7XG5cdFx0XHR0aGlzLl9jb250ZXh0LnRvYXN0Tm9kZS5hY3RpdmUgPSBmYWxzZTtcblx0XHRcdHN1cGVyLkV4ZWN1dGUoKTtcblx0XHR9KTtcblx0fVxufSIsIi8qKlxuICogT2NjdXJzIHdoZW4gc3RhdGUgdHJ5aW5nIHRvIGV4YW1pbmUgb3IgcGVyZm9ybSBhIHRyYW5zaXRpb24gYmV0d2VlbiBzdGF0ZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnZhbGlkVHJhbnNpdGlvbkV4Y2VwdGlvbiBleHRlbmRzIEVycm9yXG57XG5cdC8qKlxuXHQgKiBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgSW52YWxpZFRyYW5zaXRpb25FeGNlcHRpb24gY2xhc3MuXG5cdCAqIEBwYXJhbSBwRXJyb3JNZXNzYWdlIC0gVGhlIG1lc3NhZ2UgdGhhdCBkZXNjcmliZXMgdGhlIGVycm9yLlxuXHQgKi9cblx0Y29uc3RydWN0b3IocEVycm9yTWVzc2FnZTogc3RyaW5nKVxuXHR7XG5cdFx0c3VwZXIocEVycm9yTWVzc2FnZSk7XG5cdFx0Ly8gSXQncyB3b3J0aCBtZW50aW9uaW5nIHRoYXQgT2JqZWN0LnNldFByb3RvdHlwZU9mIG5lZWRzIHRvIGJlIGNhbGxlZFxuXHRcdC8vIGltbWVkaWF0ZWx5IGFmdGVyIGFueSBzdXBlciguLi4pIGNhbGxzLlxuXG5cdFx0Ly8gU2V0IHRoZSBwcm90b3R5cGUgZXhwbGljaXRseVxuXHRcdE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBJbnZhbGlkVHJhbnNpdGlvbkV4Y2VwdGlvbi5wcm90b3R5cGUpO1xuXHR9XG59IiwiaW1wb3J0IHtJQmFzZVN0YXRlTWFjaGluZX0gZnJvbSBcIi4vSUJhc2VTdGF0ZU1hY2hpbmVcIjtcblxuLyoqXG4gKiBBbiBpbnRlcmZhY2UgdGhhdCBkZWZpbmVzIGEgc3RhdGUgbWFjaGluZSBjb250ZXh0XG4gKiBAVENvbnRleHQgLSBBIGNvbnRleHQgY2xhc3MgZm9yIHN0YXRlIG1hY2hpbmVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU3RhdGVNYWNoaW5lQ29udGV4dDxUQ29udGV4dCwgVEV2ZW50Plxue1xuXHQvKipcblx0ICogQSBzdGF0ZSBtYWNoaW5lIHJlZmVyZW5jZVxuXHQgKi9cblx0Z2V0IFN0YXRlTWFjaGluZSgpOiBJQmFzZVN0YXRlTWFjaGluZTxUQ29udGV4dCwgVEV2ZW50PjtcblxuXHQvKipcblx0ICogUmVzZXQgdGhlIGNvbnRleHRcblx0ICovXG5cdFJlc2V0KCk6IHZvaWQ7XG59IiwiaW1wb3J0IHtTdGF0ZU1hY2hpbmVCZWhhdmlvckVudW19IGZyb20gXCIuLi9FbnVtL1N0YXRlTWFjaGluZUJlaGF2aW9yRW51bVwiO1xuXG4vKipcbiAqIEEgc3RhdGUgbWFjaGluZSB3aXRoIGJlaGF2aW9yIG9wdGlvbnMgaW50ZXJmYWNlIGRlZmluZXNcbiAqIHRoZSBtZXRob2RzIHRvIHNldCBhbmQgdW5zZXQgYmVoYXZpb3VyIG9wdGlvbnMgb2YgdGhlIG1hY2hpbmUuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlTWFjaGluZVdpdGhCZWhhdmlvdXJPcHRpb25zXG57XG5cdC8qKlxuXHQgKiBTZXQgdGhlIGJlaGF2aW91ciBvcHRpb24gdG8gdGhlIHN0YXRlIG1hY2hpbmUuXG5cdCAqIEBwYXJhbSBwTWFjaGluZUJlaGF2aW91ck9wdGlvbiAtIEEgc3RhdGUgbWFjaGluZSBiZWhhdmlvdXIgb3B0aW9uLlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdFNldEJlaGF2aW91ck9wdGlvbihwTWFjaGluZUJlaGF2aW91ck9wdGlvbjogU3RhdGVNYWNoaW5lQmVoYXZpb3JFbnVtKTogdm9pZDtcblxuXHQvKipcblx0ICogVW5zZXQgdGhlIHNwZWNpZmljIG9wdGlvbiBmcm9tIHRoZSBzdGF0ZSBtYWNoaW5lIGJlaGF2aW9yXG5cdCAqIEBwYXJhbSBwTWFjaGluZUJlaGF2aW91ck9wdGlvbiAtIEEgc3RhdGUgbWFjaGluZSBiZWhhdmlvciBvcHRpb24uXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0VW5zZXRCZWhhdmlvdXJPcHRpb24ocE1hY2hpbmVCZWhhdmlvdXJPcHRpb246IFN0YXRlTWFjaGluZUJlaGF2aW9yRW51bSk6IHZvaWQ7XG59IiwiaW1wb3J0IHtpbnN0YW50aWF0ZSwgTm9kZSwgUHJlZmFifSBmcm9tIFwiY2NcIjtcbmltcG9ydCB7QWJzdHJhY3RQb29sfSBmcm9tIFwiLi9BYnN0cmFjdFBvb2xcIjtcblxuZXhwb3J0IGNsYXNzIEl0ZW1zUG9vbCBleHRlbmRzIEFic3RyYWN0UG9vbDxOb2RlPlxue1xuXHRjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcHJlZmFiOiBQcmVmYWIpXG5cdHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGNyZWF0ZU5ld0luc3RhbmNlKCk6IE5vZGVcblx0e1xuXHRcdHJldHVybiBpbnN0YW50aWF0ZSh0aGlzLnByZWZhYik7XG5cdH1cbn0iLCJpbXBvcnQge0luamVjdGlvbk1hcHBpbmd9IGZyb20gXCIuL0luamVjdGlvbk1hcHBpbmdcIjtcbmltcG9ydCB7SUluamVjdGFibGV9IGZyb20gXCIuL2ludGVyZmFjZXMvSUluamVjdGFibGVcIjtcbmltcG9ydCB7Y2xhc3NNYXB9IGZyb20gXCIuL2RlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XG5pbXBvcnQge0NsYXNzfSBmcm9tIFwiLi90eXBlL1R5cGVcIjtcblxuZXhwb3J0IGNsYXNzIEtlcm5lbFxue1xuXHRwdWJsaWMgYmluZDxUIGV4dGVuZHMgSUluamVjdGFibGU+KGNvbnN0cnVjdG9yOiBDbGFzczxUPik6IEluamVjdGlvbk1hcHBpbmc8VD5cblx0e1xuXG5cdFx0bGV0IHJlc3VsdDogSW5qZWN0aW9uTWFwcGluZzxUPiA9IHRoaXMuZ2V0QmluZGluZyhjb25zdHJ1Y3Rvcik7XG5cdFx0aWYgKCFyZXN1bHQpXG5cdFx0e1xuXHRcdFx0cmVzdWx0ID0gbmV3IEluamVjdGlvbk1hcHBpbmcoY2xhc3NNYXAsIGNvbnN0cnVjdG9yKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0cHVibGljIGdldDxLIGV4dGVuZHMgVCwgVCBleHRlbmRzIElJbmplY3RhYmxlPihjb25zdHJ1Y3RvcjogQ2xhc3M8VD4pOiBLXG5cdHtcblx0XHRjb25zdCBtYXBwaW5nOiBJbmplY3Rpb25NYXBwaW5nPElJbmplY3RhYmxlPiA9IGNsYXNzTWFwLmdldChjb25zdHJ1Y3Rvcik7XG5cblx0XHRpZiAoIW1hcHBpbmcpXG5cdFx0e1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlcmUgaXMgbm8gYW55IGJpbmRpbmcgZm9yIFwiICsgY29uc3RydWN0b3IgKyBcIiBwbGVhc2UgYmluZCB0aGUgY2xhc3MgYmVmb3JlIGluamVjdCgpXCIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXBwaW5nLmdldEluc3RhbmNlKCkgYXMgSztcblx0fVxuXG5cdHB1YmxpYyBnZXRCaW5kaW5nPFQgZXh0ZW5kcyBJSW5qZWN0YWJsZT4oY29uc3RydWN0b3I6IENsYXNzPFQ+KTogSW5qZWN0aW9uTWFwcGluZzxUPlxuXHR7XG5cdFx0aWYgKCFjb25zdHJ1Y3Rvcilcblx0XHR7XG5cdFx0XHR0aHJvdyBFcnJvcihcInlvdSBhcmUgdHJ5aW5nIHRvIGdldCB1bmRlZmluZWQgY29uc3RydWN0b3JcIik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxJbmplY3Rpb25NYXBwaW5nPFQ+PmNsYXNzTWFwLmdldChjb25zdHJ1Y3Rvcik7XG5cdH1cblxuXHRwdWJsaWMgYWN0aXZhdGUoKTogdm9pZFxuXHR7XG5cdFx0Y29uc3QgaW5qZWN0aW9uc0xpc3Q6IEluamVjdGlvbk1hcHBpbmc8SUluamVjdGFibGU+W10gPSBbXTtcblx0XHRjbGFzc01hcC5mb3JFYWNoKGl0ZW0gPT4gaW5qZWN0aW9uc0xpc3QucHVzaChpdGVtKSk7XG5cblx0XHQvL1RoZW4gYWN0aXZhdGVcblx0XHRpbmplY3Rpb25zTGlzdC5mb3JFYWNoKFxuXHRcdFx0KGl0ZW06IEluamVjdGlvbk1hcHBpbmc8SUluamVjdGFibGU+KSA9PlxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoaXRlbS5pc0ZvcmNlQ3JlYXRpb24oKSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGl0ZW0uZ2V0SW5zdGFuY2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cdH1cbn1cbiIsImltcG9ydCBOb3ZhRUNTIGZyb20gXCJAbm92YS1lbmdpbmUvZWNzXCI7XG5pbXBvcnQge0ZydWl0Q29tcG9uZW50fSBmcm9tIFwiLi4vY29tcG9uZW50cy9GcnVpdENvbXBvbmVudFwiO1xuaW1wb3J0IHtmaW5kLCBOb2RlfSBmcm9tIFwiY2NcIjtcbmltcG9ydCB7R2FtZUVuZ2luZX0gZnJvbSBcIi4uL0dhbWVFbmdpbmVcIjtcbmltcG9ydCB7SGl0Q29tcG9uZW50fSBmcm9tIFwiLi4vY29tcG9uZW50cy9IaXRDb21wb25lbnRcIjtcbmltcG9ydCB7Tm9kZU5hbWVzfSBmcm9tIFwiLi4vLi4vTm9kZU5hbWVzXCI7XG5pbXBvcnQge1Bvc2l0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3NpdGlvbkNvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgS2lsbEZydWl0U3lzdGVtIGV4dGVuZHMgTm92YUVDUy5TeXN0ZW1cbntcbiAgICBwcml2YXRlIGtpbGxab25lOiBOb2RlO1xuICAgIHByb3RlY3RlZCBmYW1pbHk/OiBOb3ZhRUNTLkZhbWlseTtcbiAgICBwcml2YXRlIF9lbmdpbmU6IEdhbWVFbmdpbmUgfCBudWxsID0gbnVsbDtcblxuICAgIG9uQXR0YWNoKGVuZ2luZTogR2FtZUVuZ2luZSk6IHZvaWRcbiAgICB7XG4gICAgICAgIHN1cGVyLm9uQXR0YWNoKGVuZ2luZSk7XG5cbiAgICAgICAgdGhpcy5raWxsWm9uZSA9IGZpbmQoTm9kZU5hbWVzLlpvbmVLaWxsKTtcbiAgICAgICAgdGhpcy5fZW5naW5lID0gZW5naW5lO1xuICAgICAgICB0aGlzLmZhbWlseSA9IG5ldyBOb3ZhRUNTLkZhbWlseUJ1aWxkZXIoZW5naW5lKVxuICAgICAgICAgICAgLmluY2x1ZGUoRnJ1aXRDb21wb25lbnQpXG4gICAgICAgICAgICAuaW5jbHVkZShIaXRDb21wb25lbnQpXG4gICAgICAgICAgICAuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKGVuZ2luZTogR2FtZUVuZ2luZSwgZGVsdGE6IG51bWJlcik6IHZvaWRcbiAgICB7XG4gICAgICAgIGNvbnN0IGtpbGxab25lWTogbnVtYmVyID0gdGhpcy5raWxsWm9uZS5nZXRXb3JsZFBvc2l0aW9uKCkueTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZhbWlseS5lbnRpdGllcy5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgZW50aXR5ID0gdGhpcy5mYW1pbHkuZW50aXRpZXNbaV07XG4gICAgICAgICAgICBjb25zdCBwb3NDb21wID0gZW50aXR5LmdldENvbXBvbmVudChQb3NpdGlvbkNvbXBvbmVudCk7XG4gICAgICAgICAgICBpZiAocG9zQ29tcClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAocG9zQ29tcC5jdXJyZW50WSA8IGtpbGxab25lWSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5yZW1vdmVFbnRpdHkoZW50aXR5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBoaXRDb21wID0gZW50aXR5LmdldENvbXBvbmVudChIaXRDb21wb25lbnQpO1xuICAgICAgICAgICAgaWYgKGhpdENvbXAua2lsbGVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVuZ2luZS5yZW1vdmVFbnRpdHkoZW50aXR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgTm92YUVDUyBmcm9tIFwiQG5vdmEtZW5naW5lL2Vjc1wiO1xuaW1wb3J0IHtHYW1lRW5naW5lfSBmcm9tIFwiLi4vR2FtZUVuZ2luZVwiO1xuaW1wb3J0IHtWaWV3Q29tcG9uZW50fSBmcm9tIFwiLi4vY29tcG9uZW50cy9WaWV3Q29tcG9uZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBLaWxsVmlld1N5c3RlbSBleHRlbmRzIE5vdmFFQ1MuU3lzdGVtXG57XG5cdHByb3RlY3RlZCBmYW1pbHk/OiBOb3ZhRUNTLkZhbWlseTtcblxuXHRvbkF0dGFjaChlbmdpbmU6IEdhbWVFbmdpbmUpOiB2b2lkXG5cdHtcblx0XHRzdXBlci5vbkF0dGFjaChlbmdpbmUpO1xuXG5cdFx0dGhpcy5mYW1pbHkgPSBuZXcgTm92YUVDUy5GYW1pbHlCdWlsZGVyKGVuZ2luZSlcblx0XHRcdC5pbmNsdWRlKFZpZXdDb21wb25lbnQpXG5cdFx0XHQuYnVpbGQoKTtcblx0fVxuXG5cdHB1YmxpYyB1cGRhdGUoZW5naW5lOiBHYW1lRW5naW5lLCBkZWx0YTogbnVtYmVyKTogdm9pZFxuXHR7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZhbWlseS5lbnRpdGllcy5sZW5ndGg7IGkrKylcblx0XHR7XG5cdFx0XHRjb25zdCBlbnRpdHkgPSB0aGlzLmZhbWlseS5lbnRpdGllc1tpXTtcblx0XHRcdGlmIChlbnRpdHkuZ2V0Q29tcG9uZW50KFZpZXdDb21wb25lbnQpLmtpbGxlZClcblx0XHRcdHtcblx0XHRcdFx0ZW5naW5lLnJlbW92ZUVudGl0eShlbnRpdHkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSIsImltcG9ydCB7QWJzdHJhY3RCYXNlU3RhdGV9IGZyb20gXCIuLi9zdGF0ZU1hdHRlci9BYnN0cmFjdC9BYnN0cmFjdEJhc2VTdGF0ZVwiO1xuaW1wb3J0IHtBcHBDb250ZXh0fSBmcm9tIFwiLi4vQXBwQ29udGV4dFwiO1xuaW1wb3J0IHtBc3NldHNMb2FkZXJ9IGZyb20gXCIuLi8uLi91dGlscy9Bc3NldHNMb2FkZXJcIjtcbmltcG9ydCB7R2FtZUNvbmZpZ30gZnJvbSBcIi4uLy4uL3R5cGVzL0dhbWVDb25maWdcIjtcblxuZXhwb3J0IGNsYXNzIExvYWRpbmdTdGF0ZSBleHRlbmRzIEFic3RyYWN0QmFzZVN0YXRlPEFwcENvbnRleHQ+XG57XG5cdHByaXZhdGUgcmVhZG9ubHkgREVGQVVMVF9MT0NBTEU6IHN0cmluZyA9IFwicnVcIjsgLy9zeXMubGFuZ3VhZ2VDb2RlO1xuXG5cdHB1YmxpYyBFeGVjdXRlKClcblx0e1xuXHRcdHRoaXMuX2NvbnRleHQudG9hc3ROb2RlLmFjdGl2ZSA9IHRydWU7XG5cblx0XHR0aGlzLmxvYWQoKS50aGVuKCgpID0+XG5cdFx0e1xuXHRcdFx0c3VwZXIuRXhlY3V0ZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJvdGVjdGVkIGFzeW5jIGxvYWQoKTogUHJvbWlzZTx2b2lkPlxuXHR7XG5cdFx0Y29uc3QgaTE4biA9IGF3YWl0IEFzc2V0c0xvYWRlci5sb2FkSlNPTjxPYmplY3Q+KGBpMThuLyR7dGhpcy5ERUZBVUxUX0xPQ0FMRX1gKTtcblx0XHR0aGlzLl9jb250ZXh0LmxvY2FsZSA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cdFx0T2JqZWN0LmtleXMoaTE4bikuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+XG5cdFx0e1xuXHRcdFx0dGhpcy5fY29udGV4dC5sb2NhbGUuc2V0KGtleSwgaTE4bltrZXldKTtcblx0XHR9KTtcblxuXHRcdHRoaXMuX2NvbnRleHQudG9hc3RMYWJlbC5zdHJpbmcgPSB0aGlzLl9jb250ZXh0LmxvY2FsZS5nZXQoXCJsb2FkaW5nXCIpO1xuXG5cdFx0dGhpcy5fY29udGV4dC5jb25maWcgPSBhd2FpdCBBc3NldHNMb2FkZXIubG9hZEpTT048R2FtZUNvbmZpZz4oXCJjb25maWdcIik7XG5cdH1cbn0iLCJpbXBvcnQge0lHdWFyZH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSUd1YXJkXCI7XG5pbXBvcnQge0lNYXBwaW5nfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JTWFwcGluZ1wiO1xuXG5leHBvcnQgY2xhc3MgTWFwcGluZyBpbXBsZW1lbnRzIElNYXBwaW5nXG57XG5cdHByaXZhdGUgZ3VhcmRzOiBJR3VhcmRbXSA9IFtdO1xuXHRwcml2YXRlIGV4ZWN1dGVPbmNlOiBib29sZWFuID0gZmFsc2U7XG5cblx0c3RhdGljIGV4dHJhY3RBbGxQcm9wZXJ0aWVzKG1hcHBpbmc6IElNYXBwaW5nKTogc3RyaW5nW11cblx0e1xuXHRcdGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcblxuXHRcdGZvciAoY29uc3Qga2V5IGluIG1hcHBpbmcpXG5cdFx0e1xuXHRcdFx0aWYgKG1hcHBpbmcuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBrZXkgIT09IFwiZ3VhcmRzXCIgJiYga2V5ICE9PSBcImV4ZWN1dGVPbmNlXCIpXG5cdFx0XHR7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKGtleSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRpc09uY2UoKTogYm9vbGVhblxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuZXhlY3V0ZU9uY2U7XG5cdH1cblxuXHRvbmNlKCk6IElNYXBwaW5nXG5cdHtcblx0XHR0aGlzLmV4ZWN1dGVPbmNlID0gdHJ1ZTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHdpdGhHdWFyZHMoLi4uZ3VhcmRzOiBhbnlbXSk6IElNYXBwaW5nXG5cdHtcblx0XHRBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSh0aGlzLmd1YXJkcywgZ3VhcmRzKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGV4ZWN1dGlvbkFsbG93ZWRCeUd1YXJkcyhkYXRhPzogYW55KTogYm9vbGVhblxuXHR7XG5cblx0XHRmb3IgKGNvbnN0IGd1YXJkIG9mIHRoaXMuZ3VhcmRzKVxuXHRcdHtcblx0XHRcdGlmICghZ3VhcmQoZGF0YSkpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGNyZWF0ZUZpbHRlcihmaWx0ZXJGaWVsZHM/OiBPYmplY3QgJiB7IFtrZXk6IHN0cmluZ106IGFueSB9KTogT2JqZWN0XG5cdHtcblx0XHRpZiAoIWZpbHRlckZpZWxkcylcblx0XHR7XG5cdFx0XHRyZXR1cm4ge307XG5cdFx0fVxuXHRcdGNvbnN0IHJlc3VsdDogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXHRcdGNvbnN0IHByb3BlcnRpZXNJbk1hcHBpbmc6IHN0cmluZ1tdID0gTWFwcGluZy5leHRyYWN0QWxsUHJvcGVydGllcyh0aGlzKTtcblx0XHRmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHByb3BlcnRpZXNJbk1hcHBpbmcpXG5cdFx0e1xuXHRcdFx0aWYgKHByb3BlcnR5IGluIGZpbHRlckZpZWxkcyAmJiB0eXBlb2YgKHRoaXMgYXMgYW55KVtwcm9wZXJ0eV0gPT09IHR5cGVvZiBmaWx0ZXJGaWVsZHNbcHJvcGVydHldKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXN1bHRbcHJvcGVydHldID0gZmlsdGVyRmllbGRzW3Byb3BlcnR5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblxuXHR9XG5cbn1cbiIsImltcG9ydCBOb3ZhRUNTIGZyb20gXCJAbm92YS1lbmdpbmUvZWNzXCI7XG5cbmV4cG9ydCBjbGFzcyBNb3ZlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE5vdmFFQ1MuQ29tcG9uZW50XG57XG4gICAgc3RhdGljIHRhZzogc3RyaW5nID0gXCJNb3ZlbWVudENvbXBvbmVudFwiO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyB2ZWxvY2l0eVg6IG51bWJlciA9IDAsXG4gICAgICAgIHB1YmxpYyB2ZWxvY2l0eVk6IG51bWJlciA9IDBcbiAgICApXG4gICAge1xuICAgIH1cbn1cbiIsImltcG9ydCBOb3ZhRUNTIGZyb20gXCJAbm92YS1lbmdpbmUvZWNzXCI7XG5pbXBvcnQge0dhbWVFbmdpbmV9IGZyb20gXCIuLi9HYW1lRW5naW5lXCI7XG5pbXBvcnQge01vdmVtZW50Q29tcG9uZW50fSBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb3ZlbWVudENvbXBvbmVudFwiO1xuaW1wb3J0IHtQb3NpdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zaXRpb25Db21wb25lbnRcIjtcblxuZXhwb3J0IGNsYXNzIE1vdmVtZW50c1N5c3RlbSBleHRlbmRzIE5vdmFFQ1MuU3lzdGVtXG57XG5cdHByb3RlY3RlZCBmYW1pbHk/OiBOb3ZhRUNTLkZhbWlseTtcblxuXHRvbkF0dGFjaChlbmdpbmU6IEdhbWVFbmdpbmUpOiB2b2lkXG5cdHtcblx0XHRzdXBlci5vbkF0dGFjaChlbmdpbmUpO1xuXG5cdFx0dGhpcy5mYW1pbHkgPSBuZXcgTm92YUVDUy5GYW1pbHlCdWlsZGVyKGVuZ2luZSlcblx0XHRcdC5pbmNsdWRlKE1vdmVtZW50Q29tcG9uZW50KVxuXHRcdFx0LmJ1aWxkKCk7XG5cdH1cblxuXHR1cGRhdGUoZW5naW5lOiBHYW1lRW5naW5lLCBkZWx0YTogbnVtYmVyKTogdm9pZFxuXHR7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZhbWlseS5lbnRpdGllcy5sZW5ndGg7IGkrKylcblx0XHR7XG5cdFx0XHRjb25zdCBlbnRpdHkgPSB0aGlzLmZhbWlseS5lbnRpdGllc1tpXTtcblx0XHRcdGNvbnN0IG1vdmVtZW50Q29tcCA9IGVudGl0eS5nZXRDb21wb25lbnQoTW92ZW1lbnRDb21wb25lbnQpO1xuXHRcdFx0Y29uc3QgcG9zQ29tcDogUG9zaXRpb25Db21wb25lbnQgPSBlbnRpdHkuZ2V0Q29tcG9uZW50KFBvc2l0aW9uQ29tcG9uZW50KTtcblx0XHRcdHBvc0NvbXAuY3VycmVudFggKz0gbW92ZW1lbnRDb21wLnZlbG9jaXR5WCAqIGRlbHRhO1xuXHRcdFx0cG9zQ29tcC5jdXJyZW50WSArPSBtb3ZlbWVudENvbXAudmVsb2NpdHlZICogZGVsdGE7XG5cdFx0fVxuXHR9XG59XG4iLCJleHBvcnQgZW51bSBOb2RlTmFtZXNcbntcblx0Q2FudmFzID0gXCJDYW52YXNcIixcblx0Q2FtZXJhID0gXCJDYW52YXMvQ2FtZXJhXCIsXG5cdFpvbmVCYXNrZXQgPSBcIkNhbnZhcy9ab25lQmFza2V0XCIsXG5cdFpvbmVTcGF3biA9IFwiQ2FudmFzL1pvbmVTcGF3blwiLFxuXHRab25lS2lsbCA9IFwiQ2FudmFzL1pvbmVLaWxsXCIsXG5cdFRvdGFsUG9pbnRzID0gXCJDYW52YXMvVG90YWxQb2ludHNcIixcblx0VG9hc3RNZXNzYWdlID0gXCJDYW52YXMvVG9hc3RNZXNzYWdlXCIsXG5cdFZpZXdDb250YWluZXIgPSBcIkNhbnZhcy9WaWV3Q29udGFpbmVyXCJcbn0iLCIvKipcbiAqIE9jY3VycyB3aGVuIHRoZSBpbml0aWFsIHN0YXRlIG9mIHN0YXRlIG1hY2hpbmUgaXMgbnVsbC5cbiAqL1xuZXhwb3J0IGNsYXNzIE51bGxJbml0aWFsU3RhdGVFeGNlcHRpb24gZXh0ZW5kcyBFcnJvclxue1xuXHQvKipcblx0ICogSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIE51bGxJbml0aWFsU3RhdGVFeGNlcHRpb24gY2xhc3MuXG5cdCAqIEBwYXJhbSBwRXJyb3JNZXNzYWdlIC0gVGhlIG1lc3NhZ2UgdGhhdCBkZXNjcmliZXMgdGhlIGVycm9yLlxuXHQgKi9cblx0Y29uc3RydWN0b3IocEVycm9yTWVzc2FnZTogc3RyaW5nKVxuXHR7XG5cdFx0c3VwZXIocEVycm9yTWVzc2FnZSk7XG5cdFx0Ly8gSXQncyB3b3J0aCBtZW50aW9uaW5nIHRoYXQgT2JqZWN0LnNldFByb3RvdHlwZU9mIG5lZWRzIHRvIGJlIGNhbGxlZFxuXHRcdC8vIGltbWVkaWF0ZWx5IGFmdGVyIGFueSBzdXBlciguLi4pIGNhbGxzLlxuXG5cdFx0Ly8gU2V0IHRoZSBwcm90b3R5cGUgZXhwbGljaXRseVxuXHRcdE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBOdWxsSW5pdGlhbFN0YXRlRXhjZXB0aW9uLnByb3RvdHlwZSk7XG5cdH1cbn0iLCIvKipcbiAqIE9jY3VycyB3aGVuIHRoZSBwYXNzZWQgb3Igc3RvcmVkIHN0YXRlIGlzIG51bGwuXG4gKi9cbmV4cG9ydCBjbGFzcyBOdWxsU3RhdGVFeGNlcHRpb24gZXh0ZW5kcyBFcnJvclxue1xuXHQvKipcblx0ICogSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIE51bGxTdGF0ZUV4Y2VwdGlvbiBjbGFzcy5cblx0ICogQHBhcmFtIHBFcnJvck1lc3NhZ2UgLSBUaGUgbWVzc2FnZSB0aGF0IGRlc2NyaWJlcyB0aGUgZXJyb3IuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihwRXJyb3JNZXNzYWdlOiBzdHJpbmcpXG5cdHtcblx0XHRzdXBlcihwRXJyb3JNZXNzYWdlKTtcblx0XHQvLyBJdCdzIHdvcnRoIG1lbnRpb25pbmcgdGhhdCBPYmplY3Quc2V0UHJvdG90eXBlT2YgbmVlZHMgdG8gYmUgY2FsbGVkXG5cdFx0Ly8gaW1tZWRpYXRlbHkgYWZ0ZXIgYW55IHN1cGVyKC4uLikgY2FsbHMuXG5cblx0XHQvLyBTZXQgdGhlIHByb3RvdHlwZSBleHBsaWNpdGx5XG5cdFx0T2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIE51bGxTdGF0ZUV4Y2VwdGlvbi5wcm90b3R5cGUpO1xuXHR9XG59IiwiaW1wb3J0IHtBYnN0cmFjdEJhc2VTdGF0ZX0gZnJvbSBcIi4uL3N0YXRlTWF0dGVyL0Fic3RyYWN0L0Fic3RyYWN0QmFzZVN0YXRlXCI7XG5pbXBvcnQge0FwcENvbnRleHR9IGZyb20gXCIuLi9BcHBDb250ZXh0XCI7XG5pbXBvcnQge0dhbWVFbmdpbmV9IGZyb20gXCIuLi8uLi9lY3MvR2FtZUVuZ2luZVwiO1xuXG5leHBvcnQgY2xhc3MgUGxheUdhbWVTdGF0ZSBleHRlbmRzIEFic3RyYWN0QmFzZVN0YXRlPEFwcENvbnRleHQ+XG57XG5cdHByaXZhdGUgcmVhZG9ubHkgX2dhbWUgPSBHYW1lRW5naW5lLmluc3RhbmNlO1xuXG5cdHB1YmxpYyBFeGVjdXRlKClcblx0e1xuXHRcdHRoaXMuX2NvbnRleHQuZ2FtZVVJLmFjdGl2ZSA9IHRydWU7XG5cdFx0dGhpcy5fZ2FtZS5pbml0KHRoaXMuX2NvbnRleHQuY29uZmlnKTtcblxuXHRcdHRoaXMuX2NvbnRleHQub25VcGRhdGUgPSAoZHQ6IG51bWJlcik6IHZvaWQgPT5cblx0XHR7XG5cdFx0XHRpZiAoIXRoaXMuX2dhbWUudXBkYXRlKGR0KSlcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5fY29udGV4dC5vblVwZGF0ZSA9IG51bGw7XG5cdFx0XHRcdHRoaXMuX2NvbnRleHQuZ2FtZVVJLmFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLl9jb250ZXh0LnRvYXN0Tm9kZS5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0XHRzdXBlci5FeGVjdXRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59IiwiaW1wb3J0IE5vdmFFQ1MgZnJvbSBcIkBub3ZhLWVuZ2luZS9lY3NcIjtcblxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgTm92YUVDUy5Db21wb25lbnRcbntcbiAgICBzdGF0aWMgdGFnOiBzdHJpbmcgPSBcIlBvc2l0aW9uQ29tcG9uZW50XCI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGN1cnJlbnRYOiBudW1iZXIgPSAwLFxuICAgICAgICBwdWJsaWMgY3VycmVudFk6IG51bWJlciA9IDBcbiAgICApXG4gICAge1xuICAgIH1cbn1cbiIsImV4cG9ydCBlbnVtIFByZWZhYk5hbWVzXG57XG5cdEl0ZW1Qb2ludHMgPSBcIlVJL0l0ZW1Qb2ludHNcIixcbn0iLCJpbXBvcnQgTm92YUVDUyBmcm9tIFwiQG5vdmEtZW5naW5lL2Vjc1wiO1xuaW1wb3J0IHtGcnVpdENvbXBvbmVudH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRnJ1aXRDb21wb25lbnRcIjtcbmltcG9ydCB7R2FtZUVuZ2luZX0gZnJvbSBcIi4uL0dhbWVFbmdpbmVcIjtcbmltcG9ydCB7SGl0Q29tcG9uZW50fSBmcm9tIFwiLi4vY29tcG9uZW50cy9IaXRDb21wb25lbnRcIjtcbmltcG9ydCB7R2FtZVN0YXRlfSBmcm9tIFwiLi4vLi4vc3RhdGUvR2FtZVN0YXRlXCI7XG5pbXBvcnQge2luamVjdH0gZnJvbSBcIi4uLy4uL2luamVjdHMvaW5qZWN0XCI7XG5pbXBvcnQge0VudGl0aWVzRmFjdG9yeX0gZnJvbSBcIi4uLy4uL2ZhY3Rvcmllcy9FbnRpdGllc0ZhY3RvcnlcIjtcbmltcG9ydCB7UG9zaXRpb25Db21wb25lbnR9IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc2l0aW9uQ29tcG9uZW50XCI7XG5pbXBvcnQge1ZlYzN9IGZyb20gXCJjY1wiO1xuXG5leHBvcnQgY2xhc3MgU2NvcmVzU3lzdGVtIGV4dGVuZHMgTm92YUVDUy5TeXN0ZW1cbntcblx0cHJvdGVjdGVkIGZhbWlseT86IE5vdmFFQ1MuRmFtaWx5O1xuXHRwcm90ZWN0ZWQgZ2FtZVN0YXRlOiBHYW1lU3RhdGUgPSBpbmplY3QoR2FtZVN0YXRlKTtcblxuXHRvbkF0dGFjaChlbmdpbmU6IEdhbWVFbmdpbmUpOiB2b2lkXG5cdHtcblx0XHRzdXBlci5vbkF0dGFjaChlbmdpbmUpO1xuXHRcdHRoaXMuZmFtaWx5ID0gbmV3IE5vdmFFQ1MuRmFtaWx5QnVpbGRlcihlbmdpbmUpXG5cdFx0XHQuaW5jbHVkZShGcnVpdENvbXBvbmVudClcblx0XHRcdC5pbmNsdWRlKEhpdENvbXBvbmVudClcblx0XHRcdC5idWlsZCgpO1xuXHR9XG5cblx0cHVibGljIHVwZGF0ZShlbmdpbmU6IEdhbWVFbmdpbmUsIGRlbHRhOiBudW1iZXIpOiB2b2lkXG5cdHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmFtaWx5LmVudGl0aWVzLmxlbmd0aDsgaSsrKVxuXHRcdHtcblx0XHRcdGNvbnN0IGVudGl0eSA9IHRoaXMuZmFtaWx5LmVudGl0aWVzW2ldO1xuXHRcdFx0Y29uc3QgaGl0Q29tcCA9IGVudGl0eS5nZXRDb21wb25lbnQoSGl0Q29tcG9uZW50KTtcblxuXHRcdFx0aWYgKGhpdENvbXAua2lsbGVkKVxuXHRcdFx0e1xuXHRcdFx0XHRjb25zdCBmcnVpdENvbXAgPSBlbnRpdHkuZ2V0Q29tcG9uZW50KEZydWl0Q29tcG9uZW50KTtcblx0XHRcdFx0Y29uc3QgcG9zQ29tcCA9IGVudGl0eS5nZXRDb21wb25lbnQoUG9zaXRpb25Db21wb25lbnQpO1xuXG5cdFx0XHRcdGVuZ2luZS5hZGRFbnRpdHkoRW50aXRpZXNGYWN0b3J5LmNyZWF0ZUZsb2F0aW5nTGFiZWxFbnRpdHkoXG5cdFx0XHRcdFx0bmV3IFZlYzMocG9zQ29tcC5jdXJyZW50WCwgcG9zQ29tcC5jdXJyZW50WSksIGZydWl0Q29tcC5wb2ludHMpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHRoaXMuZ2FtZVN0YXRlLmFkZFNjb3JlKGZydWl0Q29tcC5wb2ludHMpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG59IiwiaW1wb3J0IHtpbmplY3RhYmxlfSBmcm9tIFwiLi9pbmplY3RhYmxlXCI7XG5pbXBvcnQge2NsYXNzTWFwfSBmcm9tIFwiLi4vZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcbmltcG9ydCB7Q29uc3RydWN0b3J9IGZyb20gXCIuLi90eXBlL1R5cGVcIjtcblxuLyoqXG4gKiBDbGFzcyBkZWNvcmF0b3IgZmFjdG9yeSB0aGF0IHJlZ2lzdGVycyB0aGUgY2xhc3MgYXMgYSBzaW5nbGV0b24gd2l0aGluXG4gKiB0aGUgZ2xvYmFsIGNvbnRhaW5lci5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIGNsYXNzIGRlY29yYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xldG9uPFQ+KCk6ICh0YXJnZXQ6IENvbnN0cnVjdG9yPFQ+KSA9PiB2b2lkXG57XG5cdHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBDb25zdHJ1Y3RvcjxUPik6IHZvaWRcblx0e1xuXHRcdGluamVjdGFibGUoKSh0YXJnZXQpO1xuXHRcdGNsYXNzTWFwLmdldCh0YXJnZXQpLmFzU2luZ2xldG9uKCk7XG5cdH07XG59XG4iLCJpbXBvcnQgTm92YUVDUyBmcm9tIFwiQG5vdmEtZW5naW5lL2Vjc1wiO1xuaW1wb3J0IHtGcnVpdEl0ZW19IGZyb20gXCIuLi8uLi90eXBlcy9HYW1lQ29uZmlnXCI7XG5pbXBvcnQge0ZydWl0Q29tcG9uZW50fSBmcm9tIFwiLi4vY29tcG9uZW50cy9GcnVpdENvbXBvbmVudFwiO1xuaW1wb3J0IHtFbnRpdGllc0ZhY3Rvcnl9IGZyb20gXCIuLi8uLi9mYWN0b3JpZXMvRW50aXRpZXNGYWN0b3J5XCI7XG5pbXBvcnQge2ZpbmQsIE5vZGV9IGZyb20gXCJjY1wiO1xuaW1wb3J0IHtHYW1lRW5naW5lfSBmcm9tIFwiLi4vR2FtZUVuZ2luZVwiO1xuaW1wb3J0IHtIaXRDb21wb25lbnR9IGZyb20gXCIuLi9jb21wb25lbnRzL0hpdENvbXBvbmVudFwiO1xuaW1wb3J0IHtOb2RlTmFtZXN9IGZyb20gXCIuLi8uLi9Ob2RlTmFtZXNcIjtcblxuZXhwb3J0IGNsYXNzIFNwYXduRnJ1aXRTeXN0ZW0gZXh0ZW5kcyBOb3ZhRUNTLlN5c3RlbVxue1xuXHRwcm90ZWN0ZWQgZmFtaWx5PzogTm92YUVDUy5GYW1pbHk7XG5cdHByaXZhdGUgc3Bhd25ab25lOiBOb2RlO1xuXHRwcml2YXRlIF9zcGF3bkl0ZW1zOiBGcnVpdEl0ZW1bXSA9IFtdO1xuXHRwcml2YXRlIF9uZXh0U3Bhd25UaW1lOiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIF9zcGF3bkludGVydmFsOiBudW1iZXI7XG5cdHByaXZhdGUgX2VuZ2luZTogR2FtZUVuZ2luZSB8IG51bGwgPSBudWxsO1xuXG5cdG9uQXR0YWNoKGVuZ2luZTogR2FtZUVuZ2luZSk6IHZvaWRcblx0e1xuXHRcdHN1cGVyLm9uQXR0YWNoKGVuZ2luZSk7XG5cblx0XHR0aGlzLl9zcGF3bkl0ZW1zID0gZW5naW5lLmNvbmZpZy5pdGVtcztcblx0XHR0aGlzLl9zcGF3bkludGVydmFsID0gZW5naW5lLmNvbmZpZy5yYXRlO1xuXG5cdFx0dGhpcy5zcGF3blpvbmUgPSBmaW5kKE5vZGVOYW1lcy5ab25lU3Bhd24pO1xuXHRcdHRoaXMuX2VuZ2luZSA9IGVuZ2luZTtcblx0XHR0aGlzLmZhbWlseSA9IG5ldyBOb3ZhRUNTLkZhbWlseUJ1aWxkZXIoZW5naW5lKVxuXHRcdFx0LmluY2x1ZGUoRnJ1aXRDb21wb25lbnQpXG5cdFx0XHQuaW5jbHVkZShIaXRDb21wb25lbnQpXG5cdFx0XHQuYnVpbGQoKTtcblx0fVxuXG5cdHB1YmxpYyB1cGRhdGUoZW5naW5lOiBHYW1lRW5naW5lLCBkZWx0YTogbnVtYmVyKTogdm9pZFxuXHR7XG5cdFx0dGhpcy5fbmV4dFNwYXduVGltZSAtPSBkZWx0YTtcblx0XHRpZiAodGhpcy5fbmV4dFNwYXduVGltZSA8PSAwKVxuXHRcdHtcblx0XHRcdHRoaXMuX3NwYXduRnJ1aXQoKTtcblx0XHRcdHRoaXMuX25leHRTcGF3blRpbWUgPSB0aGlzLl9zcGF3bkludGVydmFsO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgX3NwYXduRnJ1aXQoKTogdm9pZFxuXHR7XG5cdFx0Y29uc3QgdG90YWxXZWlnaHQgPSB0aGlzLl9zcGF3bkl0ZW1zLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLndlaWdodCwgMCk7XG5cdFx0bGV0IHJhbmRvbVdlaWdodCA9IE1hdGgucmFuZG9tKCkgKiB0b3RhbFdlaWdodDtcblxuXHRcdGxldCBzZWxlY3RlZEl0ZW06IEZydWl0SXRlbSB8IG51bGwgPSBudWxsO1xuXHRcdGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9zcGF3bkl0ZW1zKVxuXHRcdHtcblx0XHRcdHJhbmRvbVdlaWdodCAtPSBpdGVtLndlaWdodDtcblx0XHRcdGlmIChyYW5kb21XZWlnaHQgPD0gMClcblx0XHRcdHtcblx0XHRcdFx0c2VsZWN0ZWRJdGVtID0gaXRlbTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCFzZWxlY3RlZEl0ZW0pIHJldHVybjtcblxuXHRcdGNvbnN0IGVudGl0eSA9IEVudGl0aWVzRmFjdG9yeS5jcmVhdGVGcnVpdEVudGl0eShzZWxlY3RlZEl0ZW0sIHRoaXMuc3Bhd25ab25lKTtcblx0XHR0aGlzLl9lbmdpbmUuYWRkRW50aXR5KGVudGl0eSk7XG5cdH1cbn0iLCJpbXBvcnQge0Fic3RyYWN0QmFzZVN0YXRlTWFjaGluZX0gZnJvbSBcIi4uL0Fic3RyYWN0L0Fic3RyYWN0QmFzZVN0YXRlTWFjaGluZVwiO1xuaW1wb3J0IHtJQmFzZVN0YXRlfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQmFzZVN0YXRlXCI7XG5pbXBvcnQge0Fic3RyYWN0U3RhdGVNYWNoaW5lQ29udGV4dH0gZnJvbSBcIi4uL0Fic3RyYWN0L0Fic3RyYWN0U3RhdGVNYWNoaW5lQ29udGV4dFwiO1xuXG4vKipcbiAqIEEgYmFzZSBzdGF0ZSBtYWNoaW5lIGNsYXNzIHRoYXQgaW1wbGVtZW50IG5lY2Vzc2FyeSBhYnN0cmFjdCBpbnRlcmZhY2UgbWVtYmVyc1xuICogQFR5cGVQYXJhbWV0ZXIgVENvbnRleHQgLSBhIHN0YXRlIG1hY2hpbmUgY29udGV4dCBjbGFzcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0YXRlTWFjaGluZUJhc2U8VENvbnRleHQgZXh0ZW5kcyBBYnN0cmFjdFN0YXRlTWFjaGluZUNvbnRleHQ8dW5rbm93biwgdW5rbm93bj4+XG5cdGV4dGVuZHMgQWJzdHJhY3RCYXNlU3RhdGVNYWNoaW5lPFRDb250ZXh0LCB1bmtub3duPlxue1xuXHQvKipcblx0ICogSW5pdGlhbGl6ZSB0aGUgbmV3IG1lbWJlciBvZiB0aGUgQWJzdHJhY3RCYXNlU3RhdGVNYWNoaW5lIHdpdGggZ2l2ZW4gY29udGV4dC5cblx0ICogQHBhcmFtIHBDb250ZXh0IC0gQSBzdGF0ZSBtYWNoaW5lIGNvbnRleHQuXG5cdCAqIEBwYXJhbSBwSW5pdGlhbFN0YXRlIC0gQW4gaW5pdGlhbCBzdGF0ZSBvZiB0aGUgc3RhdGUgbWFjaGluZS5cblx0ICovXG5cdGNvbnN0cnVjdG9yKHBDb250ZXh0OiBUQ29udGV4dCB8IG51bGwgPSBudWxsLCBwSW5pdGlhbFN0YXRlOiBJQmFzZVN0YXRlPFRDb250ZXh0PiB8IG51bGwgPSBudWxsKVxuXHR7XG5cdFx0c3VwZXIocENvbnRleHQsIHBJbml0aWFsU3RhdGUpO1xuXHR9XG59IiwiLyoqXG4gKiBBIHN0YXRlIG1hY2hpbmUgYmVoYXZpb3IgZW51bSBkZWZpbmVzIHRoZSBuYW1lZCBiZWhhdmlvciBwYXR0ZXJucyBhbmQgb3B0aW9uc1xuICogZm9yIHN0YXRlIG1hY2hpbmUuXG4gKi9cbmV4cG9ydCBlbnVtIFN0YXRlTWFjaGluZUJlaGF2aW9yRW51bVxue1xuXHQvKipcblx0ICogVGhlIHN0YXRlIG1hY2hpbmUgd2lsbCBzdG9wIGV4ZWN1dGlvbiBvbmNlIGFueSBzdGF0ZSBpbiB0aGVcblx0ICogbGlzdCBvZiBzdGF0ZXMgd2lsbCB0cmlnZ2VyIHRoZSB0cmFuc2l0aW9uIHdpdGggdGFyZ2V0IHN0YXRlIHRoYXRcblx0ICogZXF1YWwgdGhlIGluaXRpYWwgb25lLlxuXHQgKi9cblx0U1RPUF9PTl9JTklUSUFMX1NUQVRFXG59IiwiLyoqXG4gKiBPY2N1cnMgd2hlbiB0aGUgc3RhdGUgaXMgbm90IHByZXNlbnRlZCBpbiB0aGUgbGlzdCBvZiBzdGF0ZXMgb2YgdGhlIHN0YXRlIG1hY2hpbmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdGF0ZU5vdEZvdW5kRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Jcbntcblx0LyoqXG5cdCAqIEluaXRpYWxpemVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBTdGF0ZU5vdEZvdW5kRXhjZXB0aW9uIGNsYXNzLlxuXHQgKiBAcGFyYW0gcEVycm9yTWVzc2FnZSAtIFRoZSBtZXNzYWdlIHRoYXQgZGVzY3JpYmVzIHRoZSBlcnJvci5cblx0ICovXG5cdGNvbnN0cnVjdG9yKHBFcnJvck1lc3NhZ2U6IHN0cmluZylcblx0e1xuXHRcdHN1cGVyKHBFcnJvck1lc3NhZ2UpO1xuXHRcdC8vIEl0J3Mgd29ydGggbWVudGlvbmluZyB0aGF0IE9iamVjdC5zZXRQcm90b3R5cGVPZiBuZWVkcyB0byBiZSBjYWxsZWRcblx0XHQvLyBpbW1lZGlhdGVseSBhZnRlciBhbnkgc3VwZXIoLi4uKSBjYWxscy5cblxuXHRcdC8vIFNldCB0aGUgcHJvdG90eXBlIGV4cGxpY2l0bHlcblx0XHRPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgU3RhdGVOb3RGb3VuZEV4Y2VwdGlvbi5wcm90b3R5cGUpO1xuXHR9XG59IiwiaW1wb3J0IHtBYnN0cmFjdFRyYW5zaXRpb259IGZyb20gXCIuLi9BYnN0cmFjdC9BYnN0cmFjdFRyYW5zaXRpb25cIjtcbmltcG9ydCB7SUJhc2VTdGF0ZX0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUJhc2VTdGF0ZVwiO1xuaW1wb3J0IHtDb25kaXRpb25DYWxsQmFja30gZnJvbSBcIi4uL0ludGVyZmFjZXMvQ29uZGl0aW9uQ2FsbEJhY2tcIjtcbmltcG9ydCB7VHJhbnNpdGlvbkJlaGF2aW9yRW51bX0gZnJvbSBcIi4uL0VudW0vVHJhbnNpdGlvbkJlaGF2aW91ckVudW1cIjtcblxuLyoqXG4gKiBUcmFuc2l0aW9uIGZvciBzdGF0ZSBtYWNoaW5lLlxuICogQFR5cGVQYXJhbWV0ZXIgVENvbnRleHQgLSBhIHN0YXRlIG1hY2hpbmUgY29udGV4dCBjbGFzcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0YXRlVHJhbnNpdGlvbjxUQ29udGV4dD4gZXh0ZW5kcyBBYnN0cmFjdFRyYW5zaXRpb248VENvbnRleHQ+XG57XG5cdC8qKlxuXHQgKiBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgQWJzdHJhY3RUcmFuc2l0aW9uIGNsYXNzIGFuZCBzZXR1cFxuXHQgKiBAcGFyYW0gcEZyb21TdGF0ZSAtIFRoZSBpbml0aWFsIHN0YXRlIG9mIHRyYW5zaXRpb24uXG5cdCAqIEBwYXJhbSBwVG9TdGF0ZSAtIFRoZSB0YXJnZXQgc3RhdGUgb2YgdHJhbnNpdGlvbi5cblx0ICogQHBhcmFtIHBDb25kaXRpb24gLSBBIGZ1bmN0aW9uIHRoYXQgbXVzdCByZXR1cm4gYm9vbCBhbmQgaW5kaWNhdGVzIHRoZSBhdmFpbGFiaWxpdHkgb2YgcGFzc2luZyB0cmFuc2l0aW9uLlxuXHQgKiBAcGFyYW0gcE9yZGVyIC0gQW4gZXZhbHVhdGlvbiBvcmRlci5cblx0ICogQHBhcmFtIHBBZnRlclRyYW5zaXRpb25CZWhhdmlvckVudW0gLSBTdGF0ZSBtYWNoaW5lIGJlaGF2aW9yIGV4ZWN1dGlvbiBhZnRlciBwZXJmb3JtaW5nIHRyYW5zaXRpb24gdGhyb3VnaCB0aGUgc3RhdGUuXG5cdCAqIEByZW1hcmtzIFRoZSBkZWZhdWx0IGJlaGF2aW9yIGZvciB0aGUgc3RhdGUgbWFjaGluZSBhZnRlciB0cmFuc2FjdGlvbiBpc1xuXHQgKiBDT05USU5VRV9BRlRFUl9UUkFOU0lUSU9OIHdpdGNoIHdpbGwgY29udGludWUgdGhlIGV4ZWN1dGlvbiAoY2FsbCB0aGUgRXhlY3V0ZSBjYWxsYmFjaykgYWZ0ZXIgdHJhbnNhY3Rpb24uXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihwRnJvbVN0YXRlOiBJQmFzZVN0YXRlPFRDb250ZXh0Pixcblx0XHRcdFx0cFRvU3RhdGU6IElCYXNlU3RhdGU8VENvbnRleHQ+LFxuXHRcdFx0XHRwQ29uZGl0aW9uOiBDb25kaXRpb25DYWxsQmFjazxUQ29udGV4dD4gfCBudWxsID0gbnVsbCxcblx0XHRcdFx0cE9yZGVyID0gMCxcblx0XHRcdFx0cEFmdGVyVHJhbnNpdGlvbkJlaGF2aW9yRW51bTogVHJhbnNpdGlvbkJlaGF2aW9yRW51bSA9XG5cdFx0XHRcdFx0VHJhbnNpdGlvbkJlaGF2aW9yRW51bS5DT05USU5VRV9BRlRFUl9UUkFOU0lUSU9OKVxuXHR7XG5cdFx0c3VwZXIocEZyb21TdGF0ZSwgcFRvU3RhdGUsIHBDb25kaXRpb24sIHBPcmRlciwgcEFmdGVyVHJhbnNpdGlvbkJlaGF2aW9yRW51bSk7XG5cdH1cbn0iLCJpbXBvcnQge0Fic3RyYWN0U3RhdGVNYWNoaW5lQ29udGV4dH0gZnJvbSBcIi4uL0Fic3RyYWN0L0Fic3RyYWN0U3RhdGVNYWNoaW5lQ29udGV4dFwiO1xuaW1wb3J0IHtCYXNlVGVybWluYWJsZVN0YXRlTWFjaGluZX0gZnJvbSBcIi4vQmFzZVRlcm1pbmFibGVTdGF0ZU1hY2hpbmVcIjtcblxuZXhwb3J0IGNsYXNzIFRlcm1pbmFibGVDb250ZXh0PFRDb250ZXh0LCBURXZlbnQ+IGV4dGVuZHMgQWJzdHJhY3RTdGF0ZU1hY2hpbmVDb250ZXh0PFRDb250ZXh0LCBURXZlbnQ+XG57XG5cdHB1YmxpYyBpc1Rlcm1pbmF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRnZXQgU3RhdGVNYWNoaW5lKCk6IEJhc2VUZXJtaW5hYmxlU3RhdGVNYWNoaW5lPGFueSwgYW55PlxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX3N0YXRlTWFjaGluZSBhcyBCYXNlVGVybWluYWJsZVN0YXRlTWFjaGluZTxhbnksIGFueT47XG5cdH1cbn0iLCJpbXBvcnQge3R3ZWVuLCBUd2Vlbn0gZnJvbSBcImNjXCI7XG5cbmludGVyZmFjZSBJQXNzb2NpYXRpdmVBcnJheTxUPlxue1xuXHRba2V5OiBzdHJpbmddOiBUO1xufVxuXG5leHBvcnQgY2xhc3MgVGltZW91dFV0aWxzXG57XG5cdHByb3RlY3RlZCBzdGF0aWMgbGFzdElkOiBudW1iZXIgPSAwO1xuXHRwcm90ZWN0ZWQgc3RhdGljIG1heEludGVnZXI6IG51bWJlcjtcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGltZXJzOiBJQXNzb2NpYXRpdmVBcnJheTxUd2Vlbjxhbnk+PiA9IHt9O1xuXG5cdHN0YXRpYyBkZWxheShtczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPlxuXHR7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gVGltZW91dFV0aWxzLnNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcblx0fVxuXG5cdHN0YXRpYyBnZXRUaW1lT3V0UHJvbWlzZSh0aW1lT3V0OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+XG5cdHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PlxuXHRcdHtcblx0XHRcdFRpbWVvdXRVdGlscy5zZXRUaW1lb3V0KCgpID0+XG5cdFx0XHR7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH0sIHRpbWVPdXQpO1xuXHRcdH0pO1xuXHR9XG5cblx0c3RhdGljIHNldFRpbWVvdXQoaGFuZGxlcjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkLCB0aW1lb3V0OiBudW1iZXIsIC4uLmFyZ3M6IGFueVtdKTogbnVtYmVyXG5cdHtcblx0XHRjb25zdCBpZCA9IHRoaXMuZ2V0SWQoKTtcblx0XHRjb25zdCBtb3ZlID0gdHdlZW4oe3RpbWU6IDB9KS5ieSh0aW1lb3V0IC8gMTAwMCwge3RpbWU6IDEwMH0pO1xuXHRcdGNvbnN0IGNoZWNrRW5kID0gdHdlZW4oKS5jYWxsKCgpID0+XG5cdFx0e1xuXHRcdFx0aGFuZGxlcihhcmdzKTtcblx0XHR9KTtcblxuXHRcdG1vdmVcblx0XHRcdC50aGVuKGNoZWNrRW5kKVxuXHRcdFx0LnN0YXJ0KCk7XG5cblx0XHR0aGlzLnRpbWVyc1tpZF0gPSBtb3ZlO1xuXHRcdHJldHVybiBpZDtcblx0fVxuXG5cdHN0YXRpYyBpc0FjdGl2ZShpZDogbnVtYmVyKTogYm9vbGVhblxuXHR7XG5cdFx0cmV0dXJuIHRoaXMudGltZXJzW2lkXSAhPT0gdW5kZWZpbmVkO1xuXHR9XG5cblx0c3RhdGljIGNsZWFyVGltZW91dChpZDogbnVtYmVyKTogdm9pZFxuXHR7XG5cdFx0dGhpcy5jbGVhckJ5SWQoaWQpO1xuXHR9XG5cblx0c3RhdGljIHNldEludGVydmFsKGhhbmRsZXI6IEZ1bmN0aW9uLCB0aW1lb3V0OiBudW1iZXIsIC4uLmFyZ3M6IGFueVtdKTogbnVtYmVyXG5cdHtcblx0XHRjb25zdCBpZCA9IHRoaXMuZ2V0SWQoKTtcblx0XHRjb25zdCBtb3ZlID0gdGhpcy5nZXRJbnRlcnZhbFR3ZWVuKHRpbWVvdXQsIGhhbmRsZXIsIGlkLCBhcmdzKTtcblxuXHRcdHRoaXMudGltZXJzW2lkXSA9IG1vdmU7XG5cdFx0cmV0dXJuIGlkO1xuXHR9XG5cblx0c3RhdGljIGNsZWFySW50ZXJ2YWwoaWQ6IG51bWJlcik6IHZvaWRcblx0e1xuXHRcdHRoaXMuY2xlYXJCeUlkKGlkKTtcblx0fVxuXG5cdHByb3RlY3RlZCBzdGF0aWMgY2xlYXJCeUlkKGlkOiBudW1iZXIpXG5cdHtcblx0XHRpZiAoaXNOYU4oaWQpKVxuXHRcdHtcblx0XHRcdGNvbnNvbGUud2FybihgVGltZW91dFV0aWxzOiBjaGVjayB0aW1lb3V0L2ludGVydmFsIGlkLiBpZCA9ICR7aWR9YCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHRsID0gdGhpcy50aW1lcnNbaWRdO1xuXHRcdGlmICh0bClcblx0XHR7XG5cdFx0XHR0bC5zdG9wKCk7XG5cdFx0XHRkZWxldGUgdGhpcy50aW1lcnNbaWRdO1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBzdGF0aWMgZ2V0SWQoKVxuXHR7XG5cdFx0Ly8gKE51bWJlciBhcyBhbnkpIGlzIHVzZWQgdG8gcHJldmVudCBmYWlsaW5nIG9mIGNvbXBpbGVyLFxuXHRcdC8vIHRha2UgaW50byBhY2NvdW50LCB0aGF0IGlzIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHJldHVybnMgdW5kZWZpbmVkLFxuXHRcdC8vIGFuZCB0aGUgbmV4dCBNYXRoLnBvdyByZXN1bHQgd2lsbCBiZSB0YWtlblxuXHRcdHRoaXMubWF4SW50ZWdlciA9IHRoaXMubWF4SW50ZWdlciB8fCAoTnVtYmVyIGFzIGFueSkuTUFYX1NBRkVfSU5URUdFUiB8fCBNYXRoLnBvdygyLCA1MykgLSAxO1xuXHRcdGlmICh0aGlzLmxhc3RJZCA+PSB0aGlzLm1heEludGVnZXIgLSAxKVxuXHRcdHtcblx0XHRcdHRoaXMubGFzdElkID0gMDtcblx0XHR9XG5cdFx0cmV0dXJuICsrdGhpcy5sYXN0SWQ7XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBnZXRJbnRlcnZhbFR3ZWVuKHRpbWVvdXQ6IG51bWJlciwgaGFuZGxlcjogRnVuY3Rpb24sIHRpbWVySWQ6IG51bWJlciwgYXJnczogYW55W10sKVxuXHR7XG5cdFx0Y29uc3QgbW92ZSA9IHR3ZWVuKHt0aW1lOiAwfSkuYnkodGltZW91dCAvIDEwMDAsIHt0aW1lOiAxMDB9KTtcblx0XHRjb25zdCBjaGVja0VuZCA9IHR3ZWVuKCkuY2FsbCgoKSA9PlxuXHRcdHtcblx0XHRcdGhhbmRsZXIoYXJncyk7XG5cdFx0XHRpZiAodGhpcy50aW1lcnNbdGltZXJJZF0pXG5cdFx0XHR7XG5cdFx0XHRcdFRpbWVvdXRVdGlscy5nZXRJbnRlcnZhbFR3ZWVuKHRpbWVvdXQsIGhhbmRsZXIsIHRpbWVySWQsIGFyZ3MpO1xuXHRcdFx0XHR0aGlzLnRpbWVyc1t0aW1lcklkXSA9IG1vdmU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRtb3ZlXG5cdFx0XHQudGhlbihjaGVja0VuZClcblx0XHRcdC5zdGFydCgpO1xuXHRcdHJldHVybiBtb3ZlO1xuXHR9XG59XG4iLCIvKipcbiAqIEEgdHJhbnNpdGlvbiBiZWhhdmlvciBlbnVtIGRlZmluZXMgdGhlIHNwZWNpZmljIGJlaGF2aW9yXG4gKiBmb3IgcHJvY2Vzc2luZyB0aGUgdHJhbnNpdGlvbi5cbiAqL1xuZXhwb3J0IGVudW0gVHJhbnNpdGlvbkJlaGF2aW9yRW51bVxue1xuXHQvKipcblx0ICogU3RvcCBleGVjdXRpbmcgb2Ygc3RhdGVzIGluIHRoZSBjaGFpbiBvZiBzdGF0ZXMuXG5cdCAqIEByZW1hcmtzIEFsbCBzdGF0ZXMgY2FsbGJhY2tzIHdpbGwgYmUgcHJvY2Vzc2VkIGluIHNwaXRlIG9mIHRoaXNcblx0ICogdHlwZSBvZiBiZWhhdmlvciBob3dldmVyIHRoZSBFeGVjdXRlIG1ldGhvZCBvbiB0aGUgc3RhdGUgb2JqZWN0XG5cdCAqIHdpbGwgbm90IGJlIGNhbGxlZCBvbmNlIHRyYW5zaXRpb24gaXMgZmluaXNoZWQuXG5cdCAqL1xuXHRTVE9QX0FGVEVSX1RSQU5TSVRJT04sXG5cdC8qKlxuXHQgKiBBIGRlZmF1bHQgYmVoYXZpb3Igb2YgdHJhbnNpdGlvbiwgYmFzaWNhbGx5IG1lYW5zIHRoYXQgdHJhbnNpdGlvblxuXHQgKiB3aWxsIGV4ZWN1dGUgYWxsIHRyYW5zaXRpb24gY2FsbGJhY2tzIGFuZCBmaW5hbGx5IGNhbGwgdGhlIEV4ZWN1dGVcblx0ICogbWV0aG9kIG9uIHRoZSBzdGF0ZS5cblx0ICovXG5cdENPTlRJTlVFX0FGVEVSX1RSQU5TSVRJT05cbn0iLCJleHBvcnQgdHlwZSBEeW5hbWljT2JqZWN0ID0gUGFydGlhbDxEeW5hbWljPjtcblxuZXhwb3J0IGludGVyZmFjZSBEeW5hbWljXG57XG5cdFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IHR5cGUgQWJzdHJhY3Q8VD4gPSBFeGNsdWRlPEZ1bmN0aW9uICYgeyBwcm90b3R5cGU6IFQgfSwgQ29uc3RydWN0b3I8VD4+O1xuLy8gZXhwb3J0IHR5cGUgQWJzdHJhY3Q8VD4gPSBGdW5jdGlvbiAmIHsgcHJvdG90eXBlOiBUIH07XG5leHBvcnQgdHlwZSBDb25zdHJ1Y3RvcjxUPiA9IG5ldyAoLi4uYXJnczogYW55W10pID0+IFQ7XG5leHBvcnQgdHlwZSBDbGFzczxUPiA9IEFic3RyYWN0PFQ+IHwgQ29uc3RydWN0b3I8VD47XG4iLCJleHBvcnQgY2xhc3MgVW5pcXVlVXRpbHNcbntcblxuXHRwcm90ZWN0ZWQgc3RhdGljIFVOSVFVRV9JRF9QUk9QX05BTUU6IHN0cmluZyA9IFwiVW5pcXVlSWRcIjtcblx0cHJvdGVjdGVkIHN0YXRpYyBnbG9iYWxVbmlxdWVJZDogbnVtYmVyID0gMDtcblx0cHJvdGVjdGVkIHN0YXRpYyBwcmV2R2xvYmFsVW5pcXVlSWQ6IG51bWJlciA9IDA7XG5cblx0cHVibGljIHN0YXRpYyBnZXRPYmplY3RVbmlxdWVJZChvYmplY3Q6IG9iamVjdCk6IHN0cmluZ1xuXHR7XG5cdFx0aWYgKCFvYmplY3QuaGFzT3duUHJvcGVydHkoVW5pcXVlVXRpbHMuVU5JUVVFX0lEX1BST1BfTkFNRSkpXG5cdFx0e1xuXHRcdFx0VW5pcXVlVXRpbHMucHJldkdsb2JhbFVuaXF1ZUlkID0gVW5pcXVlVXRpbHMuZ2xvYmFsVW5pcXVlSWQ7XG5cblx0XHRcdFVuaXF1ZVV0aWxzLmdsb2JhbFVuaXF1ZUlkKys7XG5cdFx0XHQvLyBBbiBhZGRpdGlvbmFsIGNoZWNraW5nIGluIGNhc2UgbWF4IG51bWJlciB2YWx1ZSBsaW1pdCBpcyByZWFjaGVkXG5cdFx0XHRpZiAoVW5pcXVlVXRpbHMuZ2xvYmFsVW5pcXVlSWQgPT09IFVuaXF1ZVV0aWxzLnByZXZHbG9iYWxVbmlxdWVJZClcblx0XHRcdHtcblx0XHRcdFx0VW5pcXVlVXRpbHMuZ2xvYmFsVW5pcXVlSWQgPSAwO1xuXHRcdFx0fVxuXHRcdFx0KG9iamVjdCBhcyBhbnkpW1VuaXF1ZVV0aWxzLlVOSVFVRV9JRF9QUk9QX05BTUVdID0gVW5pcXVlVXRpbHMuZ2xvYmFsVW5pcXVlSWQudG9TdHJpbmcoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKG9iamVjdCBhcyBhbnkpW1VuaXF1ZVV0aWxzLlVOSVFVRV9JRF9QUk9QX05BTUVdO1xuXHR9XG59XG4iLCJleHBvcnQgY2xhc3MgUG9pbnRcbntcblx0Y29uc3RydWN0b3IocHVibGljIHg6IG51bWJlciA9IDAsIHB1YmxpYyB5OiBudW1iZXIgPSAwKVxuXHR7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFV0aWxzXG57XG5cdHB1YmxpYyBzdGF0aWMgcm91bmRUbyh2YWx1ZTogbnVtYmVyLCBjb3VudDogbnVtYmVyID0gMik6IG51bWJlclxuXHR7XG5cdFx0cmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiBNYXRoLnBvdygxMCwgY291bnQpKSAvIE1hdGgucG93KDEwLCBjb3VudCk7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGdldERlbHRhSW5TZWMoZGVsdGE6IG51bWJlciwgcm91bmQgPSA1KTogbnVtYmVyXG5cdHtcblx0XHRyZXR1cm4gVXRpbHMucm91bmRUbyhkZWx0YSAvIDEwMDAsIHJvdW5kKTtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgY29weU9iamVjdDxUPihvYmo6IFQpOiBUXG5cdHtcblx0XHRyZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKSBhcyBUO1xuXHR9XG5cblx0Ly8gVmVjdG9yXG5cdHB1YmxpYyBzdGF0aWMgZ2V0UG9zT25MaW5lKHAwOiBQb2ludCwgcDE6IFBvaW50LCBwZXJjZW50YWdlOiBudW1iZXIpOiBQb2ludFxuXHR7XG5cdFx0cmV0dXJuIG5ldyBQb2ludChcblx0XHRcdHAwLnggKiAoMS4wIC0gcGVyY2VudGFnZSkgKyBwMS54ICogcGVyY2VudGFnZSxcblx0XHRcdHAwLnkgKiAoMS4wIC0gcGVyY2VudGFnZSkgKyBwMS55ICogcGVyY2VudGFnZVxuXHRcdCk7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGxlbih2OiBQb2ludCk6IG51bWJlclxuXHR7XG5cdFx0cmV0dXJuIE1hdGguc3FydCh2LnggKiB2LnggKyB2LnkgKiB2LnkpO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBkZWx0YShwMDogUG9pbnQsIHAxOiBQb2ludCk6IFBvaW50XG5cdHtcblx0XHRyZXR1cm4gbmV3IFBvaW50KHAxLnggLSBwMC54LCBwMS55IC0gcDAueSk7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGFuZ2xlKHAwOiBQb2ludCwgcDE6IFBvaW50KTogbnVtYmVyXG5cdHtcblx0XHRyZXR1cm4gTWF0aC5hdGFuMihwMS55IC0gcDAueSwgcDEueCAtIHAwLngpICogMTgwIC8gTWF0aC5QSTtcblx0fVxufSIsImltcG9ydCBOb3ZhRUNTIGZyb20gXCJAbm92YS1lbmdpbmUvZWNzXCI7XG5pbXBvcnQge05vZGV9IGZyb20gXCJjY1wiO1xuaW1wb3J0IHtDb2Nvc0ZhY3RvcnlGdW5jfSBmcm9tIFwiLi4vLi4vZmFjdG9yaWVzL0NvY29zRmFjdG9yeVwiO1xuaW1wb3J0IHtJS2lsbGFibGVQcm9wc30gZnJvbSBcIi4vSUtpbGxhYmxlXCI7XG5pbXBvcnQge0VDb2Nvc05vZGVFdmVudHN9IGZyb20gXCIuLi8uLi9jb2Nvc0NvbXBvbmVudHMvRUNvY29zTm9kZUV2ZW50c1wiO1xuXG5leHBvcnQgY2xhc3MgVmlld0NvbXBvbmVudDxUID0gYW55PiBpbXBsZW1lbnRzIE5vdmFFQ1MuQ29tcG9uZW50LCBJS2lsbGFibGVQcm9wc1xue1xuICAgIHRhZzogc3RyaW5nID0gXCJWaWV3Q29tcG9uZW50XCI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfbm9kZTogTm9kZSB8IG51bGwgPSBudWxsLFxuICAgICAgICBwdWJsaWMgcHJlZmFiUGF0aDogc3RyaW5nID0gXCJcIixcbiAgICAgICAgcHVibGljIGRhdGE6IFQgfCBudWxsID0gbnVsbCxcbiAgICAgICAgcHVibGljIGZhY3RvcnlGdW5jOiBDb2Nvc0ZhY3RvcnlGdW5jIHwgbnVsbCA9IG51bGwsXG4gICAgICAgIHB1YmxpYyBraWxsZWQ6IGJvb2xlYW4gPSBmYWxzZVxuICAgIClcbiAgICB7XG4gICAgfVxuXG4gICAgZ2V0IG5vZGUoKTogTm9kZVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vZGU7XG4gICAgfVxuXG4gICAgc2V0IG5vZGUodmFsdWU6IE5vZGUpXG4gICAge1xuICAgICAgICB0aGlzLl9ub2RlID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0aGlzLmRhdGEgJiYgdGhpcy5mYWN0b3J5RnVuYylcbiAgICAgICAgICAgIHRoaXMuZmFjdG9yeUZ1bmModGhpcy5ub2RlLCB0aGlzLmRhdGEpO1xuXG4gICAgICAgIHRoaXMuX25vZGUub25jZShFQ29jb3NOb2RlRXZlbnRzLkFuaW1hdGlvbkNvbXBsZXRlLCAoKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmtpbGxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBOb3ZhRUNTLCB7RW5naW5lLCBFbmdpbmVFbnRpdHlMaXN0ZW5lciwgRW50aXR5fSBmcm9tIFwiQG5vdmEtZW5naW5lL2Vjc1wiO1xuaW1wb3J0IHtWaWV3Q29tcG9uZW50fSBmcm9tIFwiLi4vY29tcG9uZW50cy9WaWV3Q29tcG9uZW50XCI7XG5pbXBvcnQge2ZpbmQsIE5vZGUsIFByZWZhYiwgVUlUcmFuc2Zvcm19IGZyb20gXCJjY1wiO1xuaW1wb3J0IHtBc3NldHNMb2FkZXJ9IGZyb20gXCIuLi8uLi91dGlscy9Bc3NldHNMb2FkZXJcIjtcbmltcG9ydCB7SXRlbXNQb29sfSBmcm9tIFwiLi4vLi4vcG9vbC9JdGVtc1Bvb2xcIjtcbmltcG9ydCB7R2FtZUVuZ2luZX0gZnJvbSBcIi4uL0dhbWVFbmdpbmVcIjtcbmltcG9ydCB7SGl0Q29tcG9uZW50fSBmcm9tIFwiLi4vY29tcG9uZW50cy9IaXRDb21wb25lbnRcIjtcbmltcG9ydCB7Q29jb3NIaXRDb21wb25lbnR9IGZyb20gXCIuLi8uLi9jb2Nvc0NvbXBvbmVudHMvQ29jb3NIaXRDb21wb25lbnRcIjtcbmltcG9ydCB7Tm9kZU5hbWVzfSBmcm9tIFwiLi4vLi4vTm9kZU5hbWVzXCI7XG5pbXBvcnQge1Bvc2l0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3NpdGlvbkNvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgVmlld01hbmFnZW1lbnRTeXN0ZW0gZXh0ZW5kcyBOb3ZhRUNTLlN5c3RlbSBpbXBsZW1lbnRzIEVuZ2luZUVudGl0eUxpc3RlbmVyXG57XG4gICAgcHJvdGVjdGVkIGZhbWlseT86IE5vdmFFQ1MuRmFtaWx5O1xuICAgIHByaXZhdGUgX3ZpZXdQb29sTWFwOiBNYXA8c3RyaW5nLCBJdGVtc1Bvb2w+O1xuICAgIHByaXZhdGUgX3RvQWRkOiBFbnRpdHlbXSA9IFtdO1xuICAgIHByaXZhdGUgX3RvUmVtb3ZlOiBFbnRpdHlbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3Iodmlld1Bvb2xNYXA6IE1hcDxzdHJpbmcsIEl0ZW1zUG9vbD4pXG4gICAge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl92aWV3UG9vbE1hcCA9IHZpZXdQb29sTWFwO1xuICAgIH1cblxuICAgIG9uQXR0YWNoKGVuZ2luZTogR2FtZUVuZ2luZSk6IHZvaWRcbiAgICB7XG4gICAgICAgIHN1cGVyLm9uQXR0YWNoKGVuZ2luZSk7XG5cbiAgICAgICAgZW5naW5lLmFkZEVudGl0eUxpc3RlbmVyKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZmFtaWx5ID0gbmV3IE5vdmFFQ1MuRmFtaWx5QnVpbGRlcihlbmdpbmUpXG4gICAgICAgICAgICAuaW5jbHVkZShWaWV3Q29tcG9uZW50KVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGVuZ2luZTogR2FtZUVuZ2luZSwgZGVsdGE6IG51bWJlcik6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuX3RvQWRkLmZvckVhY2goKGVudGl0eSkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3Qgdmlld0NvbXBvbmVudCA9IGVudGl0eS5nZXRDb21wb25lbnQoVmlld0NvbXBvbmVudCk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU5vZGVGb3JFbnRpdHkoZW50aXR5LCB2aWV3Q29tcG9uZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3RvQWRkID0gW107XG5cbiAgICAgICAgdGhpcy5fdG9SZW1vdmUuZm9yRWFjaCgoZW50aXR5KSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmtpbGxFbnRpdHlWaWV3KGVudGl0eSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl90b1JlbW92ZSA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mYW1pbHkuZW50aXRpZXMubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuZmFtaWx5LmVudGl0aWVzW2ldO1xuICAgICAgICAgICAgY29uc3QgcG9zQ29tcCA9IGVudGl0eS5nZXRDb21wb25lbnQoUG9zaXRpb25Db21wb25lbnQpO1xuICAgICAgICAgICAgY29uc3Qgdmlld0NvbXBvbmVudCA9IGVudGl0eS5nZXRDb21wb25lbnQoVmlld0NvbXBvbmVudCk7XG4gICAgICAgICAgICBpZiAocG9zQ29tcCAmJiB2aWV3Q29tcG9uZW50Py5ub2RlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZpZXdDb21wb25lbnQubm9kZS5zZXRXb3JsZFBvc2l0aW9uKHBvc0NvbXAuY3VycmVudFgsIHBvc0NvbXAuY3VycmVudFksIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgb25EZXRhY2goZW5naW5lOiBFbmdpbmUpXG4gICAge1xuICAgICAgICB0aGlzLmZhbWlseS5lbnRpdGllcy5mb3JFYWNoKGVudGl0eSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmtpbGxFbnRpdHlWaWV3KGVudGl0eSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzdXBlci5vbkRldGFjaChlbmdpbmUpO1xuICAgIH1cblxuICAgIHByaXZhdGUga2lsbEVudGl0eVZpZXcoZW50aXR5OiBFbnRpdHkpOiB2b2lkXG4gICAge1xuICAgICAgICBjb25zdCB2aWV3Q29tcCA9IGVudGl0eS5nZXRDb21wb25lbnQ8Vmlld0NvbXBvbmVudD4oVmlld0NvbXBvbmVudCk7XG4gICAgICAgIGlmICh2aWV3Q29tcC5ub2RlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl92aWV3UG9vbE1hcC5nZXQodmlld0NvbXAucHJlZmFiUGF0aCkucmVsZWFzZSh2aWV3Q29tcC5ub2RlKTtcbiAgICAgICAgICAgIHZpZXdDb21wLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICAgICAgdmlld0NvbXAubm9kZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25FbnRpdHlBZGRlZChlbnRpdHk6IEVudGl0eSk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuX3RvQWRkLnB1c2goZW50aXR5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25FbnRpdHlSZW1vdmVkKGVudGl0eTogRW50aXR5KTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5fdG9SZW1vdmUucHVzaChlbnRpdHkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgY3JlYXRlTm9kZUZvckVudGl0eShlbnRpdHk6IE5vdmFFQ1MuRW50aXR5LCB2aWV3Q29tcDogVmlld0NvbXBvbmVudCk6IFByb21pc2U8dm9pZD5cbiAgICB7XG5cbiAgICAgICAgaWYgKCF0aGlzLl92aWV3UG9vbE1hcC5oYXModmlld0NvbXAucHJlZmFiUGF0aCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHByZWZhYjogUHJlZmFiID0gYXdhaXQgQXNzZXRzTG9hZGVyLmxvYWRQcmVmYWIodmlld0NvbXAucHJlZmFiUGF0aCk7XG4gICAgICAgICAgICB0aGlzLl92aWV3UG9vbE1hcC5zZXQodmlld0NvbXAucHJlZmFiUGF0aCwgbmV3IEl0ZW1zUG9vbChwcmVmYWIpLmluaXQoMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm9kZTogTm9kZSA9IHRoaXMuX3ZpZXdQb29sTWFwLmdldCh2aWV3Q29tcC5wcmVmYWJQYXRoKS5vYnRhaW4oKTtcbiAgICAgICAgY29uc3QgcGFyZW50OiBOb2RlID0gZmluZChOb2RlTmFtZXMuVmlld0NvbnRhaW5lcik7XG5cbiAgICAgICAgbm9kZS5zZXRXb3JsZFBvc2l0aW9uKDEwMDAsIDEwMDAsIDApO1xuICAgICAgICBpZiAocGFyZW50KVxuICAgICAgICB7XG4gICAgICAgICAgICBwYXJlbnQuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBlbnRpdHkuZ2V0Q29tcG9uZW50KFZpZXdDb21wb25lbnQpLm5vZGUgPSBub2RlO1xuXG4gICAgICAgICAgICAvLyBhbnQgdmlldyBjYW4gYml0IGhpdCAob3B0aW9uYWwpXG4gICAgICAgICAgICBpZiAoZW50aXR5Lmhhc0NvbXBvbmVudChIaXRDb21wb25lbnQpXG4gICAgICAgICAgICAgICAgJiYgbm9kZS5nZXRDb21wb25lbnQoQ29jb3NIaXRDb21wb25lbnQpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVudGl0eS5nZXRDb21wb25lbnQoSGl0Q29tcG9uZW50KS5oaXRUcmFuc2Zvcm0gPVxuICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChDb2Nvc0hpdENvbXBvbmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oaXROb2RlPy5nZXRDb21wb25lbnQoVUlUcmFuc2Zvcm0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKipcbiAqIE9jY3VycyB3aGVuIHN0YXRlIG1hY2hpbmUgaGFzIHdyb25nIG9yIGVtcHR5IChvciBldmVuIG51bGwpIGV4Y2VwdGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIFdyb25nTWFjaGluZVN0YXRlRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Jcbntcblx0LyoqXG5cdCAqIEluaXRpYWxpemVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBXcm9uZ01hY2hpbmVTdGF0ZUV4Y2VwdGlvbiBjbGFzcy5cblx0ICogQHBhcmFtIHBFcnJvck1lc3NhZ2UgLSBUaGUgbWVzc2FnZSB0aGF0IGRlc2NyaWJlcyB0aGUgZXJyb3IuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihwRXJyb3JNZXNzYWdlOiBzdHJpbmcpXG5cdHtcblx0XHRzdXBlcihwRXJyb3JNZXNzYWdlKTtcblx0XHQvLyBJdCdzIHdvcnRoIG1lbnRpb25pbmcgdGhhdCBPYmplY3Quc2V0UHJvdG90eXBlT2YgbmVlZHMgdG8gYmUgY2FsbGVkXG5cdFx0Ly8gaW1tZWRpYXRlbHkgYWZ0ZXIgYW55IHN1cGVyKC4uLikgY2FsbHMuXG5cblx0XHQvLyBTZXQgdGhlIHByb3RvdHlwZSBleHBsaWNpdGx5XG5cdFx0T2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFdyb25nTWFjaGluZVN0YXRlRXhjZXB0aW9uLnByb3RvdHlwZSk7XG5cdH1cbn0iLCIvKipcbiAqIE9jY3VycyB3aGVuIHRoZSBpbmRleCBpcyBub3QgcHJlc2VudGVkIGluIHRoZSBsaXN0IG9mIHN0YXRlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFdyb25nU3RhdGVJbmRleEV4Y2VwdGlvbiBleHRlbmRzIEVycm9yXG57XG5cdC8qKlxuXHQgKiBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgV3JvbmdTdGF0ZUluZGV4RXhjZXB0aW9uIGNsYXNzLlxuXHQgKiBAcGFyYW0gcEVycm9yTWVzc2FnZSAtIFRoZSBtZXNzYWdlIHRoYXQgZGVzY3JpYmVzIHRoZSBlcnJvci5cblx0ICovXG5cdGNvbnN0cnVjdG9yKHBFcnJvck1lc3NhZ2U6IHN0cmluZylcblx0e1xuXHRcdHN1cGVyKHBFcnJvck1lc3NhZ2UpO1xuXHRcdC8vIEl0J3Mgd29ydGggbWVudGlvbmluZyB0aGF0IE9iamVjdC5zZXRQcm90b3R5cGVPZiBuZWVkcyB0byBiZSBjYWxsZWRcblx0XHQvLyBpbW1lZGlhdGVseSBhZnRlciBhbnkgc3VwZXIoLi4uKSBjYWxscy5cblxuXHRcdC8vIFNldCB0aGUgcHJvdG90eXBlIGV4cGxpY2l0bHlcblx0XHRPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgV3JvbmdTdGF0ZUluZGV4RXhjZXB0aW9uLnByb3RvdHlwZSk7XG5cdH1cbn0iXX0=