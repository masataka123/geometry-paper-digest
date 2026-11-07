---
layout: paper
title: Positivity of the exterior power of the tangent bundles
title_ja: 接束の外冪がnefな多様体のFanoファイブレーション構造
authors: Kiwamu Watanabe
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
- math.DG
arxiv_abstract: Let $X$ be a complex smooth projective variety such that the exterior power of the tangent bundle $\bigwedge^{r} T_X$ is nef for some $1\leq r<\dim X$. We prove that, up to an \'etale cover, $X$ is a Fano fiber space over an Abelian variety. This gives generalizations of the structure theorem of varieties with nef tangent bundle by Demailly, Peternell and Schneider and that of varieties with nef $\bigwedge^{2} T_X$ by the author. Our result also gives an answer to a question raised by Li, Ou and Yang for varieties with strictly nef $\bigwedge^{r} T_X$ when $r < \dim X$.
topic: algebraic-geometry
tags:
- positivity
- vector-bundles-sheaves
- fano-varieties
arxiv_id: 2208.06735v1
arxiv_url: https://arxiv.org/abs/2208.06735v1
arxiv_submitted: '2022-08-13'
arxiv_updated: '2022-08-13'
summary: 接束の最高次未満の外冪がnefな滑らかな射影多様体は、有限エタール被覆後にアーベル多様体上の局所自明なFanoファイブレーションとなる。接束自体がnefな場合の構造定理を一般化し、strictly nefな外冪に関するFano性の問いにも答える。
abstract_en: ''
summary_en: An intermediate exterior power of the tangent bundle retains enough positivity to constrain the whole variety. This paper shows that, after a finite étale cover, the geometry consists of Fano fibers over an abelian base. The dimension of that base determines whether the full tangent bundle is nef or only a relative exterior power is forced to be nef. The key reduction identifies rationally connected varieties satisfying the exterior-power hypothesis as Fano.
abstract_ja: 複素滑らかな射影多様体で接束のr次外冪がnef、かつrが次元未満なら、有限エタール被覆後にアーベル多様体上の局所自明ファイブレーションが得られ、そのファイバーはFanoとなる。底の次元がr−1以上なら接束自体がnefとなり、それより小さい場合には相対接束の対応する外冪がnefとなる。有理連結な場合のFano性を経由し、strictly nefな外冪に関する問いも最高次未満で肯定的に解決する。
abstract_source_url: https://arxiv.org/abs/2208.06735v1
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2208.06735v1](https://arxiv.org/abs/2208.06735v1)
- **著者:** Kiwamu Watanabe
- **初回投稿日:** 2022-08-13
- **最終更新日:** 2022-08-13
- **主分類・副分類:** math.AG（主分類）; math.CV, math.DG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

接束がnefであることは多様体の大域的な構造を強く制限する。古典的な構造定理では、有限エタール被覆の後に、アーベル多様体を底とするFanoファイブレーションが得られる。本論文は接束自体ではなく、その外冪だけがnefである場合にも同じ形の結論が残ることを示す。

仮定する外冪の次数は、次元より小さい任意の値でよい。従来の接束および第二外冪の場合を統一し、Fanoファイバーの幾何へ問題を帰着する。底のアーベル多様体の次元に応じて、接束全体または相対接束の外冪のnef性も得られる。

核となるのは、有理連結性と最高次未満の外冪のnef性がそろえば、多様体がFanoになるという命題である。これを反標準因子がnefな多様体の既存の構造定理と組み合わせることで、短い証明を与える。

## 背景と問題設定

$X$ を複素 $n$ 次元滑らかな射影多様体とし、

$$
\bigwedge^rT\_X\ \text{がnef},\qquad 1\leq r<n
$$

を仮定する。外冪のnef性は接束自体のnef性より弱い条件である。最高次の外冪は反標準束に対応するが、反標準束がnefであるだけでは有理連結なファイバーがFanoになるとは限らない。

Introductionでは、Demailly–Peternell–Schneiderによるnef接束の場合の定理をTheorem 1.1、Cao–Höringによるnef反標準因子の場合の定理をTheorem 1.2として引用する。これらは本論文の新しい定理とは区別される。

## 主結果

### アーベル底上のFanoファイブレーション（Theorem 1.3）

適切な有限エタール被覆 $\widetilde X\to X$ の後、局所自明なファイブレーション

$$
\varphi:\widetilde X\longrightarrow A
$$

が存在し、$A$ はアーベル多様体、ファイバー $F$ はFano多様体となる。従って、この種の多様体の研究は、Fano多様体の接束の外冪の正値性へ帰着する。

さらに $\dim A\geq r-1$ なら $T\_X$ 自体がnefである。一方 $\dim A<r-1$ なら

$$
\bigwedge^{r-\dim A}T\_{\widetilde X/A}\ \text{がnef}
$$

となる。底の次元がどれだけの接方向を供給するかによって、残る相対方向の正値性が変わる。

### 有理連結な場合のFano性（Proposition 1.4）

$X$ がさらに有理連結なら

$$
-K\_X\ \text{が豊富}
$$

となる。nefな反標準因子をもつ有理連結多様体全般についての主張ではなく、$r<n$ の外冪のnef性が追加条件として働いている。

### strictly nefな外冪への応用（Question 1.5への回答）

$\bigwedge^rT\_X$ がstrictly nefで $r<n$ なら、既知の有理連結性の結果とProposition 1.4を合わせて $X$ がFanoであることが従う。これによりLi–Ou–Yangの問いにこの範囲で肯定的に答える。最高次 $r=n$ まで解決したとは述べていない。

## 証明の見取り図

Introductionが挙げる要点は二つある。まず、ある外冪のnef性からより高い外冪のnef性を得る既知の結果により、$\bigwedge^{n-1}T\_X$ の場合へ移る。次にGachetの議論を、有理連結かつこの外冪がnefという条件へ適用し、Fano性を導く。

反標準因子がnefな多様体の既存の分解定理に、この有理連結ファイバーのFano性を組み込むことで主定理に至る。接束の外冪から出発して、既知の大域的構造定理のファイバーをより強く制御するという方法である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2208.06735v1)
- **Introduction:** [PDF](https://arxiv.org/pdf/2208.06735v1) — 指定版v1のSection 1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorem 1.3; Proposition 1.4; Question 1.5（Theorems 1.1, 1.2は先行研究）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2208.06735v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
