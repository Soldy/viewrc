

var D_F_viewBase  = function () { // 
    /* INIT
     *
     */
    this.I = function (){
        return I();
    }
    /* UPDATE
     *
     */
    this.u = function () {
        return U();
    }
    /**
     * hide all page
     * @returns {undefined}
     */
    this.h= function () { // hide every page
        return H();
    };
    /**
     *  show page
     * @param {string} id
     */
    this.s = function (id) {//show page
        S();
    };
    /**
     * @returns {undefined}
     */
    this.b=function(){// show last page
        B();
    }
    /** add page 
     * @param {string} page 
     * @param {string} url
     * @param {function} before function
     * @param {function} after function
     */
    this.a = function(p, u, s, e){  // oldal hozza adasa p = page , u = url, s = start funkcio, e = end funkcio 
        e = e || function(){};
        s = s || function(){};
        E[p]=e;
        S[p]=s;
        M[u]=p;
        v[p]=u;
    }
    let d = document.getElementId;
    let C = "";//current
    let L = "";//last    
    let W = 0; // oldal refrissiteset blockolo code
    let M = {}// location map
    let V = {}
    let S = {}
    let E = {}
    try{const Y = new D_F_urlBase();}catch(e){}
    /*
     * @private 
     */
    const I = fucntion(){ // Innit
       if (window.history.pushState) 
           return window.onpopstate = U;
       window.onhashchange = U;
    }
    const U = function(){
        let p = Y.G();
        if ((W === 0) && (M[p]))
            J(M[p]);
    }
    const H = function () { // hide every page
        if (C !== "")
            d(C).className = "displayNull";
    };
    const B = function () {
        S(L);
    }
    const S = function (id) {//show page
        if ((W === 1)||(C === id))
            return false;
        W = 1;
        if (V[id] !== "n")
            Y.S(V[id]);
        d(id).className = "displayVisible";
        H();
        L = C;//change last to current current
        C = id;
        setTimeout(function () { W = 0; }, 5);
        try{document.getElementsByTagName("body")[0].scrollTo(0, 0);}catch(e){};
        if (typeof E[L] !=="undefined") E[L]();
        if (typeof S[C] !=="undefined") S[C]();
    };
}



