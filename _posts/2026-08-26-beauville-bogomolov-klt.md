---
layout: paper
title: "Beauville-Bogomolov decomposition for klt varieties"
title_ja: "klt多様体のBeauville--Bogomolov分解"
authors: "Henri Guenancia"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DG
arxiv_abstract: >-
  These lecture notes present a mostly self-contained proof of the singular version of Beauville-Bogomolov decomposition theorem for compact K\"ahler varieties with log terminal singularities and zero first Chern class.
topic: algebraic-geometry
tags:
  - singularities
  - calabi-yau-geometry
  - hyperkahler-geometry
  - vector-bundles-sheaves
arxiv_id: "2509.10053v2"
arxiv_url: "https://arxiv.org/abs/2509.10053"
arxiv_submitted: "2025-09-12"
arxiv_updated: "2025-10-27"
summary: >-
  $c_1=0$を満たすコンパクトklt Kähler多様体が、有限quasi-étale被覆の後に複素トーラス、既約Calabi--Yau多様体、既約holomorphic symplectic多様体の積へ分解する定理を解説する講義録である。滑らかな場合のholonomy論が特異点上で直接使えない障害と、それを層の安定性・葉層の代数的可積分性で克服する道筋を示す。
abstract_en: ""
summary_en: >-
  These lecture notes develop a largely self-contained account of the singular Beauville--Bogomolov decomposition. A compact Kähler variety with klt singularities and vanishing first Chern class acquires, after a finite quasi-étale cover, a product decomposition into a torus, irreducible Calabi--Yau factors, and irreducible holomorphic symplectic factors. The exposition contrasts the classical holonomy proof with the obstacles caused by the incomplete regular locus. It then explains the replacement inputs involving reflexive tangent sheaves, holonomy, algebraically integrable foliations, and deformation to the projective setting.
abstract_ja: >-
  対数的端末特異点を持ち第一Chern類が零であるコンパクトKähler多様体に対し、特異版Beauville--Bogomolov分解定理のほぼ自己完結した証明を提示する講義録である。有限quasi-étale被覆の後、多様体を複素トーラス、既約Calabi--Yau成分、既約holomorphic symplectic成分の積へ分解する。滑らかな場合のholonomyによる議論と、klt特異点を持つ場合に必要な新しい入力を整理する。
abstract_source_url: "https://arxiv.org/abs/2509.10053"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2509.10053](https://arxiv.org/abs/2509.10053)
- **著者:** Henri Guenancia
- **初回投稿日:** 2025年9月12日
- **最終更新日:** 2025年10月27日（v2）
- **主分類・副分類:** math.AG（主分類）, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかなコンパクトKähler多様体で$c_1=0$なら、Beauville--Bogomolov分解は有限étale被覆の後にトーラス、既約Calabi--Yau成分、既約holomorphic symplectic成分へ積分解できることを述べる。Ricci平坦計量、Bochner原理、de Rham分解、holonomy分類が古典的証明の骨格である。

双有理幾何では極小モデルがkltやterminal特異点を持つため、同じ構造定理を特異Kähler多様体へ拡張する必要がある。講義録の中心である特異版ではétale被覆をquasi-étale被覆へ置き換え、反射的微分形式と特異版の既約因子を用いる。

正則部分上のRicci平坦計量は不完備なので、普遍被覆へde Rham分解やCheeger--Gromoll定理をそのまま適用できない。そこで接層の多安定分解とholonomyを使って平坦方向を検出し、非平坦因子を葉層として取り出して代数的可積分性と分裂定理へつなぐ。

射影の場合の分解を先に構成し、一般のKählerの場合は変形理論を介して射影の場合へ還元する点も、滑らかな古典証明との本質的な違いである。本稿は新定理の速報ではなく、近年確立された特異版定理とその証明を統合的に解説する講義録である。

## 背景と問題設定

滑らかな場合、$c_1(X)=0$からYauの定理でRicci平坦計量を得る。Bochner原理により大域holomorphic tensorは平行となり、普遍被覆は

$$
(\widetilde X,\pi^*\omega)=
(\mathbf C^k,\omega_{\mathbf C^k})\times\prod_{i\in I}(X_i,\omega_i)
$$

と分かれる。既約holonomyは$\mathrm{SU}(n_i)$または$\mathrm{Sp}(n_i)$であり、それぞれ既約Calabi--Yau成分と既約holomorphic symplectic成分を生む。

kltの場合にも正則部分上のRicci平坦計量、Bochner原理、制限holonomyの同定は残るが、正則部分の不完備性が距離幾何的分解を妨げる。したがって接層の反射的な構造とquasi-étale被覆を通じた代数幾何的分裂が必要となる。

## 主結果

### 滑らかな分解定理（Theorem 1.1として再録）

$X$を$c_1(X)=0\in H^2(X,\mathbf C)$を満たすコンパクトKähler多様体とする。ある有限étale被覆$X'\to X$が存在して

$$
X'=T\times\prod_{i\in I}Y_i\times\prod_{j\in J}Z_j
$$

と分解する。$T$は複素トーラス、$Y_i$は既約Calabi--Yau多様体、$Z_j$は既約holomorphic symplectic多様体である。

### klt特異版（Theorem 1.3）

$X$をklt特異点を持ち$c_1(X)=0\in H^2(X,\mathbf C)$を満たす正規コンパクトKähler多様体とする。このとき有限quasi-étale被覆$f:X'\to X$が存在し、同じ形の積分解

$$
X'=T\times\prod_{i\in I}Y_i\times\prod_{j\in J}Z_j
$$

を持つ。各$Y_i$と$Z_j$はGreb--Kebekus--Peternell型の定義による特異な既約Calabi--Yau多様体、既約holomorphic symplectic多様体である。

## 証明の見取り図

Introductionが挙げる新しい入力は、quasi-étale被覆上の1形式による接層の平坦方向の同定、正則部分のholonomyの連結成分数の有限性、射影の場合における非平坦葉層の代数的可積分性、そして代数的可積分葉層の分裂定理である。これらで接層の分解を実際の積分解へ昇格させる。一般Kählerの場合は射影近似を用いる変形論的議論により射影版へ橋を架ける。

## 原論文との対応

- **Abstractページ:** [arXiv:2509.10053](https://arxiv.org/abs/2509.10053)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Conjecture 1.2, Theorem 1.3
- **論文構成の説明:** Contents, p. 1
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
