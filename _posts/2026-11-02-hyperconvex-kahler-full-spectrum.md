---
layout: paper
title: Spectrum of Complete Kähler Metrics on Bounded Hyperconvex Domains
title_ja: 有界超凸領域上の完備Kähler計量の全スペクトル
authors: Young-Jun Choi, Jiwon Brandon Jeong
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.DG
arxiv_abstract: Let $\Omega\subset\mathbb{C}^{n}$ be a bounded domain, and let $\rho:\Omega\to[-1,0)$ be a smooth strictly plurisubharmonic exhaustion function. We consider the logarithmic potential $g=-\log(-\rho)$ and the associated complete K\"ahler metric $\omega=dd^{c} g$. We prove that if $\rho$ satisfies the finite weighted Monge-Amp\`ere mass condition with weight $(-\rho)^{\varepsilon}$ for every $\varepsilon>0$, then the spectrum and the essential spectrum of the Laplace-Beltrami operator of $(\Omega,\omega)$ both coincide with $[n^{2},\infty)$. In particular, the bottom of the spectrum satisfies $\lambda_{0}(\Delta_{\omega},\Omega)=n^{2}$, and $n^{2}$ is not an $L^{2}$-eigenvalue. For each $\alpha > \frac{n}{2}$, we set $f=(-\rho)^{\alpha}$ and prove that $f$ belongs to $W^{1,2}(\Omega,\omega)$ if and only if the Monge-Amp\`ere mass of $\rho$ weighted by $(-\rho)^{2\alpha-n}$ is finite. The integral identities underlying this equivalence, applied to the complex powers $(-\rho)^{\alpha+it}$,
  give, after normalization, a singular Weyl sequence at every $n^{2}+4t^{2}$, $t\in\mathbb{R}$, as $\alpha\downarrow\frac{n}{2}$. Combining our theorem with Cegrell's finite-mass exhaustion theorem, we obtain a complete K\"ahler metric with spectrum and essential spectrum equal to $[n^{2},\infty)$ on every bounded hyperconvex domain.
topic: several-complex-variables
tags:
- noncompact-kahler-geometry
- pluripotential-theory
arxiv_id: 2607.03036v2
arxiv_url: https://arxiv.org/abs/2607.03036
arxiv_submitted: '2026-07-03'
arxiv_updated: '2026-10-29'
summary: 有界領域の強多重劣調和な排気関数から作る完備Kähler計量のスペクトルを決定する。重み付きMonge–Ampère質量の有限性のもとでスペクトルと本質的スペクトルがともに[n²,∞)となり、有界超凸領域への存在結果を得る。
abstract_en: ''
summary_en: The paper seeks a full spectral description for metrics built from logarithmic plurisubharmonic potentials. Weighted Monge–Ampère mass provides the boundary control needed without imposing the usual smooth boundary setting. Real powers of an exhaustion function determine the spectral threshold, while complex powers detect every value above it. A finite-mass exhaustion theorem then supplies such a metric on any bounded hyperconvex domain.
abstract_ja: 有界領域上の滑らかで強多重劣調和な負の排気関数から対数ポテンシャルを作り、その完備Kähler計量のLaplace作用素を調べる。任意の正指数による重み付きMonge–Ampère質量が有限なら、スペクトル全体と本質的スペクトルはともに[n²,∞)になる。下端n²は二乗可積分な固有関数に対応しない。実冪の試験関数の積分恒等式を複素冪へ発展させ、各スペクトル値のWeyl列を構成する。有界超凸領域には、この性質を持つ完備Kähler計量が存在する。
abstract_source_url: https://arxiv.org/abs/2607.03036
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2607.03036v2](https://arxiv.org/abs/2607.03036)
- **著者:** Young-Jun Choi, Jiwon Brandon Jeong
- **初回投稿日:** 2026-07-03
- **最終更新日:** 2026-10-29
- **主分類・副分類:** math.CV（主分類）; math.DG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

非コンパクトな完備Kähler多様体のLaplaceスペクトルは、曲率だけでなく無限遠や境界へ近づく幾何を反映する。本論文は、有界領域の負の排気関数から作る対数ポテンシャル計量を対象に、スペクトルの下端だけでなく全体を計算する。

従来の滑らかな強擬凸境界を使う設定に対し、著者らは重み付きMonge–Ampère質量の有限性を仮定する。この条件のもと、複素次元 $n$ の領域上でスペクトルと本質的スペクトルがともに $[n^2,\infty)$ となり、下端は $L^2$ 固有値ではないと示す。

実数冪の試験関数で得た積分恒等式を、複素数冪へ拡張することが全スペクトルの決定につながる。Cegrellの有限質量排気関数の存在定理と組み合わせると、任意の有界超凸領域にこのスペクトルを持つ完備Kähler計量を作れる。

## 背景と問題設定

$\Omega\subset\mathbb C^n$ を有界領域、$\rho:\Omega\to[-1,0)$ を滑らかで強多重劣調和な排気関数とする。

$$
g=-\log(-\rho),\qquad\omega=dd^cg,\qquad dd^c=\sqrt{-1}\thinspace \partial\bar\partial
$$

と置く。論文の非負Laplace–Beltrami作用素の規格化は、$\omega=\sqrt{-1}\sum g\_{i\bar j}\thinspace dz^i\wedge d\bar z^j$ に対して

$$
\Delta\_\omega=-4\sum\_{i,j}g^{\bar ji}\frac{\partial^2}{\partial z^i\partial\bar z^j}
$$

である。スペクトルの数値 $n^2$ はこの規格化で述べられる。

Li–Tranの先行結果は、滑らかな強擬凸領域と十分正則な定義関数に対して下端 $n^2$ を与える。本論文では境界の正則性の役割を重み付き質量に置き換え、全スペクトルと固有値の問題も扱う。

## 主結果

### スペクトルと本質的スペクトル（Theorem 1.2）

上記の設定で、

$$
\int\_\Omega(-\rho)^\epsilon(dd^c\rho)^n<\infty
\qquad\text{すべての }\epsilon>0
$$

を仮定する。このとき $\omega$ は完備で、

$$
\sigma(\Delta\_\omega)=\sigma\_{\mathrm{ess}}(\Delta\_\omega)=[n^2,\infty),\qquad
\lambda\_0(\Delta\_\omega,\Omega)=n^2
$$

が成り立ち、$n^2$ は $L^2$ 固有値ではない。特に重みを付けないMonge–Ampère質量が有限なら、この仮定を満たす。

### 有界超凸領域への適用（Corollary 1.1）

任意の有界超凸領域 $\Omega\subset\mathbb C^n$ に対し、上記のスペクトル等式と下端の非固有値性を満たす、滑らかで強多重劣調和な排気関数 $\rho$ が存在する。超凸性は負の多重劣調和排気関数の存在で定義される。すべての完備Kähler計量のスペクトルが同じになるのではなく、所要の計量の存在を示す結果である。

## 証明の見取り図

部分積分の恒等式からスペクトル下端の下界と、その下端が $L^2$ 固有値でないことを示す。上界には $\alpha>n/2$ に対する $f=(-\rho)^\alpha$ を用い、

$$
f\in W^{1,2}(\Omega,\omega)
\quad\Longleftrightarrow\quad
\int\_\Omega(-\rho)^{2\alpha-n}(dd^c\rho)^n<\infty
$$

およびRayleigh商の正確な値

$$
\frac{4\int\_\Omega|\partial f|\_\omega^2\omega^n}{\int\_\Omega f^2\omega^n}=2\alpha n
$$

を得る。$\alpha\downarrow n/2$ とすることで下端を確定する。

全スペクトルには複素冪 $(-\rho)^{\alpha+it}$ を使う。$L^2$ 正規化した関数が $n^2+4t^2$ に対する特異Weyl列となることを示し、$t\in\mathbb R$ を動かして半直線全体を本質的スペクトルへ入れる。超凸領域への応用ではCegrellの定理が有限Monge–Ampère質量の排気関数を供給する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2607.03036)
- **Introduction:** [PDF](https://arxiv.org/pdf/2607.03036v2) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorem 1.2; Corollary 1.1（Theorem 1.1はLi–Tranの先行研究）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2607.03036v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
