(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-search-bar></app-search-bar>\n<app-video-view></app-video-view>\n<app-history></app-history>\n<app-bookmarks></app-bookmarks>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/esm5/ngx-youtube-player.js");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/search-bar/search-bar.component.ts");
/* harmony import */ var _video_view_video_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./video-view/video-view.component */ "./src/app/video-view/video-view.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bookmarks/bookmarks.component */ "./src/app/bookmarks/bookmarks.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_youtube_player__WEBPACK_IMPORTED_MODULE_5__["YoutubePlayerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__["SearchBarComponent"], _video_view_video_view_component__WEBPACK_IMPORTED_MODULE_7__["VideoViewComponent"], _history_history_component__WEBPACK_IMPORTED_MODULE_8__["HistoryComponent"], _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_9__["BookmarksComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bookmarks/bookmarks.component.css":
/*!***************************************************!*\
  !*** ./src/app/bookmarks/bookmarks.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book{\r\n  position: absolute;\r\n  width:80%;\r\n  top: 65px;\r\n  left: 400px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va21hcmtzL2Jvb2ttYXJrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsV0FBVztFQUNYIiwiZmlsZSI6InNyYy9hcHAvYm9va21hcmtzL2Jvb2ttYXJrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2t7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOjgwJTtcclxuICB0b3A6IDY1cHg7XHJcbiAgbGVmdDogNDAwcHg7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/bookmarks/bookmarks.component.html":
/*!****************************************************!*\
  !*** ./src/app/bookmarks/bookmarks.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"book\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <br>\n        <button class=\"btn btn-info btn-sm\" (click)=\"clickBookmarks()\">See bookmarks</button>\n        <ul class=\"list-group\" *ngIf=\"showBookmarks\">\n          <li class=\"list-group-item\" *ngFor=\"let video of bookmarks\"\n          (click)=\"onSelect(video)\">{{video.url}}\n          </li>\n        </ul>\n\n        <div *ngIf=\"selectedVideo\">\n          <!-- HERE GOES THE VIDEO EXECUTION -->\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bookmarks/bookmarks.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bookmarks/bookmarks.component.ts ***!
  \**************************************************/
/*! exports provided: BookmarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarksComponent", function() { return BookmarksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../video.service */ "./src/app/video.service.ts");



var BookmarksComponent = /** @class */ (function () {
    /* TODO ()Solve problem with CORS)
    deleteBookmarks(videoId: number): void {
      this.videoService.deleteVideo(videoId, '/deleteBookmark').subscribe(_ => {
        this.bookmarks = this.bookmarks.filter(video => video.id !== videoId);
      });
    }
    */
    function BookmarksComponent(videoService) {
        this.videoService = videoService;
        //Displays the list of bookmarks
        this.showBookmarks = false;
    }
    //Controls the selection of a video in the bookmarks
    BookmarksComponent.prototype.onSelect = function (video) {
        this.selectedVideo = video;
    };
    //Gets the bookmark list from the service
    BookmarksComponent.prototype.getBookmarks = function () {
        var _this = this;
        this.videoService.getVideos('/readBookmarks').subscribe(function (videos) { return _this.bookmarks = videos; });
    };
    //Controls the bookmarks list status
    BookmarksComponent.prototype.clickBookmarks = function () {
        this.showBookmarks = !this.showBookmarks;
    };
    //On init, we get the bookmark list
    BookmarksComponent.prototype.ngOnInit = function () {
        this.getBookmarks();
    };
    BookmarksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bookmarks',
            template: __webpack_require__(/*! ./bookmarks.component.html */ "./src/app/bookmarks/bookmarks.component.html"),
            styles: [__webpack_require__(/*! ./bookmarks.component.css */ "./src/app/bookmarks/bookmarks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"]])
    ], BookmarksComponent);
    return BookmarksComponent;
}());



/***/ }),

/***/ "./src/app/history/history.component.css":
/*!***********************************************!*\
  !*** ./src/app/history/history.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hist{\r\n  position: absolute;\r\n  width:80%;\r\n  top: 25px;\r\n  left: 50px;\r\n  color: #DB7093;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVO0VBQ1YsY0FBYztFQUNkIiwiZmlsZSI6InNyYy9hcHAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlzdHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6ODAlO1xyXG4gIHRvcDogMjVweDtcclxuICBsZWZ0OiA1MHB4O1xyXG4gIGNvbG9yOiAjREI3MDkzO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/history/history.component.html":
/*!************************************************!*\
  !*** ./src/app/history/history.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"hist\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <h2>LOCAL HISTORY</h2>\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\" *ngFor=\"let video of history\"\n          (click)=\"onSelect(video)\">{{video.url}}\n          </li>\n        </ul>\n\n        <div *ngIf=\"selectedVideo\">\n          <!-- HERE GOES THE VIDEO EXECUTION -->\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/history/history.component.ts":
/*!**********************************************!*\
  !*** ./src/app/history/history.component.ts ***!
  \**********************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../video.service */ "./src/app/video.service.ts");



var HistoryComponent = /** @class */ (function () {
    /* TODO ()Solve problem with CORS)
    deleteHistory(videoId: number): void {
      this.videoService.deleteVideo(videoId, '/deleteHistory').subscribe(_ => {
        this.history = this.history.filter(video => video.id !== videoId);
      });
  }
  */
    function HistoryComponent(videoService) {
        this.videoService = videoService;
    }
    //Controls the selection of a video in the history
    HistoryComponent.prototype.onSelect = function (video) {
        this.selectedVideo = video;
    };
    //Gets the history list from the service
    HistoryComponent.prototype.getHistory = function () {
        var _this = this;
        this.videoService.getVideos('/readHistory').subscribe(function (videos) { return _this.history = videos; });
    };
    //On init, we get the history list
    HistoryComponent.prototype.ngOnInit = function () {
        this.getHistory();
    };
    HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.css */ "./src/app/history/history.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/search-bar/search-bar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bar{\r\n  position: absolute;\r\n  width: 1200px;\r\n  top: 150px;\r\n  right: 200px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFVBQVU7RUFDVixZQUFZO0VBQ1oiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMjAwcHg7XHJcbiAgdG9wOiAxNTBweDtcclxuICByaWdodDogMjAwcHg7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/search-bar/search-bar.component.html":
/*!******************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"bar\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n      </div>\n      <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <input type= \"string\"\n            class=\"form-control\"\n            name=\"url\"\n            #url>\n          <br>\n          <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Button Controller\">\n              <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First\">\n                <button type =\"button\" class=\"btn btn-primary btn-sm\" (click)=\"uploadVideo(url.value, '/insertHistory')\">See video</button>\n              </div>\n              <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second\">\n                <button type =\"button\" class=\"btn btn-success btn-sm\" (click)=\"uploadVideo(url.value, '/insertBookmark')\">Add to bookmarks</button>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/search-bar/search-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.ts ***!
  \****************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _video_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../video-item */ "./src/app/video-item.ts");
/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../video.service */ "./src/app/video.service.ts");




var SearchBarComponent = /** @class */ (function () {
    /* TODO - A way to change the youtube video id
      newSVideo(newSVideo: string){
        this.onPlay = youtube_parser(this.onPlay)
        this.videoService.changeSVIDEO(newSVideo);
      }
    
      //A function to get the id from all the type of youtube urls
      youtube_parser(url: string){
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*;
        var match = url.match(regExp);
        if (match&&match[7].length==11){
            b=match[7];
            alert(b);
        }else{
            alert("Url is not correct");
        }
    }
    */
    function SearchBarComponent(videoService) {
        this.videoService = videoService;
        this.newVideo = new _video_item__WEBPACK_IMPORTED_MODULE_2__["VideoItem"]();
    }
    SearchBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.videoService.currentMessage.subscribe(function (sVideo) { return _this.onPlay = sVideo; });
    };
    SearchBarComponent.prototype.uploadVideo = function (url, list) {
        url = url.trim();
        if (!url) {
            alert('The URL must not be blank');
            return;
        }
        this.newVideo.url = url;
        this.onPlay = url;
        this.videoService.addVideo(this.newVideo, list).subscribe();
    };
    SearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.css */ "./src/app/search-bar/search-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_video_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/video-item.ts":
/*!*******************************!*\
  !*** ./src/app/video-item.ts ***!
  \*******************************/
/*! exports provided: VideoItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoItem", function() { return VideoItem; });
var VideoItem = /** @class */ (function () {
    function VideoItem() {
    }
    return VideoItem;
}());



/***/ }),

/***/ "./src/app/video-view/video-view.component.css":
/*!*****************************************************!*\
  !*** ./src/app/video-view/video-view.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vView{\r\nposition: absolute;\r\nbottom: 100px;\r\nright: 200px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tdmlldy92aWRlby12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLFlBQVk7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLXZpZXcvdmlkZW8tdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZWaWV3e1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmJvdHRvbTogMTAwcHg7XHJcbnJpZ2h0OiAyMDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/video-view/video-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/video-view/video-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"vView\">\n    <div class=\"panel-body\">\n      <youtube-player\n        [videoId]=\"id\"\n        (ready)=\"savePlayer($event)\"\n        (change)=\"onStateChange($event)\"\n        [playerVars]=\"playerVars\"\n      >\n      </youtube-player>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/video-view/video-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/video-view/video-view.component.ts ***!
  \****************************************************/
/*! exports provided: VideoViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoViewComponent", function() { return VideoViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../video.service */ "./src/app/video.service.ts");



var VideoViewComponent = /** @class */ (function () {
    function VideoViewComponent(videoService) {
        this.videoService = videoService;
        this.id = "";
        this.playerVars = {
            cc_lang_pref: 'en'
        };
    }
    VideoViewComponent.prototype.onStateChange = function (event) {
        this.ytEvent = event.data;
    };
    VideoViewComponent.prototype.savePlayer = function (player) {
        this.player = player;
    };
    VideoViewComponent.prototype.playVideo = function () {
        this.player.playVideo();
    };
    VideoViewComponent.prototype.pauseVideo = function () {
        this.player.pauseVideo();
    };
    VideoViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.videoService.currentMessage.subscribe(function (onPlay) { return _this.id = onPlay; });
    };
    VideoViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-view',
            template: __webpack_require__(/*! ./video-view.component.html */ "./src/app/video-view/video-view.component.html"),
            styles: [__webpack_require__(/*! ./video-view.component.css */ "./src/app/video-view/video-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"]])
    ], VideoViewComponent);
    return VideoViewComponent;
}());



/***/ }),

/***/ "./src/app/video.service.ts":
/*!**********************************!*\
  !*** ./src/app/video.service.ts ***!
  \**********************************/
/*! exports provided: VideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





//We need to define the header to avoid the CORS protocol
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT'
    })
};
var VideoService = /** @class */ (function () {
    function VideoService(http) {
        this.http = http;
        //The url of the backend
        this.urlDB = 'http://localhost/master/backend/api';
        //Variables to share the localURL
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]("8GW6sLrK40k");
        this.currentMessage = this.messageSource.asObservable();
    }
    VideoService.prototype.changeSVideo = function (newVideo) {
        this.messageSource.next(newVideo);
    };
    //Get the list off videos from the database. The list attribute will define from wich database the videos are retrieved
    VideoService.prototype.getVideos = function (list) {
        var _this = this;
        return this.http.get(this.urlDB + list)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            _this.videos = res['data'];
            return _this.videos;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getVideos', [])));
    };
    //This will add a video to the database. The list attribute will define in wich database the videos will be uploaded
    VideoService.prototype.addVideo = function (video, list) {
        return this.http.post(this.urlDB + list, video).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addVideo')));
    };
    /* TODO (Solve Problem with CORS)
      deleteVideo (id: number, list: string): Observable<Video> {
        const path = `${this.urlDB}${list}/${id}`;
        const params = new HttpParams()
        .set('id', id.toString());
    
        return this.http.delete<Video>(path, { params: params }).pipe(
          catchError(this.handleError<Video>('deleteVideo'))
        );
      }
    */
    //Handle Http operation that failed.
    VideoService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // Sends the error to remote logging infrastructure
            console.error(error);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    };
    VideoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VideoService);
    return VideoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\master\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map