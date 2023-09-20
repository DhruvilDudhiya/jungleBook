class TweenManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
    buttonClickAnimation(gameObject, gameObject1) {
        this.oScene.tweens.add({
            targets: gameObject,
            scaleX: "*=0.9",
            scaleY: "*=0.9",
            duration: 200,

            yoyo: true,
            ease: 'Sine.easeInOut',
            onComplete: () => {
                gameObject.visible = false;
                gameObject1.visible = true;
            }
        });
    }
    popUpTweenAnimation(targetName) {
        targetName.visible = true;
        this.oScene.tweens.add({
            targets: targetName,
            scaleX: { from: 0, to: 1 },
            scaleY: { from: 0, to: 1 },
            delay: 600,
            duration: 200,
            ease: 'Linear',
            onComplete: () => {
            }
        })
    }
    popUpCloseTweenAnimation(targetName) {
        console.log(targetName);
        this.oScene.tweens.add({
            targets: targetName,
            scaleX: { from: 1, to: 0 },
            scaleY: { from: 1, to: 0 },
            duration: 200,
            ease: 'Linear',
            onComplete: () => {
                targetName.visible = false;
            }
        })
    }
    logoTween() {
        this.oScene.tweens.add({
            targets: this.oScene.logo,
            scaleX: "*=0.9",
            scaleY: "*=0.9",
            duration: 600,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });
    }
}