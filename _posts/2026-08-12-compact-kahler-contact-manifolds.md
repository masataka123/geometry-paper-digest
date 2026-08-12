---
layout: paper
title: "Compact Kähler contact manifolds"
title_ja: "コンパクトKähler接触多様体"
authors: "Jie Liu"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
topic: algebraic-geometry
arxiv_id: "2604.26425v1"
arxiv_url: "https://arxiv.org/abs/2604.26425"
arxiv_submitted: "2026-04-29"
arxiv_updated: "2026-04-29"
summary: >-
  非射影的なコンパクトKähler接触多様体を分類し、あるコンパクトKähler多様体の射影化接束に限ることを示す。一般Kähler空間で未確立の収縮定理を、最大有理連結商と有理曲線族で置き換える。
abstract_en: ""
summary_en: >-
  The paper classifies compact Kähler contact manifolds outside the projective category. It proves that every non-projective example is the projectivized tangent bundle of a compact Kähler manifold, with its natural contact line bundle. The argument replaces the unavailable general Kähler contraction theorem by the maximally rationally connected quotient and deformation theory of rational curves. This extends a result previously known in complex dimension three.
abstract_ja: >-
  非射影的なコンパクトKähler接触多様体は、必ずコンパクトKähler多様体$Y$の射影化接束$\mathbb P(T_Y)$であることを証明する。接触線束まで含めると自然な$\mathcal O_{\mathbb P(T_Y)}(1)$と同型になる。この結論はKähler三次元では既知だったが、本論文は任意の奇数次元へ拡張する。
abstract_source_url: "https://arxiv.org/abs/2604.26425"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2604.26425v1](https://arxiv.org/abs/2604.26425v1)
- **著者:** Jie Liu
- **初回投稿日・最終更新日:** 2026年4月29日（v1）
- **主分類・副分類:** math.AG（主分類）、math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素次元$2n+1$の接触多様体は、接分布$D$と接触線束$L$を持ち、

$$
0\longrightarrow D\longrightarrow T_X\longrightarrow L\longrightarrow0
$$

が成り立ち、Lie括弧から誘導される$\wedge^2D\to L$が各点で非退化となる。基本例は任意の複素多様体$Y$の$\mathbb P(T_Y)$であり、もう一つは単純Lie代数の随伴多様体である。

射影的接触多様体については、第二Betti数が2以上ならこの標準的構成による分類が知られている。しかしKählerの場合、Mori理論の収縮定理が一般次元で使えない。本論文は、非射影的なコンパクトKähler接触多様体にも射影化接束以外の例がないことを示す。

結論は多様体だけでなく接触線束を含む同型として与えられる。射影性を仮定しない点と、三次元で知られていた結果を全次元へ拡張する点が主な前進である。

## 背景と問題設定

射影的な場合の既存証明は、DemaillyのFrobenius可積分性定理、Ionescu–Wiśniewski不等式、Mori収縮定理を核とする。最初の二つはKähler settingへ移せるが、一般のKähler空間に対する収縮定理は三次元を除いて未解決である。

一方、既知の結果からコンパクトKähler接触多様体はuniruledである。そこで論文は収縮写像を直接作る代わりに、最大有理連結商を調べ、射影空間からなる優勢族を構成して射影束構造を取り出す。

## 主結果

### 非射影Kähler接触多様体の分類（Theorem 1.1）

$(X,L)$を非射影的なコンパクトKähler接触多様体とする。このとき、あるコンパクトKähler多様体$Y$が存在して

$$
(X,L)\simeq\bigl(\mathbb P(T_Y),\mathcal O_{\mathbb P(T_Y)}(1)\bigr)
$$

となる。したがって、非射影Kähler領域でも未知の型のコンパクト接触多様体は生じず、標準的な射影化接束に分類される。

## 証明の見取り図

まずDouady空間・Barlet空間を介してIonescu–Wiśniewski不等式をKähler多様体へ適応する。次に接触多様体のunirulednessから最大有理連結商を考え、収縮定理の代替とする。Araujoの結果を用いて$X$を覆う射影空間族を得た後、その族が実際に射影束構造を定めることを示し、接触線束を$\mathcal O(1)$と同定する。

## 原論文との対応

- **Abstractページ:** [arXiv:2604.26425v1](https://arxiv.org/abs/2604.26425v1)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中の主要結果:** Theorem 1.1
- **論文構成:** Sections 2–4で不等式、有理曲線の変形、主定理の証明
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
