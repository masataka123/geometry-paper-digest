---
layout: paper
title: Deformations of Kähler and Balanced Hyperbolicity
title_ja: Kähler双曲性とbalanced双曲性の変形安定性
authors: Jixiang Fu, Jingcao Wu
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AG
arxiv_abstract: 'We study the deformation stability of K\"ahler and balanced hyperbolicity. We prove that K\"ahler hyperbolicity is open under arbitrary small holomorphic deformations, but need not be closed, even in families of smooth projective surfaces. By contrast, balanced hyperbolicity is not open in general: in every complex dimension at least five, we construct a balanced hyperbolic central fibre with non-balanced nearby fibres. We establish criteria for the deformation stability of balanced hyperbolicity using Aeppli cohomology and Lefschetz theory. For principal holomorphic torus bundles over products of curves of genus at least two, we compute the relevant hyperbolic cohomology, obtain a numerical characterization of balanced hyperbolicity, and prove its openness under small deformations.'
topic: differential-geometry
tags:
- hyperbolicity
- hodge-theory
- moduli
arxiv_id: 2609.04816v2
arxiv_url: https://arxiv.org/abs/2609.04816
arxiv_submitted: '2026-09-04'
arxiv_updated: '2026-10-09'
summary: Kähler双曲性が任意の小さな正則変形で保たれる一方、滑らかな射影曲面の族でも閉条件ではないことを示す。balanced双曲性の一般的な開性には反例があり、AeppliコホモロジーやLefschetz理論による十分条件と特別な族での肯定結果を与える。
abstract_en: ''
summary_en: Fu and Wu compare two notions of hyperbolicity under changes of complex structure. Their Kähler result gives openness without imposing extra restrictions on the deformation, while a surface example prevents closedness. Balanced hyperbolicity behaves differently and requires attention to both cohomology and positivity. The paper provides sufficient conditions and special families where it persists, leaving the general balanced deformation question open.
abstract_ja: 普遍被覆上で有界な原始形式を持つという双曲性条件を、複素構造の変形に沿って比較する。Kähler双曲性は小変形で開いているが、極限では失われ得る。balanced双曲性は近傍のファイバーがbalancedでなくなることで失われる例があり、balanced性を仮定した場合の一般的な開性は未解決として残る。本論文は固定された双曲的コホモロジー部分空間と変動するHodge型・正値性を分け、開性を保証する条件を導く。
abstract_source_url: https://arxiv.org/abs/2609.04816
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.04816v2](https://arxiv.org/abs/2609.04816)
- **著者:** Jixiang Fu, Jingcao Wu
- **初回投稿日:** 2026-09-04
- **最終更新日:** 2026-10-09
- **主分類・副分類:** math.DG（主分類）; math.AG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素構造が少し変わっても幾何的な双曲性は保たれるか。本論文は、普遍被覆上で有界な原始形式を持つことから定義されるKähler双曲性とbalanced双曲性を比較する。二つは関連するが、変形に対する振る舞いは同じではない。

Kähler双曲性については、小さな正則変形に余分な仮定を課さず開性を示す。一方、滑らかな射影曲面の族で一般ファイバーはKähler双曲的でも、中心ファイバーに有理曲線が現れて双曲性が失われる例を構成する。

balanced双曲性は一般には開条件でない。ただし反例では近傍ファイバーのbalanced性自体が失われるため、balancedな近傍に限った開性は別の問題となる。本論文はその問いを一般には未解決としつつ、AeppliコホモロジーとLefschetz理論から肯定的な基準を与える。

## 背景と問題設定

<p>コンパクト多様体 $X$ の普遍被覆 $p:\widetilde X\to X$ に対し、微分形式 $\gamma$ が $\widetilde d$-boundedとは</p>

<div>
$$
p^*\gamma=d\Gamma,\qquad \|\Gamma\|_{L^\infty(\widetilde X,p^*g)}<\infty
$$
</div>

<p>を満たす原始形式があることである。Kähler計量 $\omega$ がこの性質を持てばKähler双曲的であり、balanced計量で $\omega^{n-1}$ がこの性質を持てばbalanced双曲的という。より一般にKähler $k$-双曲性は $\omega^k$ が $\widetilde d$-boundedとなるKähler計量の存在を意味する。</p>

滑らかな多様体として族を同一視すれば、de Rhamコホモロジーと双曲的類の部分空間は固定される。しかし各類が必要なHodge型と正値な代表を持つかは複素構造とともに変わる。この差が変形問題の要点となる。

## 主結果

### 主定理1：Kähler双曲性の開性（Theorem 1.1）

<p>固有正則submersion $\pi:\mathcal X\to\Delta$ のファイバーが連結かつコンパクトで、$X_0$ がKähler双曲的なら、十分小さいすべての $t$ で $X_t$ もKähler双曲的となる。変形に特別な代数性や追加のHodge条件を要求しない。</p>

### 主定理2：閉性への反例（Theorem 1.2）

<p>連結な滑らかな射影曲面をファイバーに持つ固有正則submersion $q:\mathcal Z\to\Delta$ で、すべての $s\ne0$ では $Z_s$ がKähler双曲的だが、$Z_0$ は有理曲線を含みKähler双曲的でないものが存在する。</p>

### Balanced双曲性の障害と十分条件

<p>複素次元 $N\ge5$ の各次元で、Iwasawa変形に種数2以上の曲線の積を組み合わせ、中心ファイバーはbalanced双曲的、近傍はbalancedですらない例を得る。近傍がbalancedであることを仮定したQuestion 1.3は一般には未解決である。</p>

<p>肯定的な十分条件として、中心ファイバーのAeppliコホモロジーの消滅</p>

<div>
$$
H_A^{n-2,n}(X_0)=0\quad\Longleftrightarrow\quad h_{BC}^{2,0}(X_0)=0
$$
</div>

を用いる開性がIntroductionで述べられる。また種数2以上の曲線の積上の主正則トーラス束ではQuestion 1.3を肯定的に解く。数値的特徴付けも得ると説明されるが、その具体式はIntroductionには記載されていないため補わない。

### 主定理3：Lefschetz理論によるbalanced双曲性（Theorem 1.4）

<p>コンパクト複素 $n$ 次元多様体の正則族で $n\ge3$、$1\le k\le n-2$ とする。$X_0$ がKähler $k$-双曲的なら、同じ滑らかな多様体上のすべてのbalanced複素構造はbalanced双曲的である。特に十分小さい正則変形はbalanced双曲的となる。</p>

### 主定理4：高い冪のKähler双曲性（Theorem 1.5）

<p>$X_0$ がKähler $r$-双曲的で、</p>

<div>
$$
1\le r\le n,\qquad r\le\ell\le n,\qquad 2\ell\ge n+r
$$
</div>

<p>なら、同じ滑らかな多様体上のすべてのKähler複素構造はKähler $\ell$-双曲的となる。特に小変形でもこの性質が保たれる。境界の場合 $r=n-1$ には必要な全射性がなく、同じ議論からbalanced双曲性の開性を導けるとは述べない。</p>

<p>さらに、円板上の族で一つのファイバーがKähler $k$-双曲的、$1\le k\le n-2$、非可算個のファイバーがMoishezonなら、全ファイバーはbalanced双曲的となる。通常のKähler双曲性、すなわち $k=1$ の場合にはMoishezonの追加仮定も不要となる。ただし全ファイバーが通常のKähler双曲的になるという結論ではない。</p>

## 証明の見取り図

Kähler双曲性の開性では、まず代数的な族に対してDeligneの半単純性・固定部分の定理を使い、Grothendieckの解析的Hilbert理論によって一般の解析的変形へ移す。

balancedの場合は、固定された双曲的コホモロジー部分空間と正しいHodge型を持つ類との交わりをAeppliコホモロジーで制御する。一定階数のもとで正値性を保った継続を行う。一方、双曲的コホモロジーの次数付きイデアル性とLefschetz写像の全射性を組み合わせると、必要な次数の類がすべて双曲的になる条件が得られ、主定理3と4につながる。

円板全体への帰結にはMoishezon性やbig性の伝播に関する別の結果を用いる。Introductionはこれらを小変形の開性とは独立した入力として区別している。

## 原論文との対応

- **Abstractページ:** [Deformations of Kähler and Balanced Hyperbolicity](https://arxiv.org/abs/2609.04816)
- **Introduction:** [PDF](https://arxiv.org/pdf/2609.04816v2) — Section 1, pp. 2–4（Section 2より前）
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2, 1.4, 1.5; Question 1.3とIntroduction中のTheorem 6.3等の説明
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2609.04816v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
