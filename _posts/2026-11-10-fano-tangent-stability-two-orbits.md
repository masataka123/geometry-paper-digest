---
layout: paper
title: Fano manifolds and stability of tangent bundles
title_ja: 二軌道Fano多様体の接束の安定性と反例
authors: Akihiro Kanemitsu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We determine the stability/instability of the tangent bundles of the Fano varieties in a certain class of two orbit varieties, which are classified by Pasquier in 2009. As a consequence, we show that some of these varieties admit unstable tangent bundles, which disproves a conjecture on stability of tangent bundles of Fano manifolds.
topic: algebraic-geometry
tags:
- fano-varieties
- stability
- vector-bundles-sheaves
- foliations
arxiv_id: 1912.12617v1
arxiv_url: https://arxiv.org/abs/1912.12617v1
arxiv_submitted: '2019-12-29'
arxiv_updated: '2019-12-29'
summary: Picard数1のFano多様体でも接束は半安定とは限らない。Pasquierが分類した二軌道多様体について安定性を決定し、特定のB型の族とF₄型の例が従来の予想への反例になることを示す。
abstract_en: ''
summary_en: A small Picard group does not prevent the tangent bundle of a Fano manifold from being destabilized. Kanemitsu examines a classified family selected by the orbit structure of its automorphism group and of a blowup. The resulting case-by-case theorem singles out two sources of failure of semistability and proves stability in every remaining case. Canonical foliations provide the geometric route to the criterion.
abstract_ja: 自己同型群の作用で二つの軌道に分かれ、閉軌道の爆発後にも二軌道性を保つPicard数1のFano多様体を扱う。Pasquierの分類の各場合について接束のMumford–Takemoto安定性を判定する。その中には半安定でない例があり、Picard数1なら接束が（半）安定であるという予想は一般には成り立たない。
abstract_source_url: https://arxiv.org/abs/1912.12617v1
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:1912.12617v1](https://arxiv.org/abs/1912.12617v1)
- **著者:** Akihiro Kanemitsu
- **初回投稿日:** 2019-12-29
- **最終更新日:** 2019-12-29
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Fano多様体にKähler–Einstein計量が存在するかは重要な問題であり、接束のMumford–Takemoto安定性はそれより弱い安定性の指標として研究されてきた。特にPicard数1の場合、接束は常に安定、少なくとも半安定であるという予想があった。

本論文は、自己同型群による軌道が二つで、閉軌道を爆発しても同じ二軌道構造を保つFano多様体のクラスを調べる。このクラスはPasquierによって分類済みであり、著者はその各場合で接束の安定性を完全に判定する。

結論は一様な安定性ではない。ある$B\_n$型の族と$F\_4$型のhorospherical多様体では接束が半安定でさえなく、他の場合には安定となる。したがって主結果は分類された例の追加にとどまらず、Picard数1という条件だけでは接束の半安定性を保証できないことを示す。

## 背景と問題設定

$X$は反標準因子$-K\_X$が豊富な滑らかな射影多様体である。IntroductionのConjecture 0.1は

$$
\rho\_X=1\quad\Longrightarrow\quad \Theta\_X\text{ は（半）安定}
$$

という予想であり、本論文の定理ではない。射影空間の滑らかな完全交叉、低次元、ある種のFano指数の範囲などでは先行研究によって確認されていた。ここでいう安定性は接束のMumford–Takemoto安定性で、K-polystabilityとは別の条件である。

調べる対象はCondition 0.2を満たす。すなわち$\rho\_X=1$で、$\operatorname{Aut}^0(X)$の作用について

$$
X=X^0\sqcup Z
$$

が開軌道と閉軌道への分解となり、$Z$に沿う爆発$\operatorname{Bl}\_Z X$も開軌道$X^0$と例外因子の二軌道だけを持つ。単に二軌道を持つ任意のFano多様体まで対象を広げてはいけない。

## 主結果

### 判定対象の分類（Theorem 0.3：Pasquierの既知の結果）

上の条件を満たす多様体は、非簡約な自己同型群を持つhorospherical多様体、または半単純群が作用する二つの特別な多様体に分かれる。前者はDynkin型と基本ウェイトの三つ組で次のように指定される。

$$
\begin{gathered}
(B\_n,\omega\_{n-1},\omega\_n)\ (n\ge3),\qquad
(B\_3,\omega\_1,\omega\_3),\\
(C\_n,\omega\_k,\omega\_{k-1})\ (n\ge2,\ 2\le k\le n),\\
(F\_4,\omega\_2,\omega\_3),\qquad (G\_2,\omega\_1,\omega\_2).
\end{gathered}
$$

後者は$F\_4$型の群が作用する$\mathcal P\_{F\_4}$と、$A\_1\times G\_2$型の群が作用する$\mathcal P\_{A\_1\times G\_2}$である。この分類自体は先行研究であり、著者の新しい結果は次の安定性判定である。

### 主定理：半安定性が破れる場合の決定（Theorem 0.4）

上記の分類に属する$X$について、接束$\Theta\_X$が半安定でないのは

$$
(B\_n,\omega\_{n-1},\omega\_n)\quad(n\ge4),
\qquad
(F\_4,\omega\_2,\omega\_3)
$$

の場合である。それ以外のすべての場合には$\Theta\_X$は安定である。特に最初の$B\_n$型でも$n=3$は不安定な族には含まれない。またhorosphericalな$F\_4$型の例と、別の分類項目である$\mathcal P\_{F\_4}$を混同しないことが重要である。

この定理によってConjecture 0.1の半安定性の部分まで否定される。一方、horosphericalな場合は自己同型群が非簡約であるため、Matsushimaの障害によりKähler–Einstein計量を持たない。この中にも安定な接束を持つ例があるので、接束の安定性とKähler–Einstein計量の存在が異なる条件であることも具体的に表れる。

## 証明の見取り図

Introductionが示す道筋は、不安定化する部分層を群作用と両立する葉層構造へ結び付けることである。まず接束が不安定なら適切な群不変葉層の集合が空でないことを保証し、Pasquierの分類に現れる各多様体の幾何を記述する。

続いて各多様体上に標準的な葉層を導入し、その性質によって接束の安定性を判定する基準を作る。この基準を分類の各項目へ適用する。Introductionには各場合の数値計算や基準の完全な式までは示されていないため、ここでは葉層が安定性判定を担うという役割にとどめる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/1912.12617v1)
- **Introduction:** [PDF](https://arxiv.org/pdf/1912.12617v1) — 冒頭 §§0.1–0.3・Convention 0.5, pp. 1–3
- **Introduction中で言及された主要結果:** Conjecture 0.1; Condition 0.2; Theorems 0.3–0.4
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 1912.12617v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
