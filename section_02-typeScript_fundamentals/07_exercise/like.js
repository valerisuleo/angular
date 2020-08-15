"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Like = /** @class */ (function () {
    function Like(_isSelected, _isIncreased) {
        this._isSelected = _isSelected;
        this._isIncreased = _isIncreased;
    }
    Like.prototype.onClick = function () {
        if (this._isSelected) {
            this._isSelected = true;
            this._isIncreased++;
        }
    };
    Object.defineProperty(Like.prototype, "isSelected", {
        // onClick(){
        //   if (this.isSelected === true) {
        //       this.isIncreased++
        //   }
        // }
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "isIncreased", {
        get: function () {
            return this._isIncreased;
        },
        enumerable: true,
        configurable: true
    });
    Like.prototype.displayResults = function () {
        return this.isSelected + " and " + this.isIncreased;
    };
    return Like;
}());
exports.Like = Like;
