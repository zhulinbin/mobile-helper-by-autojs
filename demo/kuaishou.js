(function () {
    init()
    destory()

    function init() {
        auto.waitFor()
        let appName = '快手极速版'
        if (app.launchApp(appName)) {
            sleep(1000)
            console.show()
            _registerActions()
        }
    }
    function destory() {
        console.log('We will finish current lauch in 3s')
        sleep(3000)
        console.hide()
        home()
    }

    function _registerActions() {
        let actionLoopNum = 3000
        for (let i = 0; i < 3000; i++) {
            let logStr = 'The app has been swiped for(' + (i + 1) + ')[count: ' + actionLoopNum + ']'
            console.log(logStr)
            randomLike()
            randomFollow()
            slideToNextPage()
        }
    }

    /**
     * 屏幕向下滑动并延迟10至30秒
     */
    function slideToNextPage() {
        swipe(device.width / 2, device.height - random(140, 250), device.width / 2, random(450, 550), random(299, 380))
        sleep(random(10000, 30000))
    }

    /**随机点赞 */
    function randomLike() {
        let likeIndex = random(4, 8)
        if (likeIndex === random(5, 6)) {
            var likeElement = id("like_count_view").findOne()
            if (likeElement) {
                console.log('Finished like')
                likeElement.parent().click()
                sleep(random(3000, 7500))
            }
        }
    }

    /**随机关注 */
    function randomFollow() {
        let followIndex = random(4, 10)
        if (followIndex === random(7, 8)) {
            var likeElement = id('nebula_thanos_bottom_follow_button_layout').findOne()
            if (likeElement) {
                console.log('Finished follow')
                likeElement.click()
                sleep(random(3050, 6750))
            }
        }
    }
})()


