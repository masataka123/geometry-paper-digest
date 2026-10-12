---
layout: paper
title: Nef Hattori classes and products of projective lines
title_ja: nefなHattori線束による射影直線の積の特徴づけ
authors: Daniel Álvarez, Andrew Clarke, Eduardo González
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Let \(X\) be a smooth connected complex projective variety with an effective algebraic \(\mathbb C^{\times}\)-action, a nonempty finite fixed locus whose weights are \(\pm1\). We show that if its Hattori line bundles are nef, then \(X\) is algebraically isomorphic to \((\mathbb{P}^1)^{\dim X}\), and these bundles become the hyperplane bundles of the factors. The product statement follows from the nef-complexity classification of Enwright and collaborators, and we describe the isomorphism through global sections. To test the required nefness we specialise the orbit-graph criterion of Romano and Wi\'sniewski. The Hirzebruch surface \(\mathbb F_2\) is an example why the topological hypotheses alone do not imply either the product conclusion or the Fano property.
topic: algebraic-geometry
tags:
- positivity
- chern-classes
- fano-varieties
arxiv_id: 2610.12683v1
arxiv_url: https://arxiv.org/abs/2610.12683
arxiv_submitted: '2026-10-08'
arxiv_updated: '2026-10-08'
summary: 射影直線の積と同じコホモロジー環・第一Chern類を持つ滑らかな射影多様体について、対応する線束がnefなら代数的にもその積になることを示す。既知のnef-complexity分類を適用し、群作用の軌道グラフでnef性を調べる条件と、大域切断による同型を与える。
abstract_en: Let \(X\) be a smooth connected complex projective variety with an effective algebraic \(\mathbb C^{\times}\)-action, a nonempty finite fixed locus whose weights are \(\pm1\). We show that if its Hattori line bundles are nef, then \(X\) is algebraically isomorphic to \((\mathbb{P}^1)^{\dim X}\), and these bundles become the hyperplane bundles of the factors. The product statement follows from the nef-complexity classification of Enwright and collaborators, and we describe the isomorphism through global sections. To test the required nefness we specialise the orbit-graph criterion of Romano and Wi\'sniewski. The Hirzebruch surface \(\mathbb F_2\) is an example why the topological hypotheses alone do not imply either the product conclusion or the Fano property.
summary_en: ''
abstract_ja: 固定点が有限で接表現の重みがすべて±1となる有効な乗法群作用は、射影直線の積に似たコホモロジーを与えるが、それだけでは多様体の代数的な積構造は決まらない。本論文はHattori線束のnef性を追加し、既知の分類定理を通じて射影直線の積との同型を導く。各線束は因子の超平面束に対応し、その二つの大域切断から同型を具体化できる。軌道グラフの極小辺を使う十分条件と、nef性の必要性を示すHirzebruch曲面の例も扱う。
abstract_source_url: https://arxiv.org/abs/2610.12683
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.12683v1](https://arxiv.org/abs/2610.12683)
- **著者:** Daniel Álvarez, Andrew Clarke, Eduardo González
- **初回投稿日:** 2026-10-08
- **最終更新日:** 2026-10-08
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

孤立固定点を持つsemifreeなHamiltonian円作用では、HattoriおよびTolman–Weitsmanの結果により、整数コホモロジー環とChern類が二次元球面の積に一致する。複素射影多様体では、これが射影直線の積との代数的同型まで意味するかが自然な問題となる。

一般にはそうならない。Hirzebruch曲面は、群作用とコホモロジーの条件を満たしながら負の切断を持ち、対応する線束の一つがnefでない例を与える。本論文は、この欠けている正値性を仮定すると積構造が回復することを示す。

積への分類自体はEnwrightらのnef-complexity分類定理の応用である。本論文の役割は、その適用に必要な線束を同定し、大域切断によって同型を記述し、Romano–Wiśniewskiの軌道グラフの方法を用いてnef性を検査する条件を整理することにある。

## 背景と問題設定

<p>$X$ は滑らかで連結な複素射影多様体である。曲線 $C$ の正規化上で計算した次数 $L\cdot C$ がすべて非負となる線束 $L$ をnefと呼ぶ。$\mathbb F_2$ は適切なsemifree作用を持つが、対応するクラスの一つが負の切断上で次数 $-1$ を持つ。コホモロジー環の関係だけでは、この障害を検出できない。</p>

<p>Definition 1.2のHTW条件とは、有効な代数的 $\mathbb C^\times$ 作用について、固定点集合が空でない有限集合であり、各固定点の接表現の重みがすべて $\pm1$ となることである。HTW生成元 $x_i$ を固定すると、それを第一Chern類に持つ一意の線束 $L_i$ が定まり、これをHattori線束と呼ぶ。</p>

## 主結果

### 主定理1：nef線束から積構造へ（Theorem 1.1）

<p>次元 $n\ge1$ の $X$ とnef線束 $L_1,\ldots,L_n$ があり、$x_i=c_1(L_i)$ が</p>

<div>
$$
H^*(X;\mathbb Z)\cong\frac{\mathbb Z[x_1,\ldots,x_n]}{(x_1^2,\ldots,x_n^2)},\qquad
\int_Xx_1\cdots x_n=1,\qquad c_1(T_X)=2\sum_{i=1}^n x_i
$$
</div>

<p>を満たすなら、代数的同型 $\Phi:X\xrightarrow{\sim}(\mathbb P^1)^n$ が存在し、</p>

<div>
$$
L_i\cong\Phi^*\operatorname{pr}_i^*\mathcal O_{\mathbb P^1}(1),
\qquad h^0(X,L_i)=2
$$
</div>

<p>となる。各 $L_i$ は大域生成され、その切断の任意の基底 $s_{i,0},s_{i,1}$ から $p\mapsto([s_{1,0}(p):s_{1,1}(p)],\ldots,[s_{n,0}(p):s_{n,1}(p)])$ によって同型を得る。この定理自体には群作用の仮定はなく、HTW条件はコホモロジーの仮定を供給する。</p>

### 主定理2：軌道グラフによるnef性の十分条件（Theorem 1.3）

<p>HTW固定点を部分集合 $I\subseteq\{1,\ldots,n\}$ により $p_I$ と表示する。非定数軌道の $t\to0$ と $t\to\infty$ の極限を結ぶ向き付き辺のうち、同じ端点を2本以上の辺による有向路で結べないものを極小辺と呼ぶ。すべての極小辺が</p>

<div>
$$
p_I\longrightarrow p_{I\cup\{j\}},\qquad j\notin I
$$
</div>

<p>という形なら、Hattori線束はすべてnefである。さらに積への同型は、各因子に $t\cdot[z_{i,0}:z_{i,1}]=[tz_{i,0}:z_{i,1}]$ と作用する対角作用に関して同変に選べる。条件は全軌道ではなく極小辺だけに課す。積そのものにも複数の座標が同時に動く軌道があるためである。</p>

<p>正整数 $a_i$ を選べば、偏極 $\bigotimes_iL_i^{\otimes a_i}$ は積上の $\mathcal O(a_1,\ldots,a_n)$ に対応する。整数を変えることは偏極を変えるが、台の多様体は変えない。</p>

## 証明の見取り図

HattoriとTolman–Weitsmanの結果を代数的設定へ移し、コホモロジー生成元と線束を結び付ける。軌道グラフは線束の曲線上の次数を制御し、Romano–Wiśniewskiの方法からnef性を導く。

その結果得られる反標準類のnef分解に既存の分類定理を適用すると、射影直線の積が得られる。最後に因子の超平面束との対応を使い、各線束の二つの大域切断で同型を表す。Introductionが明示するとおり、積の分類を新たに独立証明したという位置付けではない。

## 原論文との対応

- **Abstractページ:** [Nef Hattori classes and products of projective lines](https://arxiv.org/abs/2610.12683)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.12683v1) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.3; Definition 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.12683v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source_scope:** Abstract and Introduction
