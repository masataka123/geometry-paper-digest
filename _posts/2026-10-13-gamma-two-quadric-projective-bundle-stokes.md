---
layout: paper
title: Gamma conjecture II and explicit Stokes data for a quadric projective bundle
title_ja: 二次超曲面上の射影束に対するGamma予想IIと明示的Stokesデータ
authors: Xiaobin Li
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We study the connection problem for the quantum differential equation of the Fano fourfold $X=\PP_{Q^3}(\OO\oplus\OO(1))$. The problem is to identify its canonical asymptotic solutions with exceptional objects and compute the associated Stokes data. We use exact Mellin--Bessel integral representations and uniform vector asymptotics on sectors wider than $\pi$, followed by analytic continuation that preserves the Gamma framing. Cohomological chiral symmetry and mutations of exceptional collections put all eight sections at a common phase. This proves Gamma conjecture II for $X$ and determines a full exceptional collection and its Stokes and central connection matrices at the unit Novikov point and a specified admissible phase. The chiral symmetry also gives a flat symmetric bilinear pairing, an orthogonality identity for the Stokes matrix, and an integral unipotent square root of the monodromy matrix for a full turn. We obtain explicit formulas for the connection data at the
  opposite phase; on the Gamma lattice, the half-turn acts by tensoring with a square root of the anticanonical bundle. The same spinor integral transform constructs two canonical Gamma sections for $\PP_{Q^{2m+1}}(\OO\oplus\OO(1))$, $m\geq1$, at positive parameters with distinct spectrum. Their sectors have opening greater than $\pi$, and their leading constants are independent of the dimension.
topic: algebraic-geometry
tags:
- fano-varieties
- vector-bundles-sheaves
arxiv_id: 2610.13331v1
arxiv_url: https://arxiv.org/abs/2610.13331
arxiv_submitted: '2026-10-09'
arxiv_updated: '2026-10-09'
summary: 二次超曲面上の射影束として得られるFano四次元多様体について、量子接続の標準漸近解を充満例外集合のGamma切断と同定する。二つのNovikov変数を保った解析からGamma予想IIを示し、指定した点と位相でStokes行列と中心接続行列を決定する。
abstract_en: ''
summary_en: This work makes the categorical labels of quantum asymptotic solutions explicit for a particular four-dimensional Fano projective bundle. Its analysis follows normalized sections through parameter continuation and mutations, including the spinor objects that cannot be replaced by line bundles. The resulting basis supplies concrete connection matrices at a fixed point and phase. A separate higher-dimensional result identifies two spinor columns, without claiming the full Gamma II correspondence there.
abstract_ja: 量子微分方程式の漸近解と導来圏の対象を対応させる際には、固有値だけでなく各解の正規化、符号、解析接続に伴う対象の変化を追う必要がある。本論文は滑らかな三次元二次超曲面上の特定の射影束でこの対応を具体化する。スピノル束に対応する解を積分表示で同定し、広い扇形領域上の漸近解析と例外集合の変異を用いて、指定した位相で完全な接続データを得る。コホモロジーの対称性から半回転と反標準束の平方根によるテンソル積の関係も導き、高次元の奇数次元二次超曲面上では二つのスピノル切断に対する部分的な拡張を与える。
abstract_source_url: https://arxiv.org/abs/2610.13331
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.13331v1](https://arxiv.org/abs/2610.13331)
- **著者:** Xiaobin Li
- **初回投稿日:** 2026-10-09
- **最終更新日:** 2026-10-09
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Fano多様体の量子接続は、数え上げ幾何から得られる微分方程式である。一方、例外集合は連接層の導来圏を記述する対象の列である。Gamma予想IIは、この二つの構造をGamma類による正規化を通じて結びつけ、例外集合に対応する平坦切断が量子接続の標準漸近解になると予想する。

本論文は、滑らかな三次元二次超曲面上の特定の射影束であるFano四次元多様体について、この対応を明示的に証明する。単に予想の成立を述べるだけでなく、二つのNovikov変数がともに1となる点と指定された位相で、八つの対象からなる充満例外集合、Stokes行列、中心接続行列を決定する。

解析上の中心はスピノル束に対応する二つの解である。固有値や一つの半直線上の主要項だけでは標準解は同定できないため、Mellin–Bessel積分と開きが $\pi$ を超える扇形上の一様なベクトル漸近展開を使う。その後も解析接続に伴う対象のラベルと符号を追い、共通の位相へ移す。

コホモロジーの符号対称性は、接続行列の双線形関係と、半回転を反標準束の平方根によるテンソル積として記述する結果につながる。奇数次元の二次超曲面上の射影束にもスピノル切断の構成を拡張するが、その高次元の結果は二つの切断に限られ、全体のGamma予想IIを証明するものではない。

## 背景と問題設定

対象は、一次元商をパラメータ付ける規約での射影束

<div>
$$
X=\mathbb P_{Q^3}(\mathcal O\oplus\mathcal O(1)),\qquad Q^3\subset\mathbb P^4
$$
</div>

である。ここで $Q^3$ は滑らかである。$X$ のFano指数は2、コホモロジーの階数は8であり、議論はその全コホモロジーを使う。Novikov変数 $q$ は $\mathcal O$ への商が定める切断内の直線、$r$ は射影束のファイバーに対応する。

<p>射影を $\pi$、$H=\pi^*c_1(\mathcal O_{Q^3}(1))$、$L=\mathcal O_X(H)$、$U=\mathcal O_\pi(1)$ とする。底上の階数2のスピノル束を $S$ とし、$c_1(S)=-H$ の規約を用いて $S_0=\pi^*S$、$S_1=S_0\otimes U$ と置く。$j:Q^3\hookrightarrow X$ は $\mathcal O$ への商の切断である。さらに $V=\pi^*(\Omega^1_{\mathbb P^4}(1)|_{Q^3})$ として、スカラー倍を除き一意な非零拡大</p>

<div>
$$
0\longrightarrow V\otimes U\longrightarrow F\longrightarrow L\longrightarrow0
$$
</div>

により束 $F$ を定める。

<p>論文のGamma正規化は $\mathfrak s(E)=(2\pi)^{-2}\mathcal Lz^{-\mu}z^\rho(\widehat\Gamma_X\operatorname{Ch}(E))$ である。ここで $\mathcal L$ は大半径で正規化された基本解、$\mu$ は次数作用素、$\rho=c_1(X)\cup$、$\operatorname{Ch}(E)=\sum_p(2\pi i)^p\operatorname{ch}_p(E)$ である。正則特異点側のこの正規化と、不確定特異点側の標準漸近挙動を正確に比較することが問題となる。</p>

## 主結果

### 指定された位相でのGamma予想II（Theorem 1.1）

<p>$q=r=1$、$\phi_0=-\arctan(1/100)$ において、次の列のGamma切断が正規化された標準漸近基本解を与える。この列は充満例外集合でもある。</p>

<div>
$$
B=\bigl(L^{-1},j_*\mathcal O_{Q^3}(-1)[3],\mathcal O,S_0L[-1],S_1,F[1],L,U\bigr).
$$
</div>

角括弧は導来圏のシフトを表す。特に、この $X$ はGamma予想IIを満たす。スピノル束と拡大束、切断上の層が列に現れることは、直線束だけでは対応を記述できないことを具体化している。

<p>量子乗法 $c_1(X)\star$ の非実固有値を $\pm a\pm ib$（$a,b>0$）、正のパラメータで実部が最大の単純固有値を $T$ とすると、指数の順序は $(a+ib,-a+ib,T,2,-2,-T,a-ib,-a-ib)$ である。標準解の列を $\operatorname{Im}(e^{-i\phi}u_i)$ の減少順に取り、Stokesの規約を $S_{ij}=(y_i(e^{-\pi i}z),y_j(z))_X$ としたとき、行列は</p>

<div>
$$
S_{\phi_0}=\begin{pmatrix}
1&-1&5&-16&20&-65&14&19\\
0&1&1&-4&0&-5&5&1\\
0&0&1&-4&4&-16&5&6\\
0&0&0&1&0&4&-4&-4\\
0&0&0&0&1&-4&0&4\\
0&0&0&0&0&1&-1&-6\\
0&0&0&0&0&0&1&1\\
0&0&0&0&0&0&0&1
\end{pmatrix}
$$
</div>

となる。対はPoincaré対であり、第1変数は指定された経路に沿って解析接続する。

<div>
$$
Y_\infty=\mathcal Lz^{-\mu}z^\rho,\qquad
Y_{\phi_0}=Y_\infty C_{\phi_0},\qquad
C_{\phi_0}=(2\pi)^{-2}[\widehat\Gamma_X\operatorname{Ch}(B_i)]_{\mathrm{cup}}
$$
</div>

が中心接続行列の表示である。列の順序は上の例外集合と同じである。Introductionは、別のStokes規約を選ぶと逆行列や転置が現れ得ることを注意しており、行列だけを規約から切り離して比較することはできない。

### 奇数次元の底からの二つのスピノル切断（Theorem 1.2）

<p>任意の奇数 $\nu=2m+1\geq3$ に対する $X_\nu=\mathbb P_{Q^\nu}(\mathcal O\oplus\mathcal O(1))$ では、底のスピノル束を $\operatorname{ch}(S_\nu)=2^{m+1}/(1+e^H)$ で正規化する。正の $q,r$ に対し、$\pi^*S_\nu$ と $\pi^*S_\nu\otimes U$ のGamma切断は、それぞれ指数 $2\sqrt r$ と $-2\sqrt r$ を持つ完全に正規化されたベクトル漸近展開を与える。対応する扇形は</p>

<div>
$$
-\frac\pi2<\arg z<\frac\pi2+\frac{2\pi}{\nu+1},\qquad
-\frac\pi2-\frac\pi\nu<\arg z<\frac\pi2
$$
</div>

である。正規化とスカラー主要係数は

<div>
$$
E\longmapsto(2\pi)^{-(\nu+1)/2}\mathcal L_\nu z^{-\mu_\nu}z^{\rho_\nu}
\widehat\Gamma_{X_\nu}\operatorname{Ch}(E),\qquad
-\frac{i}{2\sqrt{qr}},\quad\frac{i}{2\sqrt{qr}}
$$
</div>

となる。スペクトルが相異なる点では、これらは二つの標準Gamma列である。固定した $\nu$ に対して、全ての次数とパラメータ微分が正のパラメータのコンパクト集合上一様に制御される。残りの列とその対はこの結果だけでは得られず、高次元全体のGamma予想IIとの区別が必要である。

### Chiral対称性と半回転（Corollary 1.3）

<p>コホモロジー次数 $2p$ 上で $(-1)^p$ を掛ける作用素 $D$ は、$c_1(X)\star$ と反可換であり、固有値 $u$ と $-u$ を対応させる。$A=L\otimes U$ と置き、上の順序付きK群基底で $E\mapsto E\otimes A$ を表す整数行列を $M_A$ とする。符号付き逆順行列は $J_\epsilon e_i=\epsilon_i e_{9-i}$、$\epsilon=(1,1,1,-1,-1,1,1,1)$ で定義する。</p>

<p>Theorem 1.1の点と位相で $S=S_{\phi_0}$、$C=C_{\phi_0}$、cup基底でのPoincaré行列を $P$ とすると、</p>

<div>
$$
S^TJ_\epsilon S=J_\epsilon,\qquad C^TPDC=J_\epsilon,
$$
$$
M_A=J_\epsilon S,\qquad M_A^2=S^{-T}S,\qquad CM_A=e^{\pi i\rho}C
$$
</div>

が成り立つ。これらは複素双線形の等式であり、Hermite転置を用いるものではない。$M_A$ はJordan型 $J_5(1)\oplus J_3(1)$ の単冪行列である。

<div>
$$
S_{\phi_0-\pi}=S_{\phi_0},\qquad
C_{\phi_0-\pi}=e^{\pi i\rho}C_{\phi_0},\qquad
A^2=\omega_X^{-1}
$$
</div>

という関係も得られる。対数を指定された経路に沿って続けると、半回転後の標準例外集合は $B\otimes A$ となる。したがって半回転の平方は恒等作用ではなく、反標準束によるテンソル積に対応する一回転のモノドロミーになる。

## 証明の見取り図

Introductionは、底の二次超曲面でGamma予想IIが既知でも、射影束の底とファイバーの寄与が解析的に結合している点を強調する。二つのスピノル固有値が分かっても、対応する固有空間は量子接続全体で保たれず、階数2の接続へ単純に還元できない。また直線束の生成する部分群はK群内で指数16であり、スピノル類を省けない。

まず構造層について正の実積分の厳密凸な最小点を用いて最速減衰する切断を同定する。スピノル切断では、Mellin–Bessel表示を正則特異点側のGamma初期値と照合した後に、積分の次数や対数の枝を制御して、開きが $\pi$ より大きい扇形で微分可能なベクトル漸近展開を得る。一つの半直線上だけの展開では指数的に小さい別の解の混入を区別できないため、この領域の広さが役割を持つ。

次にパラメータの周回、反射、chiral半回転によって直線束の切断を構成し、共通の位相へ運ぶ。壁を横切る際の例外集合の変異とシフトを追跡して最終的な八つの対象を特定する。最後にGamma類によるRiemann–Rochの分解を使って対を計算し、行列の順序と符号を確定する。これは一般の射影束についての形式的分解だけから自動的に得られる結果ではなく、指定された対象の解析接続を具体的に同定する計算である。

## 原論文との対応

- **Abstractページ:** [Gamma conjecture II and explicit Stokes data for a quadric projective bundle](https://arxiv.org/abs/2610.13331)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.13331v1) — Section 1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorem 1.1、Theorem 1.2、Corollary 1.3；式(1.1)–(1.6)
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.13331v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
