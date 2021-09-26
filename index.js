

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
        E[p]=e || ()=>{};
        P[p]=s || ()=>{};
        M[u]=p;
        v[p]=u;
    }
    let d = document.getElementById;
    let C = "";//current
    let L = "";//last    
    let W = 0; // Working on progress indicator
    let M = {}// location map
    let V = {} // page url dictonary
    let P = {} // page show functions dictonary
    let E = {} // page end functions dictonary
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
    const B = function () { // Back
        S(L);
    }
    /* 
     * Show page
     * @param {string} page holder id string
     * @private
     */
    const S = function (i) {//show page
        if ((W === 1)||(C === i))
            return false;
        W = 1;
        if (V[i] !== "n")
            Y.S(V[i]);
        d(i).className = "displayVisible";
        H();
        L = C;//change last to current current
        C = i;
        setTimeout(function () { W = 0; }, 5);
        try{document.getElementsByTagName("body")[0].scrollTo(0, 0);}catch(e){}; // scroll to the top hide error
        try{E[L]();}catch(e){}; 
        try{P[C]();}catch(e){};
    };
}



