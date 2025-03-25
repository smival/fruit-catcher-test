System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
    var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy,
        _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;
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
            Color = module.Color;
            Canvas = module.Canvas;
            UITransform = module.UITransform;
            instantiate = module.instantiate;
            Label = module.Label;
            RichText = module.RichText;
            Toggle = module.Toggle;
            Button = module.Button;
            director = module.director;
            Component = module.Component;
        }],
        execute: function () {
            var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
            cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
            var ccclass = _decorator.ccclass,
                property = _decorator.property;
            var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
                _inheritsLoose(DebugViewRuntimeControl, _Component);

                function DebugViewRuntimeControl() {
                    var _this;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }
                    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
                    _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));
                    _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));
                    _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));
                    _this._single = 0;
                    _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
                    _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
                    _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
                    _this.compositeModeToggleList = [];
                    _this.singleModeToggleList = [];
                    _this.miscModeToggleList = [];
                    _this.textComponentList = [];
                    _this.labelComponentList = [];
                    _this.textContentList = [];
                    _this.hideButtonLabel = void 0;
                    _this._currentColorIndex = 0;
                    _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
                    _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
                    return _this;
                }

                var _proto = DebugViewRuntimeControl.prototype;
                _proto.start = function start() {
                    // get canvas resolution
                    var canvas = this.node.parent.getComponent(Canvas);
                    if (!canvas) {
                        console.error('debug-view-runtime-control should be child of Canvas');
                        return;
                    }
                    var uiTransform = this.node.parent.getComponent(UITransform);
                    var halfScreenWidth = uiTransform.width * 0.5;
                    var halfScreenHeight = uiTransform.height * 0.5;
                    var x = -halfScreenWidth + halfScreenWidth * 0.1,
                        y = halfScreenHeight - halfScreenHeight * 0.1;
                    var width = 200,
                        height = 20;

                    // new nodes
                    var miscNode = this.node.getChildByName('MiscMode');
                    var buttonNode = instantiate(miscNode);
                    buttonNode.parent = this.node;
                    buttonNode.name = 'Buttons';
                    var titleNode = instantiate(miscNode);
                    titleNode.parent = this.node;
                    titleNode.name = 'Titles';

                    // title
                    for (var i = 0; i < 2; i++) {
                        var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
                        newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
                        newLabel.setScale(0.75, 0.75, 0.75);
                        newLabel.parent = titleNode;
                        var _labelComponent = newLabel.getComponent(Label);
                        _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
                        _labelComponent.color = Color.WHITE;
                        _labelComponent.overflow = 0;
                        this.labelComponentList[this.labelComponentList.length] = _labelComponent;
                    }
                    y -= height;
                    // single
                    var currentRow = 0;
                    for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
                        if (_i === this.strSingle.length >> 1) {
                            x += width;
                            currentRow = 0;
                        }
                        var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
                        newNode.setPosition(x, y - height * currentRow, 0.0);
                        newNode.setScale(0.5, 0.5, 0.5);
                        newNode.parent = this.singleModeToggle.parent;
                        var textComponent = newNode.getComponentInChildren(RichText);
                        textComponent.string = this.strSingle[_i];
                        this.textComponentList[this.textComponentList.length] = textComponent;
                        this.textContentList[this.textContentList.length] = textComponent.string;
                        newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
                        this.singleModeToggleList[_i] = newNode;
                    }
                    x += width;
                    // buttons
                    this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
                    this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
                    this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
                    this.EnableAllCompositeModeButton.parent = buttonNode;
                    var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
                    this.labelComponentList[this.labelComponentList.length] = labelComponent;
                    var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
                    changeColorButton.setPosition(x + 90, y, 0.0);
                    changeColorButton.setScale(0.5, 0.5, 0.5);
                    changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
                    changeColorButton.parent = buttonNode;
                    labelComponent = changeColorButton.getComponentInChildren(Label);
                    labelComponent.string = 'TextColor';
                    this.labelComponentList[this.labelComponentList.length] = labelComponent;
                    var HideButton = instantiate(this.EnableAllCompositeModeButton);
                    HideButton.setPosition(x + 200, y, 0.0);
                    HideButton.setScale(0.5, 0.5, 0.5);
                    HideButton.on(Button.EventType.CLICK, this.hideUI, this);
                    HideButton.parent = this.node.parent;
                    labelComponent = HideButton.getComponentInChildren(Label);
                    labelComponent.string = 'Hide UI';
                    this.labelComponentList[this.labelComponentList.length] = labelComponent;
                    this.hideButtonLabel = labelComponent;

                    // misc
                    y -= 40;
                    for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
                        var _newNode = instantiate(this.compositeModeToggle);
                        _newNode.setPosition(x, y - height * _i2, 0.0);
                        _newNode.setScale(0.5, 0.5, 0.5);
                        _newNode.parent = miscNode;
                        var _textComponent = _newNode.getComponentInChildren(RichText);
                        _textComponent.string = this.strMisc[_i2];
                        this.textComponentList[this.textComponentList.length] = _textComponent;
                        this.textContentList[this.textContentList.length] = _textComponent.string;
                        var toggleComponent = _newNode.getComponent(Toggle);
                        toggleComponent.isChecked = _i2 ? true : false;
                        _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
                        this.miscModeToggleList[_i2] = _newNode;
                    }

                    // composite
                    y -= 150;
                    for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
                        var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
                        _newNode2.setPosition(x, y - height * _i3, 0.0);
                        _newNode2.setScale(0.5, 0.5, 0.5);
                        _newNode2.parent = this.compositeModeToggle.parent;
                        var _textComponent2 = _newNode2.getComponentInChildren(RichText);
                        _textComponent2.string = this.strComposite[_i3];
                        this.textComponentList[this.textComponentList.length] = _textComponent2;
                        this.textContentList[this.textContentList.length] = _textComponent2.string;
                        _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
                        this.compositeModeToggleList[_i3] = _newNode2;
                    }
                };
                _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
                    var tempText = new String(textUI);
                    var findIndex = tempText.search('>');
                    if (findIndex === -1) {
                        return textUI === textDescription;
                    } else {
                        tempText = tempText.substr(findIndex + 1);
                        tempText = tempText.substr(0, tempText.search('<'));
                        return tempText === textDescription;
                    }
                };
                _proto.toggleSingleMode = function toggleSingleMode(toggle) {
                    var debugView = director.root.debugView;
                    var textComponent = toggle.getComponentInChildren(RichText);
                    for (var i = 0; i < this.strSingle.length; i++) {
                        if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
                            debugView.singleMode = i;
                        }
                    }
                };
                _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
                    var debugView = director.root.debugView;
                    var textComponent = toggle.getComponentInChildren(RichText);
                    for (var i = 0; i < this.strComposite.length; i++) {
                        if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
                            debugView.enableCompositeMode(i, toggle.isChecked);
                        }
                    }
                };
                _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
                    var debugView = director.root.debugView;
                    debugView.lightingWithAlbedo = toggle.isChecked;
                };
                _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
                    var debugView = director.root.debugView;
                    debugView.csmLayerColoration = toggle.isChecked;
                };
                _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
                    var debugView = director.root.debugView;
                    debugView.enableAllCompositeMode(true);
                    for (var i = 0; i < this.compositeModeToggleList.length; i++) {
                        var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
                        _toggleComponent.isChecked = true;
                    }
                    var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
                    toggleComponent.isChecked = false;
                    debugView.csmLayerColoration = false;
                    toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
                    toggleComponent.isChecked = true;
                    debugView.lightingWithAlbedo = true;
                };
                _proto.hideUI = function hideUI(button) {
                    var titleNode = this.node.getChildByName('Titles');
                    var activeValue = !titleNode.active;
                    this.singleModeToggleList[0].parent.active = activeValue;
                    this.miscModeToggleList[0].parent.active = activeValue;
                    this.compositeModeToggleList[0].parent.active = activeValue;
                    this.EnableAllCompositeModeButton.parent.active = activeValue;
                    titleNode.active = activeValue;
                    this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
                };
                _proto.changeTextColor = function changeTextColor(button) {
                    this._currentColorIndex++;
                    if (this._currentColorIndex >= this.strColor.length) {
                        this._currentColorIndex = 0;
                    }
                    for (var i = 0; i < this.textComponentList.length; i++) {
                        this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
                    }
                    for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
                        this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
                    }
                };
                _proto.onLoad = function onLoad() {
                };
                _proto.update = function update(deltaTime) {
                };
                return DebugViewRuntimeControl;
            }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function initializer() {
                    return null;
                }
            })), _class2)) || _class));
            cclegacy._RF.pop();
        }
    };
});

System.register("chunks:///_virtual/internal", ['./debug-view-runtime-control.ts'], function () {
    return {
        setters: [null],
        execute: function () {
        }
    };
});

(function(r) {
  r('virtual:///prerequisite-imports/internal', 'chunks:///_virtual/internal');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ZpbGU6L0FwcGxpY2F0aW9ucy9Db2Nvcy9DcmVhdG9yLzMuOC41L0NvY29zQ3JlYXRvci5hcHAvQ29udGVudHMvUmVzb3VyY2VzL3Jlc291cmNlcy8zZC9lbmdpbmUvZWRpdG9yL2Fzc2V0cy90b29scy9maWxlOi9BcHBsaWNhdGlvbnMvQ29jb3MvQ3JlYXRvci8zLjguNS9Db2Nvc0NyZWF0b3IuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9yZXNvdXJjZXMvM2QvZW5naW5lL2VkaXRvci9hc3NldHMvdG9vbHMvZGVidWctdmlldy1ydW50aW1lLWNvbnRyb2wudHMiXSwibmFtZXMiOlsiY2NjbGFzcyIsIl9kZWNvcmF0b3IiLCJwcm9wZXJ0eSIsIkRlYnVnVmlld1J1bnRpbWVDb250cm9sIiwiX2RlYyIsIl9kZWMyIiwiTm9kZSIsIl9kZWMzIiwiX2RlYzQiLCJfY2xhc3MiLCJfY2xhc3MyIiwiX0NvbXBvbmVudCIsIl9pbmhlcml0c0xvb3NlIiwiX3RoaXMiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsIl9pbml0aWFsaXplckRlZmluZVByb3BlcnR5IiwiX2Rlc2NyaXB0b3IiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiX2Rlc2NyaXB0b3IyIiwiX2Rlc2NyaXB0b3IzIiwiX3NpbmdsZSIsInN0clNpbmdsZSIsInN0ckNvbXBvc2l0ZSIsInN0ck1pc2MiLCJjb21wb3NpdGVNb2RlVG9nZ2xlTGlzdCIsInNpbmdsZU1vZGVUb2dnbGVMaXN0IiwibWlzY01vZGVUb2dnbGVMaXN0IiwidGV4dENvbXBvbmVudExpc3QiLCJsYWJlbENvbXBvbmVudExpc3QiLCJ0ZXh0Q29udGVudExpc3QiLCJoaWRlQnV0dG9uTGFiZWwiLCJfY3VycmVudENvbG9ySW5kZXgiLCJzdHJDb2xvciIsImNvbG9yIiwiQ29sb3IiLCJXSElURSIsIkJMQUNLIiwiUkVEIiwiR1JFRU4iLCJCTFVFIiwiX3Byb3RvIiwicHJvdG90eXBlIiwic3RhcnQiLCJjYW52YXMiLCJub2RlIiwicGFyZW50IiwiZ2V0Q29tcG9uZW50IiwiQ2FudmFzIiwiY29uc29sZSIsImVycm9yIiwidWlUcmFuc2Zvcm0iLCJVSVRyYW5zZm9ybSIsImhhbGZTY3JlZW5XaWR0aCIsIndpZHRoIiwiaGFsZlNjcmVlbkhlaWdodCIsImhlaWdodCIsIngiLCJ5IiwibWlzY05vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImJ1dHRvbk5vZGUiLCJpbnN0YW50aWF0ZSIsIm5hbWUiLCJ0aXRsZU5vZGUiLCJpIiwibmV3TGFiZWwiLCJFbmFibGVBbGxDb21wb3NpdGVNb2RlQnV0dG9uIiwic2V0UG9zaXRpb24iLCJzZXRTY2FsZSIsImxhYmVsQ29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJvdmVyZmxvdyIsImN1cnJlbnRSb3ciLCJuZXdOb2RlIiwic2luZ2xlTW9kZVRvZ2dsZSIsInRleHRDb21wb25lbnQiLCJnZXRDb21wb25lbnRJbkNoaWxkcmVuIiwiUmljaFRleHQiLCJvbiIsIlRvZ2dsZSIsIkV2ZW50VHlwZSIsIlRPR0dMRSIsInRvZ2dsZVNpbmdsZU1vZGUiLCJCdXR0b24iLCJDTElDSyIsImVuYWJsZUFsbENvbXBvc2l0ZU1vZGUiLCJjaGFuZ2VDb2xvckJ1dHRvbiIsImNoYW5nZVRleHRDb2xvciIsIkhpZGVCdXR0b24iLCJoaWRlVUkiLCJjb21wb3NpdGVNb2RlVG9nZ2xlIiwidG9nZ2xlQ29tcG9uZW50IiwiaXNDaGVja2VkIiwidG9nZ2xlTGlnaHRpbmdXaXRoQWxiZWRvIiwidG9nZ2xlQ1NNQ29sb3JhdGlvbiIsInRvZ2dsZUNvbXBvc2l0ZU1vZGUiLCJpc1RleHRNYXRjaGVkIiwidGV4dFVJIiwidGV4dERlc2NyaXB0aW9uIiwidGVtcFRleHQiLCJTdHJpbmciLCJmaW5kSW5kZXgiLCJzZWFyY2giLCJzdWJzdHIiLCJ0b2dnbGUiLCJkZWJ1Z1ZpZXciLCJkaXJlY3RvciIsInJvb3QiLCJzaW5nbGVNb2RlIiwiZW5hYmxlQ29tcG9zaXRlTW9kZSIsImxpZ2h0aW5nV2l0aEFsYmVkbyIsImNzbUxheWVyQ29sb3JhdGlvbiIsImJ1dHRvbiIsImFjdGl2ZVZhbHVlIiwiYWN0aXZlIiwib25Mb2FkIiwidXBkYXRlIiwiZGVsdGFUaW1lIiwiQ29tcG9uZW50IiwiX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvciIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsImluaXRpYWxpemVyIiwiX1JGIiwicG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUNBLElBQVFBLE9BQU8sR0FBZUMsVUFBVSxDQUFoQ0QsT0FBTztRQUFFRSxRQUFRLEdBQUtELFVBQVUsQ0FBdkJDLFFBQVE7VUFHWkMsdUJBQXVCLHVDQUFBQyxJQUFBLEdBRG5DSixPQUFPLENBQUMsa0NBQWtDLENBQUMsRUFBQUssS0FBQSxHQUV2Q0gsUUFBUSxDQUFDSSxJQUFJLENBQUMsRUFBQUMsS0FBQSxHQUVkTCxRQUFRLENBQUNJLElBQUksQ0FBQyxFQUFBRSxLQUFBLEdBRWROLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLEVBQUFGLElBQUEsQ0FBQUssTUFBQSxJQUFBQyxPQUFBLDBCQUFBQyxVQUFBO1FBQUFDLGNBQUEsQ0FBQVQsdUJBQUEsRUFBQVEsVUFBQTtRQUFBLFNBQUFSO1VBQUEsSUFBQVUsS0FBQTtVQUFBLFNBQUFDLElBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQUFDLElBQUEsT0FBQUMsS0FBQSxDQUFBSixJQUFBLEdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7WUFBQUYsSUFBQSxDQUFBRSxJQUFBLElBQUFKLFNBQUEsQ0FBQUksSUFBQTs7VUFBQU4sS0FBQSxHQUFBRixVQUFBLENBQUFTLElBQUEsQ0FBQUMsS0FBQSxDQUFBVixVQUFBLFNBQUFXLE1BQUEsQ0FBQUwsSUFBQTtVQUFBTSwwQkFBQSxDQUFBVixLQUFBLHlCQUFBVyxXQUFBLEVBQUFDLHNCQUFB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NEUsTUFBTSxHQUFOLFNBQUFBLFNBQVMsRUFDUjtRQUFBNUUsTUFBQSxDQUNENkUsTUFBTSxHQUFOLFNBQUFBLE9BQU9DLFNBQWlCLEVBQUUsRUFDekI7UUFBQSxPQUFBM0gsdUJBQUE7TUFBQSxFQXhUd0M0SCxTQUFTLElBQUF2RyxXQUFBLEdBQUF3Ryx5QkFBQSxDQUFBdEgsT0FBQSxDQUFBdUMsU0FBQSwwQkFBQTVDLEtBQUE7UUFBQTRILFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxRQUFBO1FBQUFDLFdBQUEsV0FBQUE7VUFBQSxPQUVmLElBQUk7O01BQUEsSUFBQTFHLFlBQUEsR0FBQXNHLHlCQUFBLENBQUF0SCxPQUFBLENBQUF1QyxTQUFBLHVCQUFBMUMsS0FBQTtRQUFBMEgsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFFBQUE7UUFBQUMsV0FBQSxXQUFBQTtVQUFBLE9BRVAsSUFBSTs7TUFBQSxJQUFBekcsWUFBQSxHQUFBcUcseUJBQUEsQ0FBQXRILE9BQUEsQ0FBQXVDLFNBQUEsbUNBQUF6QyxLQUFBO1FBQUF5SCxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsUUFBQTtRQUFBQyxXQUFBLFdBQUFBO1VBQUEsT0FFUSxJQUFJOztNQUFBLEtBQUExSCxPQUFBLE1BQUFELE1BQUE7Y0FtVG5ELENBQUE0SCxHQUFBLENBQUFDLEdBQUEiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sb3IsIENhbnZhcywgVUlUcmFuc2Zvcm0sIGluc3RhbnRpYXRlLCBtYXRoLCBUb2dnbGUsIFRleHR1cmVDdWJlLCBfZGVjb3JhdG9yLCBDb21wb25lbnQsIEJ1dHRvbiwgbGFiZWxBc3NlbWJsZXIsIGdhbWUsIGRpcmVjdG9yLCBOb2RlLCBTY2VuZSwgcmVuZGVyZXIsIENhbWVyYUNvbXBvbmVudCwgTGFiZWwsIEZvcndhcmRQaXBlbGluZSwgUmljaFRleHQgfSBmcm9tICdjYyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnaW50ZXJuYWwuRGVidWdWaWV3UnVudGltZUNvbnRyb2wnKVxuZXhwb3J0IGNsYXNzIERlYnVnVmlld1J1bnRpbWVDb250cm9sIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoTm9kZSlcbiAgICBjb21wb3NpdGVNb2RlVG9nZ2xlOiBOb2RlIHwgbnVsbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KE5vZGUpXG4gICAgc2luZ2xlTW9kZVRvZ2dsZTogTm9kZSB8IG51bGwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShOb2RlKVxuICAgIEVuYWJsZUFsbENvbXBvc2l0ZU1vZGVCdXR0b246IE5vZGUgfCBudWxsID0gbnVsbDtcblx0X3NpbmdsZTogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgc3RyU2luZ2xlOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgJ05vIFNpbmdsZSBEZWJ1ZycsXG4gICAgICAgICdWZXJ0ZXggQ29sb3InLFxuICAgICAgICAnVmVydGV4IE5vcm1hbCcsXG4gICAgICAgICdWZXJ0ZXggVGFuZ2VudCcsXG4gICAgICAgICdXb3JsZCBQb3NpdGlvbicsXG4gICAgICAgICdWZXJ0ZXggTWlycm9yJyxcbiAgICAgICAgJ0ZhY2UgU2lkZScsXG4gICAgICAgICdVVjAnLFxuICAgICAgICAnVVYxJyxcbiAgICAgICAgJ1VWIExpZ2h0bWFwJyxcbiAgICAgICAgJ1Byb2plY3QgRGVwdGgnLFxuICAgICAgICAnTGluZWFyIERlcHRoJyxcblxuICAgICAgICAnRnJhZ21lbnQgTm9ybWFsJyxcbiAgICAgICAgJ0ZyYWdtZW50IFRhbmdlbnQnLFxuICAgICAgICAnRnJhZ21lbnQgQmlub3JtYWwnLFxuICAgICAgICAnQmFzZSBDb2xvcicsXG4gICAgICAgICdEaWZmdXNlIENvbG9yJyxcbiAgICAgICAgJ1NwZWN1bGFyIENvbG9yJyxcbiAgICAgICAgJ1RyYW5zcGFyZW5jeScsXG4gICAgICAgICdNZXRhbGxpYycsXG4gICAgICAgICdSb3VnaG5lc3MnLFxuICAgICAgICAnU3BlY3VsYXIgSW50ZW5zaXR5JyxcbiAgICAgICAgJ0lPUicsXG5cbiAgICAgICAgJ0RpcmVjdCBEaWZmdXNlJyxcbiAgICAgICAgJ0RpcmVjdCBTcGVjdWxhcicsXG4gICAgICAgICdEaXJlY3QgQWxsJyxcbiAgICAgICAgJ0VudiBEaWZmdXNlJyxcbiAgICAgICAgJ0VudiBTcGVjdWxhcicsXG4gICAgICAgICdFbnYgQWxsJyxcbiAgICAgICAgJ0VtaXNzaXZlJyxcbiAgICAgICAgJ0xpZ2h0IE1hcCcsXG4gICAgICAgICdTaGFkb3cnLFxuICAgICAgICAnQU8nLFxuXG4gICAgICAgICdGcmVzbmVsJyxcbiAgICAgICAgJ0RpcmVjdCBUcmFuc21pdCBEaWZmdXNlJyxcbiAgICAgICAgJ0RpcmVjdCBUcmFuc21pdCBTcGVjdWxhcicsXG4gICAgICAgICdFbnYgVHJhbnNtaXQgRGlmZnVzZScsXG4gICAgICAgICdFbnYgVHJhbnNtaXQgU3BlY3VsYXInLFxuICAgICAgICAnVHJhbnNtaXQgQWxsJyxcbiAgICAgICAgJ0RpcmVjdCBJbnRlcm5hbCBTcGVjdWxhcicsXG4gICAgICAgICdFbnYgSW50ZXJuYWwgU3BlY3VsYXInLFxuICAgICAgICAnSW50ZXJuYWwgQWxsJyxcblxuICAgICAgICAnRm9nJyxcbiAgICBdO1xuICAgIHByaXZhdGUgc3RyQ29tcG9zaXRlOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgJ0RpcmVjdCBEaWZmdXNlJyxcbiAgICAgICAgJ0RpcmVjdCBTcGVjdWxhcicsXG4gICAgICAgICdFbnYgRGlmZnVzZScsXG4gICAgICAgICdFbnYgU3BlY3VsYXInLFxuICAgICAgICAnRW1pc3NpdmUnLFxuICAgICAgICAnTGlnaHQgTWFwJyxcbiAgICAgICAgJ1NoYWRvdycsXG4gICAgICAgICdBTycsXG5cbiAgICAgICAgJ05vcm1hbCBNYXAnLFxuICAgICAgICAnRm9nJyxcblxuICAgICAgICAnVG9uZSBNYXBwaW5nJyxcbiAgICAgICAgJ0dhbW1hIENvcnJlY3Rpb24nLFxuXG4gICAgICAgICdGcmVzbmVsJyxcbiAgICAgICAgJ1RyYW5zbWl0IERpZmZ1c2UnLFxuICAgICAgICAnVHJhbnNtaXQgU3BlY3VsYXInLFxuICAgICAgICAnSW50ZXJuYWwgU3BlY3VsYXInLFxuICAgICAgICAnVFQnLFxuICAgIF07XG4gICAgcHJpdmF0ZSBzdHJNaXNjOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgJ0NTTSBMYXllciBDb2xvcmF0aW9uJyxcbiAgICAgICAgJ0xpZ2h0aW5nIFdpdGggQWxiZWRvJyxcbiAgICBdO1xuXG4gICAgcHJpdmF0ZSBjb21wb3NpdGVNb2RlVG9nZ2xlTGlzdDogTm9kZVtdID0gW107XG4gICAgcHJpdmF0ZSBzaW5nbGVNb2RlVG9nZ2xlTGlzdDogTm9kZVtdID0gW107XG4gICAgcHJpdmF0ZSBtaXNjTW9kZVRvZ2dsZUxpc3Q6IE5vZGVbXSA9IFtdO1xuICAgIHByaXZhdGUgdGV4dENvbXBvbmVudExpc3Q6IFJpY2hUZXh0W10gPSBbXTtcbiAgICBwcml2YXRlIGxhYmVsQ29tcG9uZW50TGlzdDogTGFiZWxbXSA9IFtdO1xuICAgIHByaXZhdGUgdGV4dENvbnRlbnRMaXN0OiBzdHJpbmdbXSA9IFtdO1xuICAgIHByaXZhdGUgaGlkZUJ1dHRvbkxhYmVsOiBMYWJlbDtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8gZ2V0IGNhbnZhcyByZXNvbHV0aW9uXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KENhbnZhcyk7XG4gICAgICAgIGlmICghY2FudmFzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdkZWJ1Zy12aWV3LXJ1bnRpbWUtY29udHJvbCBzaG91bGQgYmUgY2hpbGQgb2YgQ2FudmFzJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1aVRyYW5zZm9ybSA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFVJVHJhbnNmb3JtKTtcbiAgICAgICAgY29uc3QgaGFsZlNjcmVlbldpZHRoID0gdWlUcmFuc2Zvcm0ud2lkdGggKiAwLjU7XG4gICAgICAgIGNvbnN0IGhhbGZTY3JlZW5IZWlnaHQgPSB1aVRyYW5zZm9ybS5oZWlnaHQgKiAwLjU7XG5cbiAgICAgICAgbGV0IHggPSAtaGFsZlNjcmVlbldpZHRoICsgaGFsZlNjcmVlbldpZHRoICogMC4xLCB5ID0gaGFsZlNjcmVlbkhlaWdodCAtIGhhbGZTY3JlZW5IZWlnaHQgKiAwLjE7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gMjAwLCBoZWlnaHQgPSAyMDtcblxuICAgICAgICAvLyBuZXcgbm9kZXNcbiAgICAgICAgY29uc3QgbWlzY05vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ01pc2NNb2RlJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbk5vZGUgPSBpbnN0YW50aWF0ZShtaXNjTm9kZSk7XG4gICAgICAgIGJ1dHRvbk5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICBidXR0b25Ob2RlLm5hbWUgPSAnQnV0dG9ucyc7XG4gICAgICAgIGNvbnN0IHRpdGxlTm9kZSA9IGluc3RhbnRpYXRlKG1pc2NOb2RlKTtcbiAgICAgICAgdGl0bGVOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgdGl0bGVOb2RlLm5hbWUgPSAnVGl0bGVzJztcblxuICAgICAgICAvLyB0aXRsZVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbmV3TGFiZWwgPSBpbnN0YW50aWF0ZSh0aGlzLkVuYWJsZUFsbENvbXBvc2l0ZU1vZGVCdXR0b24uZ2V0Q2hpbGRCeU5hbWUoJ0xhYmVsJykpO1xuICAgICAgICAgICAgbmV3TGFiZWwuc2V0UG9zaXRpb24oeCArIChpID4gMCA/IDUwICsgd2lkdGggKiAyIDogMTUwKSwgeSwgMC4wKTtcbiAgICAgICAgICAgIG5ld0xhYmVsLnNldFNjYWxlKDAuNzUsIDAuNzUsIDAuNzUpO1xuICAgICAgICAgICAgbmV3TGFiZWwucGFyZW50ID0gdGl0bGVOb2RlO1xuICAgICAgICAgICAgY29uc3QgbGFiZWxDb21wb25lbnQgPSBuZXdMYWJlbC5nZXRDb21wb25lbnQoTGFiZWwpO1xuICAgICAgICAgICAgbGFiZWxDb21wb25lbnQuc3RyaW5nID0gaSA/ICctLS0tLS0tLS0tQ29tcG9zaXRlIE1vZGUtLS0tLS0tLS0tJyA6ICctLS0tLS0tLS0tU2luZ2xlIE1vZGUtLS0tLS0tLS0tJztcbiAgICAgICAgICAgIGxhYmVsQ29tcG9uZW50LmNvbG9yID0gQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICBsYWJlbENvbXBvbmVudC5vdmVyZmxvdyA9IDA7XG4gICAgICAgICAgICB0aGlzLmxhYmVsQ29tcG9uZW50TGlzdFt0aGlzLmxhYmVsQ29tcG9uZW50TGlzdC5sZW5ndGhdID0gbGFiZWxDb21wb25lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICB5IC09IGhlaWdodDtcbiAgICAgICAgLy8gc2luZ2xlXG4gICAgICAgIGxldCBjdXJyZW50Um93ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0clNpbmdsZS5sZW5ndGg7IGkrKywgY3VycmVudFJvdysrKSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gdGhpcy5zdHJTaW5nbGUubGVuZ3RoID4+IDEpIHtcbiAgICAgICAgICAgICAgICB4ICs9IHdpZHRoO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRSb3cgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmV3Tm9kZSA9IGkgPyBpbnN0YW50aWF0ZSh0aGlzLnNpbmdsZU1vZGVUb2dnbGUpIDogdGhpcy5zaW5nbGVNb2RlVG9nZ2xlO1xuICAgICAgICAgICAgbmV3Tm9kZS5zZXRQb3NpdGlvbih4LCB5IC0gaGVpZ2h0ICogY3VycmVudFJvdywgMC4wKTtcbiAgICAgICAgICAgIG5ld05vZGUuc2V0U2NhbGUoMC41LCAwLjUsIDAuNSk7XG4gICAgICAgICAgICBuZXdOb2RlLnBhcmVudCA9IHRoaXMuc2luZ2xlTW9kZVRvZ2dsZS5wYXJlbnQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHRleHRDb21wb25lbnQgPSBuZXdOb2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oUmljaFRleHQpO1xuICAgICAgICAgICAgdGV4dENvbXBvbmVudC5zdHJpbmcgPSB0aGlzLnN0clNpbmdsZVtpXTtcbiAgICAgICAgICAgIHRoaXMudGV4dENvbXBvbmVudExpc3RbdGhpcy50ZXh0Q29tcG9uZW50TGlzdC5sZW5ndGhdID0gdGV4dENvbXBvbmVudDtcbiAgICAgICAgICAgIHRoaXMudGV4dENvbnRlbnRMaXN0W3RoaXMudGV4dENvbnRlbnRMaXN0Lmxlbmd0aF0gPSB0ZXh0Q29tcG9uZW50LnN0cmluZztcblxuICAgICAgICAgICAgbmV3Tm9kZS5vbihUb2dnbGUuRXZlbnRUeXBlLlRPR0dMRSwgdGhpcy50b2dnbGVTaW5nbGVNb2RlLCB0aGlzKTtcblxuICAgICAgICAgICAgdGhpcy5zaW5nbGVNb2RlVG9nZ2xlTGlzdFtpXSA9IG5ld05vZGU7XG4gICAgICAgIH1cblxuICAgICAgICB4ICs9IHdpZHRoO1xuICAgICAgICAvLyBidXR0b25zXG4gICAgICAgIHRoaXMuRW5hYmxlQWxsQ29tcG9zaXRlTW9kZUJ1dHRvbi5zZXRQb3NpdGlvbih4ICsgMTUsIHksIDAuMCk7XG4gICAgICAgIHRoaXMuRW5hYmxlQWxsQ29tcG9zaXRlTW9kZUJ1dHRvbi5zZXRTY2FsZSgwLjUsIDAuNSwgMC41KTtcbiAgICAgICAgdGhpcy5FbmFibGVBbGxDb21wb3NpdGVNb2RlQnV0dG9uLm9uKEJ1dHRvbi5FdmVudFR5cGUuQ0xJQ0ssIHRoaXMuZW5hYmxlQWxsQ29tcG9zaXRlTW9kZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuRW5hYmxlQWxsQ29tcG9zaXRlTW9kZUJ1dHRvbi5wYXJlbnQgPSBidXR0b25Ob2RlO1xuICAgICAgICBsZXQgbGFiZWxDb21wb25lbnQgPSB0aGlzLkVuYWJsZUFsbENvbXBvc2l0ZU1vZGVCdXR0b24uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihMYWJlbCk7XG4gICAgICAgIHRoaXMubGFiZWxDb21wb25lbnRMaXN0W3RoaXMubGFiZWxDb21wb25lbnRMaXN0Lmxlbmd0aF0gPSBsYWJlbENvbXBvbmVudDtcblxuICAgICAgICBjb25zdCBjaGFuZ2VDb2xvckJ1dHRvbiA9IGluc3RhbnRpYXRlKHRoaXMuRW5hYmxlQWxsQ29tcG9zaXRlTW9kZUJ1dHRvbik7XG4gICAgICAgIGNoYW5nZUNvbG9yQnV0dG9uLnNldFBvc2l0aW9uKHggKyA5MCwgeSwgMC4wKTtcbiAgICAgICAgY2hhbmdlQ29sb3JCdXR0b24uc2V0U2NhbGUoMC41LCAwLjUsIDAuNSk7XG4gICAgICAgIGNoYW5nZUNvbG9yQnV0dG9uLm9uKEJ1dHRvbi5FdmVudFR5cGUuQ0xJQ0ssIHRoaXMuY2hhbmdlVGV4dENvbG9yLCB0aGlzKTtcbiAgICAgICAgY2hhbmdlQ29sb3JCdXR0b24ucGFyZW50ID0gYnV0dG9uTm9kZTtcbiAgICAgICAgbGFiZWxDb21wb25lbnQgPSBjaGFuZ2VDb2xvckJ1dHRvbi5nZXRDb21wb25lbnRJbkNoaWxkcmVuKExhYmVsKTtcbiAgICAgICAgbGFiZWxDb21wb25lbnQuc3RyaW5nID0gJ1RleHRDb2xvcic7XG4gICAgICAgIHRoaXMubGFiZWxDb21wb25lbnRMaXN0W3RoaXMubGFiZWxDb21wb25lbnRMaXN0Lmxlbmd0aF0gPSBsYWJlbENvbXBvbmVudDtcblxuICAgICAgICBjb25zdCBIaWRlQnV0dG9uID0gaW5zdGFudGlhdGUodGhpcy5FbmFibGVBbGxDb21wb3NpdGVNb2RlQnV0dG9uKTtcbiAgICAgICAgSGlkZUJ1dHRvbi5zZXRQb3NpdGlvbih4ICsgMjAwLCB5LCAwLjApO1xuICAgICAgICBIaWRlQnV0dG9uLnNldFNjYWxlKDAuNSwgMC41LCAwLjUpO1xuICAgICAgICBIaWRlQnV0dG9uLm9uKEJ1dHRvbi5FdmVudFR5cGUuQ0xJQ0ssIHRoaXMuaGlkZVVJLCB0aGlzKTtcbiAgICAgICAgSGlkZUJ1dHRvbi5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xuICAgICAgICBsYWJlbENvbXBvbmVudCA9IEhpZGVCdXR0b24uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihMYWJlbCk7XG4gICAgICAgIGxhYmVsQ29tcG9uZW50LnN0cmluZyA9ICdIaWRlIFVJJztcbiAgICAgICAgdGhpcy5sYWJlbENvbXBvbmVudExpc3RbdGhpcy5sYWJlbENvbXBvbmVudExpc3QubGVuZ3RoXSA9IGxhYmVsQ29tcG9uZW50O1xuICAgICAgICB0aGlzLmhpZGVCdXR0b25MYWJlbCA9IGxhYmVsQ29tcG9uZW50O1xuXG4gICAgICAgIC8vIG1pc2NcbiAgICAgICAgeSAtPSA0MDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0ck1pc2MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld05vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmNvbXBvc2l0ZU1vZGVUb2dnbGUpO1xuICAgICAgICAgICAgbmV3Tm9kZS5zZXRQb3NpdGlvbih4LCB5IC0gaGVpZ2h0ICogaSwgMC4wKTtcbiAgICAgICAgICAgIG5ld05vZGUuc2V0U2NhbGUoMC41LCAwLjUsIDAuNSk7XG4gICAgICAgICAgICBuZXdOb2RlLnBhcmVudCA9IG1pc2NOb2RlO1xuXG4gICAgICAgICAgICBjb25zdCB0ZXh0Q29tcG9uZW50ID0gbmV3Tm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFJpY2hUZXh0KTtcbiAgICAgICAgICAgIHRleHRDb21wb25lbnQuc3RyaW5nID0gdGhpcy5zdHJNaXNjW2ldO1xuICAgICAgICAgICAgdGhpcy50ZXh0Q29tcG9uZW50TGlzdFt0aGlzLnRleHRDb21wb25lbnRMaXN0Lmxlbmd0aF0gPSB0ZXh0Q29tcG9uZW50O1xuICAgICAgICAgICAgdGhpcy50ZXh0Q29udGVudExpc3RbdGhpcy50ZXh0Q29udGVudExpc3QubGVuZ3RoXSA9IHRleHRDb21wb25lbnQuc3RyaW5nO1xuXG4gICAgICAgICAgICBjb25zdCB0b2dnbGVDb21wb25lbnQgPSBuZXdOb2RlLmdldENvbXBvbmVudChUb2dnbGUpO1xuICAgICAgICAgICAgdG9nZ2xlQ29tcG9uZW50LmlzQ2hlY2tlZCA9IGkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICBuZXdOb2RlLm9uKFRvZ2dsZS5FdmVudFR5cGUuVE9HR0xFLCBpID8gdGhpcy50b2dnbGVMaWdodGluZ1dpdGhBbGJlZG8gOiB0aGlzLnRvZ2dsZUNTTUNvbG9yYXRpb24sIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5taXNjTW9kZVRvZ2dsZUxpc3RbaV0gPSBuZXdOb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29tcG9zaXRlXG4gICAgICAgIHkgLT0gMTUwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RyQ29tcG9zaXRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdOb2RlID0gaSA/IGluc3RhbnRpYXRlKHRoaXMuY29tcG9zaXRlTW9kZVRvZ2dsZSkgOiB0aGlzLmNvbXBvc2l0ZU1vZGVUb2dnbGU7XG4gICAgICAgICAgICBuZXdOb2RlLnNldFBvc2l0aW9uKHgsIHkgLSBoZWlnaHQgKiBpLCAwLjApO1xuICAgICAgICAgICAgbmV3Tm9kZS5zZXRTY2FsZSgwLjUsIDAuNSwgMC41KTtcbiAgICAgICAgICAgIG5ld05vZGUucGFyZW50ID0gdGhpcy5jb21wb3NpdGVNb2RlVG9nZ2xlLnBhcmVudDtcblxuICAgICAgICAgICAgY29uc3QgdGV4dENvbXBvbmVudCA9IG5ld05vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihSaWNoVGV4dCk7XG4gICAgICAgICAgICB0ZXh0Q29tcG9uZW50LnN0cmluZyA9IHRoaXMuc3RyQ29tcG9zaXRlW2ldO1xuICAgICAgICAgICAgdGhpcy50ZXh0Q29tcG9uZW50TGlzdFt0aGlzLnRleHRDb21wb25lbnRMaXN0Lmxlbmd0aF0gPSB0ZXh0Q29tcG9uZW50O1xuICAgICAgICAgICAgdGhpcy50ZXh0Q29udGVudExpc3RbdGhpcy50ZXh0Q29udGVudExpc3QubGVuZ3RoXSA9IHRleHRDb21wb25lbnQuc3RyaW5nO1xuXG4gICAgICAgICAgICBuZXdOb2RlLm9uKFRvZ2dsZS5FdmVudFR5cGUuVE9HR0xFLCB0aGlzLnRvZ2dsZUNvbXBvc2l0ZU1vZGUsIHRoaXMpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbXBvc2l0ZU1vZGVUb2dnbGVMaXN0W2ldID0gbmV3Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzVGV4dE1hdGNoZWQodGV4dFVJLCB0ZXh0RGVzY3JpcHRpb24pIDogYm9vbGVhbiB7XG4gICAgICAgIGxldCB0ZW1wVGV4dCA9IG5ldyBTdHJpbmcodGV4dFVJKTtcbiAgICAgICAgY29uc3QgZmluZEluZGV4ID0gdGVtcFRleHQuc2VhcmNoKCc+Jyk7XG4gICAgICAgIGlmIChmaW5kSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdGV4dFVJID09PSB0ZXh0RGVzY3JpcHRpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZW1wVGV4dCA9IHRlbXBUZXh0LnN1YnN0cihmaW5kSW5kZXggKyAxKTtcbiAgICAgICAgICAgIHRlbXBUZXh0ID0gdGVtcFRleHQuc3Vic3RyKDAsIHRlbXBUZXh0LnNlYXJjaCgnPCcpKTtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wVGV4dCA9PT0gdGV4dERlc2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvZ2dsZVNpbmdsZU1vZGUodG9nZ2xlOiBUb2dnbGUpIHtcbiAgICAgICAgY29uc3QgZGVidWdWaWV3ID0gZGlyZWN0b3Iucm9vdCEuZGVidWdWaWV3O1xuICAgICAgICBjb25zdCB0ZXh0Q29tcG9uZW50ID0gdG9nZ2xlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oUmljaFRleHQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RyU2luZ2xlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1RleHRNYXRjaGVkKHRleHRDb21wb25lbnQuc3RyaW5nLCB0aGlzLnN0clNpbmdsZVtpXSkpIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z1ZpZXcuc2luZ2xlTW9kZSA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9nZ2xlQ29tcG9zaXRlTW9kZSh0b2dnbGU6IFRvZ2dsZSkge1xuICAgICAgICBjb25zdCBkZWJ1Z1ZpZXcgPSBkaXJlY3Rvci5yb290IS5kZWJ1Z1ZpZXc7XG4gICAgICAgIGNvbnN0IHRleHRDb21wb25lbnQgPSB0b2dnbGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihSaWNoVGV4dCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdHJDb21wb3NpdGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVGV4dE1hdGNoZWQodGV4dENvbXBvbmVudC5zdHJpbmcsIHRoaXMuc3RyQ29tcG9zaXRlW2ldKSkge1xuICAgICAgICAgICAgICAgIGRlYnVnVmlldy5lbmFibGVDb21wb3NpdGVNb2RlKGksIHRvZ2dsZS5pc0NoZWNrZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHRvZ2dsZUxpZ2h0aW5nV2l0aEFsYmVkbyh0b2dnbGU6IFRvZ2dsZSkge1xuICAgICAgICBjb25zdCBkZWJ1Z1ZpZXcgPSBkaXJlY3Rvci5yb290IS5kZWJ1Z1ZpZXc7XG4gICAgICAgIGRlYnVnVmlldy5saWdodGluZ1dpdGhBbGJlZG8gPSB0b2dnbGUuaXNDaGVja2VkO1xuICAgIH1cbiAgICB0b2dnbGVDU01Db2xvcmF0aW9uKHRvZ2dsZTogVG9nZ2xlKSB7XG4gICAgICAgIGNvbnN0IGRlYnVnVmlldyA9IGRpcmVjdG9yLnJvb3QhLmRlYnVnVmlldztcbiAgICAgICAgZGVidWdWaWV3LmNzbUxheWVyQ29sb3JhdGlvbiA9IHRvZ2dsZS5pc0NoZWNrZWQ7XG4gICAgfVxuICAgIGVuYWJsZUFsbENvbXBvc2l0ZU1vZGUoYnV0dG9uOiBCdXR0b24pIHtcbiAgICAgICAgY29uc3QgZGVidWdWaWV3ID0gZGlyZWN0b3Iucm9vdCEuZGVidWdWaWV3O1xuICAgICAgICBkZWJ1Z1ZpZXcuZW5hYmxlQWxsQ29tcG9zaXRlTW9kZSh0cnVlKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbXBvc2l0ZU1vZGVUb2dnbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0b2dnbGVDb21wb25lbnQgPSB0aGlzLmNvbXBvc2l0ZU1vZGVUb2dnbGVMaXN0W2ldLmdldENvbXBvbmVudChUb2dnbGUpO1xuICAgICAgICAgICAgdG9nZ2xlQ29tcG9uZW50LmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdG9nZ2xlQ29tcG9uZW50ID0gdGhpcy5taXNjTW9kZVRvZ2dsZUxpc3RbMF0uZ2V0Q29tcG9uZW50KFRvZ2dsZSk7XG4gICAgICAgIHRvZ2dsZUNvbXBvbmVudC5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgZGVidWdWaWV3LmNzbUxheWVyQ29sb3JhdGlvbiA9IGZhbHNlO1xuICAgICAgICB0b2dnbGVDb21wb25lbnQgPSB0aGlzLm1pc2NNb2RlVG9nZ2xlTGlzdFsxXS5nZXRDb21wb25lbnQoVG9nZ2xlKTtcbiAgICAgICAgdG9nZ2xlQ29tcG9uZW50LmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgIGRlYnVnVmlldy5saWdodGluZ1dpdGhBbGJlZG8gPSB0cnVlO1xuICAgIH1cbiAgICBoaWRlVUkoYnV0dG9uOiBCdXR0b24pIHtcbiAgICAgICAgY29uc3QgdGl0bGVOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdUaXRsZXMnKTtcbiAgICAgICAgY29uc3QgYWN0aXZlVmFsdWUgPSAhdGl0bGVOb2RlLmFjdGl2ZTtcbiAgICAgICAgdGhpcy5zaW5nbGVNb2RlVG9nZ2xlTGlzdFswXS5wYXJlbnQuYWN0aXZlID0gYWN0aXZlVmFsdWU7XG4gICAgICAgIHRoaXMubWlzY01vZGVUb2dnbGVMaXN0WzBdLnBhcmVudC5hY3RpdmUgPSBhY3RpdmVWYWx1ZTtcbiAgICAgICAgdGhpcy5jb21wb3NpdGVNb2RlVG9nZ2xlTGlzdFswXS5wYXJlbnQuYWN0aXZlID0gYWN0aXZlVmFsdWU7XG4gICAgICAgIHRoaXMuRW5hYmxlQWxsQ29tcG9zaXRlTW9kZUJ1dHRvbi5wYXJlbnQuYWN0aXZlID0gYWN0aXZlVmFsdWU7XG4gICAgICAgIHRpdGxlTm9kZS5hY3RpdmUgPSBhY3RpdmVWYWx1ZTtcbiAgICAgICAgdGhpcy5oaWRlQnV0dG9uTGFiZWwuc3RyaW5nID0gYWN0aXZlVmFsdWUgPyAnSGlkZSBVSScgOiAnU2hvdyBVSSc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY3VycmVudENvbG9ySW5kZXggPSAwO1xuICAgIHByaXZhdGUgc3RyQ29sb3I6IHN0cmluZ1tdID0gW1xuICAgICAgICAnPGNvbG9yPSNmZmZmZmY+JyxcbiAgICAgICAgJzxjb2xvcj0jMDAwMDAwPicsXG4gICAgICAgICc8Y29sb3I9I2ZmMDAwMD4nLFxuICAgICAgICAnPGNvbG9yPSMwMGZmMDA+JyxcbiAgICAgICAgJzxjb2xvcj0jMDAwMGZmPicsXG4gICAgXTtcbiAgICBwcml2YXRlIGNvbG9yOiBDb2xvcltdID0gW1xuICAgICAgICBDb2xvci5XSElURSxcbiAgICAgICAgQ29sb3IuQkxBQ0ssXG4gICAgICAgIENvbG9yLlJFRCxcbiAgICAgICAgQ29sb3IuR1JFRU4sXG4gICAgICAgIENvbG9yLkJMVUUsXG4gICAgXTtcbiAgICBjaGFuZ2VUZXh0Q29sb3IoYnV0dG9uOiBCdXR0b24pIHtcbiAgICAgICAgdGhpcy5fY3VycmVudENvbG9ySW5kZXgrKztcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRDb2xvckluZGV4ID49IHRoaXMuc3RyQ29sb3IubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50Q29sb3JJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRleHRDb21wb25lbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnRleHRDb21wb25lbnRMaXN0W2ldLnN0cmluZyA9IHRoaXMuc3RyQ29sb3JbdGhpcy5fY3VycmVudENvbG9ySW5kZXhdICsgdGhpcy50ZXh0Q29udGVudExpc3RbaV0gKyAnPC9jb2xvcj4nO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sYWJlbENvbXBvbmVudExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubGFiZWxDb21wb25lbnRMaXN0W2ldLmNvbG9yID0gdGhpcy5jb2xvclt0aGlzLl9jdXJyZW50Q29sb3JJbmRleF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xuICAgIH1cbn1cbiJdfQ==