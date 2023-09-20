class InputManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.oScene.soundOnBtn.setInteractive().on("pointerdown", function () {
            this.oScene.oTweenManager.buttonClickAnimation(this.oScene.soundOnBtn, this.oScene.soundOffBtn);
        }, this)
        this.oScene.soundOffBtn.setInteractive().on("pointerdown", function () {
            this.oScene.oTweenManager.buttonClickAnimation(this.oScene.soundOffBtn, this.oScene.soundOnBtn);
        }, this)
        this.oScene.next_Button.setInteractive().on("pointerdown", function () {
            this.oScene.oTweenManager.popUpCloseTweenAnimation(this.oScene.container_popup);
            this.oScene.oGameManager.updateLevel();
        }, this)
        this.oScene.retry_Button.setInteractive().on("pointerdown", function () {
            this.oScene.alphabetPrefab.holderArr = [];
            this.oScene.oTweenManager.popUpCloseTweenAnimation(this.oScene.container_popup);
            setTimeout(()=>{
                this.oScene.scene.start("Game");
            },250)
        }, this)
        this.oScene.replay_Button.setInteractive().on("pointerdown", function () {
            this.oScene.oTweenManager.popUpCloseTweenAnimation(this.oScene.container_popup);
            this.oScene.scene.start("Game");
        }, this)
        this.oScene.black_Screen.setInteractive().on("pointerdown", function () {
        }, this)
    }


}