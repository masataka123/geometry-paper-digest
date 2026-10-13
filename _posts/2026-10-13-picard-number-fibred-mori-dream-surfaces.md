---
layout: paper
title: The Picard number of fibred Mori dream surfaces
title_ja: ファイバー構造を持つMori dream曲面のPicard数
authors: Federico Fallucca, Roberto Pignatelli, Francesco Polizzi
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Let $S$ be a smooth complex projective surface endowed with a fibration $f \colon S \to C$ onto a smooth projective curve $C$. We prove that, if $S$ is a Mori dream space (or, more generally, if its pseudo-effective cone is polyhedral) then the Picard number $\rho(S)$ can be effectively computed by counting the irreducible components of the reducible fibres of $f$. A first simple consequence is that, given an elliptic fibration $f \colon S \to \mathbb{P}^1$ with a section and such that $S$ is a Mori dream space, the Mordell-Weil group of the general fibre of $f$ is finite. The main application is a simple criterion for proving that a surface fibred over a curve is not a Mori dream space. We show that certain Horikawa surfaces, Fermat surfaces in $\mathbb{P}^{3}$ of every degree $\ge 4$, particular product-quotient surfaces, and the minimal simply connected numerical Godeaux surface constructed by Craighero and Gattazzo are not Mori dream spaces.
topic: algebraic-geometry
tags:
- positivity
- birational-geometry
arxiv_id: 2608.29485v2
arxiv_url: https://arxiv.org/abs/2608.29485
arxiv_submitted: '2026-08-30'
arxiv_updated: '2026-10-09'
summary: 滑らかな複素射影曲面から曲線へのファイバー構造について、擬有効錐の多面体性がPicard数を可約ファイバーの成分数から決めることを示す。この数値的制約を使い、Fermat曲面やCraighero–Gattazzo曲面などがMori dream空間でないことを導く。
abstract_en: ''
summary_en: The paper uses a fibration over a curve to test the geometry of the divisor cone of a complex projective surface. Under polyhedrality, reducible fibers account for the Picard number through an exact numerical formula. This supplies an obstruction that can be checked without determining the whole Cox ring. The authors apply it to several explicit families and to the Craighero–Gattazzo surface.
abstract_ja: 本論文は、曲線上にファイバー構造を持つ射影曲面の因子の数値的自由度と、特殊ファイバーの分裂の仕方を比較する。擬有効錐が多面体であると仮定すると、Picard数は可約ファイバーの各成分の寄与と二つの基本的な方向だけで決まる。この仮定はMori dream性より弱く、その必要条件としても利用できる。楕円ファイバー構造のMordell–Weil群の有限性に加え、複数の一般型曲面やFermat曲面について擬有効錐が多面体でないことを示す応用が与えられる。
abstract_source_url: https://arxiv.org/abs/2608.29485
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.29485v2](https://arxiv.org/abs/2608.29485)
- **著者:** Federico Fallucca, Roberto Pignatelli, Francesco Polizzi
- **初回投稿日:** 2026-08-30
- **最終更新日:** 2026-10-09
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

射影曲面がMori dream空間であるかを判定するには、その因子の正値性を記述する錐を理解する必要がある。本論文は、曲面から曲線へのファイバー構造が既に分かっている場合に、可約ファイバーの成分数とPicard数を比較するだけで使える障害を与える。

主定理が要求するのはMori dream性そのものではなく、擬有効錐の多面体性である。この条件の下では、各可約ファイバーの成分数から一つずつ引いた値の総和に2を足すと、曲面のPicard数になる。したがって、Picard数がこの値を超える曲面では擬有効錐が多面体でなく、Mori dream空間にもなれない。

この数値的条件を具体的な曲面に適用することが論文の主な目的である。対象にはある種のHorikawa曲面、次数4以上のFermat曲面、特定の積商曲面、Craighero–Gattazzo曲面が含まれる。特に最後の例は、幾何種数と不正則数がともに零の極小一般型曲面でMori dream空間でないものを求める問題に、擬有効錐自体が非多面体となる例を与える。

## 背景と問題設定

Mori dream空間については有理多様体やFano多様体の研究が進んでいる一方、Introductionは一般型多様体で知られている例が少ないことを出発点に挙げる。本論文では複素数体上で考え、ファイバー構造とは正規射影多様体の間の、連結ファイバーを持つ全射で、底の次元が小さいものを指す。

滑らかな曲面から滑らかな曲線へのファイバー構造を $f:S\to C$ とする。Picard数 $\rho(S)$ は因子の数値同値類の空間の次元であり、擬有効錐 $\overline{\mathrm{Eff}}(S)$ は有効因子類が生成する錐の閉包である。可約ファイバー $f^{-1}(p)$ が相異なる既約成分を $k_p$ 個持つとき、論文の重み付き成分数は

<div>
$$
n(f)=\sum_{p\in C,\ f^{-1}(p)\text{ が可約}}(k_p-1)
$$
</div>

である。成分の重複度ではなく、相異なる既約成分の個数を数える点に注意する。

## 主結果

### Picard数の等式（Theorem A）

擬有効錐が多面体なら、Picard数は次の等式で決まる。

<div>
$$
\rho(S)=n(f)+2.
$$
</div>

仮定は、$S$ が滑らかな複素射影曲面、$C$ が滑らかな射影曲線であり、$f:S\to C$ が上記のファイバー構造で、$\overline{\mathrm{Eff}}(S)$ が多面体であることである。曲面が一般型であることは、この定理自体には要求されていない。

Mori dream空間の場合の等式はCasagrandeの結果からも従うとIntroductionは説明する。本論文の新しさは、異なる方法で、擬有効錐の多面体性というより弱い仮定にまで拡張する点にある。また同じ曲面の擬有効錐が多面体なら、どのファイバー構造を選んでも $n(f)$ は同じになる。Introductionは、一般にはFermat四次曲面上で異なる値を持つ二つのファイバー構造が存在することも指摘する。

### 非多面体性の数値的判定（Corollary B）

同じ滑らかさとファイバー構造の仮定の下で、

<div>
$$
\rho(S)>n(f)+2
$$
</div>

ならば $\overline{\mathrm{Eff}}(S)$ は多面体でない。したがって $S$ はMori dream空間ではない。これはTheorem Aの対偶を使う判定であり、錐の全ての境界を計算することなく非Mori dream性を示せる。逆に等式を満たすことがMori dream性の十分条件であるとは主張していない。

### 曲面への応用

Introductionで説明される応用は、適切なファイバー構造に対して上の不等式を確かめるものである。ある種のHirzebruch曲面の二重被覆には、各 $p_g\geq3$ に対するHorikawa曲面の例が含まれ、その一般型極小曲面としての不変量は $K^2=2p_g-4$ を満たす。全てのHorikawa曲面についての主張ではない。

Fermat曲面については $\mathbb P^3$ 内の全ての次数 $d\geq4$ が対象になる。さらに有限群が曲線の積に対角的に作用して得られる商の極小特異点解消のうち、論文が扱う特定の積商曲面にも非多面体性が成立する。

Craighero–Gattazzo曲面は、単連結で $p_g=0$、$K^2=1$ の極小一般型曲面である。本論文はこの曲面の擬有効錐が非多面体であることを示す。Introductionが比較するPicard数2の別の非Mori dream曲面の例では擬有効錐は多面体であり、今回の障害はそれらとは異なる。

楕円ファイバー構造に関しては、$S\to\mathbb P^1$ が切断を持ち、$S$ がMori dream空間なら、一般ファイバーを函数体上の楕円曲線と見たMordell–Weil群が有限になるという応用も挙げられる。これは複素数体上の一つの閉ファイバーの全ての点の群が有限という意味ではない。

## 証明の見取り図

Introductionが示す全体の経路は、まず擬有効錐の多面体性からTheorem Aの等式を導き、その対偶を具体的なファイバー構造に適用するというものである。各曲面についてPicard数と可約ファイバーの寄与を比較し、等式が成立し得ないことから錐の非多面体性を結論する。Theorem A自体の詳細な証明方法はIntroductionでは展開されておらず、ここでは後続節の議論を補っていない。

## 原論文との対応

- **Abstractページ:** [The Picard number of fibred Mori dream surfaces](https://arxiv.org/abs/2608.29485)
- **Introduction:** [PDF](https://arxiv.org/pdf/2608.29485v2) — Section 1, pp. 2–3（Abstractはp. 1）
- **Introduction中で言及された主要結果:** Theorem A（Theorem 3.4）、Corollary B（Corollary 3.5）、楕円ファイバー構造への応用（Corollary 3.8）、Introductionで列挙される各曲面への応用
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2608.29485v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
