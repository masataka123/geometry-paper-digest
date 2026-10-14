---
layout: paper
title: Sharp parameter gaps for quantized Mabuchi energies and cscK metrics
title_ja: 量子化Mabuchiエネルギーの鋭いパラメータ差とcscK判定
authors: Kefeng Liu, Liangdi Zhang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: For polarized manifolds, we show that semistability for the quantized Mabuchi energy at one fixed finite parameter is equivalent to uniform K-stability and to unique existence of constant scalar curvature K\"ahler (cscK) metrics. We obtain sharp comparisons between quantized Mabuchi slopes at different parameters and with the ordinary Mabuchi slope. In the presence of automorphisms, we give an equivariant criterion using torus twists under the vanishing of the Futaki character. The estimates also hold for finite-energy geodesic rays in compact K\"ahler classes. On a fixed ruled surface with discrete automorphism group, we construct cscK polarizations with unbounded critical parameters. Their ratios to the $\alpha$-invariant are also unbounded.
topic: differential-geometry
tags:
- csck-extremal-kahler-metrics
- k-stability
- pluripotential-theory
arxiv_id: 2610.16697v1
arxiv_url: https://arxiv.org/abs/2610.16697
arxiv_submitted: '2026-10-12'
arxiv_updated: '2026-10-12'
summary: 量子化Mabuchiエネルギーの傾きのパラメータ依存性に、次元とα不変量だけで決まる鋭い下限を与える。偏極多様体では一つの有限パラメータで全試験配置に対して成り立つ半安定性を、uniform K安定性とcscK計量の一意存在に結びつける。
abstract_en: ''
summary_en: A finite-parameter stability test is useful only if its parameter can be fixed across all degenerations being tested. The authors quantify how positivity improves when that parameter is increased in a quantized Mabuchi functional. The resulting slope estimates give existence criteria for constant scalar curvature Kähler metrics, with a separate treatment of automorphisms. Their ruled-surface examples show why the choice of parameter cannot be made uniformly over every polarization of a fixed manifold.
abstract_ja: 量子化Mabuchiエネルギーの有限パラメータでの非負性から、より大きなパラメータで一様な正値性が得られる仕組みを定量化する。コンパクトKähler類の有限エネルギー測地線に対し鋭い傾きの差を評価し、偏極多様体のcscK計量の判定に応用する。自己同型がある場合にはFutaki指標とトーラスによる捻りを考慮する。また、固定した線織曲面でも偏極を変えると必要な臨界パラメータが無限に大きくなり得ることを示す。
abstract_source_url: https://arxiv.org/abs/2610.16697
license_name: Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
license_url: http://creativecommons.org/licenses/by-nc-nd/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.16697v1](https://arxiv.org/abs/2610.16697)
- **著者:** Kefeng Liu, Liangdi Zhang
- **初回投稿日:** 2026-10-12
- **最終更新日:** 2026-10-12
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](http://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

cscK計量の存在は、Mabuchiエネルギーや試験配置の安定性と結びつく。本論文はその量子化版を調べ、一つの有限パラメータで傾きが非負なら、パラメータを大きくすることで一様な正の下限が得られることを示す。

主結果は、その改善幅を次元とα不変量だけで表し、定数の鋭さまで示すものである。偏極多様体では、全試験配置に共通する有限パラメータを選べるという条件から、uniform K安定性とKähler類内のcscK計量の一意存在との同値性を得る。試験配置ごとに別々のパラメータを選べるだけでは、この条件を満たさない。

自己同型を許す場合にはトーラスによる捻りとFutaki指標を組み込んだ判定を与える。一方、固定した線織曲面でも偏極を変えると臨界パラメータが非有界になる例を構成し、有限パラメータによる判定の一様性には限界があることを示す。

## 背景と問題設定

<p>連結コンパクトKähler多様体の複素次元を $n\ge1$、Kähler類を $\Omega$、α不変量を $A=\alpha(X,\Omega)$ とする。量子化Mabuchiエネルギー $M_\beta$ の有限エネルギー測地線ray $u$ に沿う傾きを $s_\beta(u)$ と書く。通常のMabuchiエネルギーとAubinの $J$ 汎関数の傾きは $M^{\mathrm{rad}}$、$J^{\mathrm{rad}}$ と表す。</p>

<p>比較係数を与える関数は</p>

<div>
$$
G_A(\beta)=\int_\beta^\infty\min\{1,(A/b)^{n+1}\}\,db
=\begin{cases}
(n+1)A/n-\beta,&0\lt \beta\le A,\\
A^{n+1}/(n\beta^n),&\beta\ge A.
\end{cases}
$$
</div>

<p>である。偏極 $(X,L)$ の試験配置 $\mathcal T$ については、対応するrayでの傾きを $m_\beta(\varphi_{\mathcal T})$ とし、非Archimedes的なノルムを $J^{\mathrm{NA}}$ と書く。正の任意の整数exponentを持つnormal ampleな代数的試験配置を対象とし、不変量は $L$ に正規化する。</p>

## 主結果

### パラメータ差の鋭い評価（Theorem A）

滑らかなポテンシャルから出るすべての有限エネルギー測地線rayと、すべての正のパラメータの組に対して、

<div>
$$
\begin{aligned}
s_B(u)-s_\beta(u)&\ge\bigl(G_A(\beta)-G_A(B)\bigr)J^{\mathrm{rad}}(u),&&0\lt \beta\lt B,\\
M^{\mathrm{rad}}(u)-s_\beta(u)&\ge G_A(\beta)J^{\mathrm{rad}}(u)
\end{aligned}
$$
</div>

<p>が成り立つ。係数は $n,A$ のみに依存する評価の中で最適であり、離散的自己同型群を持つ曲線の積でも等号が達成される。通常のMabuchi傾きとの差の減衰次数 $\beta^{-n}$ も最適である。</p>

### 偏極多様体での同値性（Corollary 1.1）

連結な滑らかな偏極多様体では、Kähler類に唯一のcscK計量があること、ある有限パラメータで全試験配置の量子化傾きが非負であること、量子化傾きに一様な正のノルム下限があること、uniform K安定性が同値となる。数式では後三者の条件はそれぞれ

<div>
$$
\begin{aligned}
&\exists\beta>0:\quad m_\beta(\varphi_{\mathcal T})\ge0,\\
&\exists B,\gamma>0:\quad m_B(\varphi_{\mathcal T})\ge\gamma J^{\mathrm{NA}}(\varphi_{\mathcal T}),\\
&\exists\delta>0:\quad \operatorname{DF}(\mathcal T)\ge\delta J^{\mathrm{NA}}(\varphi_{\mathcal T})
\end{aligned}
$$
</div>

<p>であり、各行はすべての対象試験配置に共通する定数を要求する。一意性はKähler類内のKähler形式そのものの一意性を意味する。第一の不等式から、任意の $B>\beta$ で $\gamma=G_A(\beta)-G_A(B)>0$ を取れる。通常の安定性との対応にはDarvas–ZhangおよびTrusianiの結果を用いる。</p>

### 自己同型を含む判定（Theorem B）

<p>$G=\operatorname{Aut}^0(X,L)$ の極大連結簡約部分群 $H$、その極大トーラス $S$ と連結中心 $Z_H$ を取る。$H$-equivariantな試験配置に対し、$S$ の有理一パラメータ部分群による捻りを動かした量子化傾きの上限を $R^{\beta,H}_{\max}(\mathcal T)$ とする。</p>

<p>cscK計量の存在は、Futaki指標が $\operatorname{Lie}Z_H$ 上で消え、かつ固定された有限の $\beta>0$ について全normal ampleな $H$-equivariant試験配置で $R^{\beta,H}_{\max}(\mathcal T)\ge0$ となることと同値である。$G$ 全体の簡約性は最初から仮定せず、存在から従うものとして扱う。</p>

### 固定曲面での臨界パラメータの非有界性（Theorem C）

<p>全試験配置で非負となるパラメータの下限を $\beta_{\mathrm{crit}}(X,L)$ とする。$\operatorname{Aut}^0(X)=\{1\}$ の固定された滑らかな線織曲面と、各 $d\ge4$ に対するample線束 $L_d$ で、各類にcscK計量が存在しながら</p>

<div>
$$
\alpha(X,L_d)=\frac1d,\qquad
\liminf_{d\to\infty}\frac{\beta_{\mathrm{crit}}(X,L_d)}d\ge\frac34
$$
</div>

<p>を満たすものがある。線束はファイバー次数1で互いに比例せず、臨界パラメータ自身もα不変量との比も非有界になる。</p>

### 少量の負値を許す判定（Corollary 1.2）

<p>$0\le\vartheta\lt 1$ とする。自己同型を除かない一意存在の場合、固定した有限 $\beta$ で</p>

<div>
$$
m_\beta(\varphi_{\mathcal T})\ge-\vartheta G_A(\beta)J^{\mathrm{NA}}(\varphi_{\mathcal T})
$$
</div>

<p>が全試験配置で成立することでも十分かつ必要である。パラメータ $B>\beta$ に移ると下限の係数は $(1-\vartheta)G_A(\beta)-G_A(B)$ となり、十分大きな $B$ で正になる。自己同型を考慮する版では、左辺を捻り後の上限、右辺のノルムを連結中心の有理捻りに関する $J^{\mathrm{NA}}$ の下限に置き換え、Futaki指標の消滅を仮定する。端点 $\vartheta=1$ はこの一般的主張には含まれない。</p>

## 証明の見取り図

<p>滑らかなポテンシャルに対する量子化エントロピーを $E(b)$ とすると、Introductionは $0\le-bE''(b)\le(n+1)E'(b)$ を出発点とする。これにより $b^{n+1}E'(b)$ が単調となり、α不変量による可積分性から得る小さいパラメータでの下限を積分できる。有限エネルギーポテンシャルへ拡張し、rayに沿う傾きを取ることでTheorem Aを得る。</p>

正の傾きの差を安定性の判定へ移すのが次の段階であり、自己同型がある場合にはreduced normを使う。鋭さと臨界パラメータの例では、曲線の積、射影的に平坦な線織曲面、normal coneへの変形がそれぞれ役割を担う。

## 原論文との対応

- **Abstractページ:** [Sharp parameter gaps for quantized Mabuchi energies and cscK metrics](https://arxiv.org/abs/2610.16697)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.16697v1) — Section 1, pp. 1–4。
- **Introduction中で言及された主要結果:** Theorems A, B, C、Corollaries 1.1, 1.2。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.16697v1
- **確認したライセンス:** [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](http://creativecommons.org/licenses/by-nc-nd/4.0/)
- **source_scope:** Abstract and Introduction
