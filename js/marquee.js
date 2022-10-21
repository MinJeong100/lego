export class MarqueeText{
    constructor($$marquee) {
        this.$$marquee = $$marquee;      
        this.addStyle = document.createElement('style');
        document.body.append(this.addStyle);

        this.GAP = 40;

        this.$$marquee.forEach(($marquee,idx) => {
            this.init($marquee,idx);
        });
    }//constructor

    /* [INIT] */
    init($marquee,idx){
        this.make_wrap($marquee);
        this.add_animation($marquee,idx); 
        this.clone_li($marquee);
    }//init

    make_wrap($marquee){
        const hei = $marquee.getBoundingClientRect().height;
        const $wrap = document.createElement('DIV');
        $wrap.classList.add('wrap-marqueeText');
        $wrap.style.height = `${hei}px`;
        $marquee.parentElement.insertBefore($wrap,$marquee);
        $wrap.appendChild($marquee);
    }//make_wrap

    add_animation($marquee,idx){
        let WID = 0;
        let HEI = $marquee.getBoundingClientRect().height + this.GAP;
        const $$li = $marquee.querySelectorAll('LI');
        $$li.forEach($li => {
            const li_wid = $li.getBoundingClientRect().width;
            WID += li_wid + this.GAP;
        });

        let keyFrames;
        const keyName = `mq_${idx}`;

        if($marquee.classList.contains('right')){
            keyFrames = `@keyframes ${keyName}{
                from {transform:translateX(-${WID}px);}
                to {transform:translateX(0)}}`;
        }else if($marquee.classList.contains('vertical')){
            if($marquee.classList.contains('down')){
                keyFrames = `@keyframes ${keyName}{
                    from {transform:translateY(-${HEI}px);}
                    to {transform:translateY(0)}}`;
            }else{
                keyFrames = `@keyframes ${keyName}{to {transform:translateY(-${HEI}px)}}`;
            }//if else
        }else{
            keyFrames = `@keyframes ${keyName}{to {transform:translateX(-${WID}px)}}`;
        }//if else
        this.addStyle.textContent += keyFrames;
        $marquee.style.animation = `${keyName} 8s linear infinite`;
    }//add_animation

    clone_li($marquee){
        const $$li = $marquee.querySelectorAll('LI');
        const $frag = document.createDocumentFragment();
        $$li.forEach($li => {
            const $clone = $li.cloneNode(true);
            $frag.appendChild($clone);
        });
        $marquee.appendChild($frag);
    }//clone_li
}//MarqueeText