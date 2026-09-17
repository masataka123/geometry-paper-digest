---
layout: paper
title: "Collapsed Finite Time Singularities of the Kähler-Ricci Flow on Complex Surfaces are of Type I"
title_ja: "複素曲面上の崩壊する有限時間Kähler–Ricci流特異点はType Iである"
authors: "Tongxin Xu, Zhenlei Zhang"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  We prove that any finite-time collapsing Kähler-Ricci flow on compact Kähler surfaces develops a Type I singularity. Together with the previous results, this implies that any finite time singularity of the Kähler-Ricci flow on compact Kähler surfaces is of Type I.
topic: differential-geometry
tags:
  - kahler-ricci-flow-solitons
  - curvature
  - metric-limits
arxiv_id: "2609.18834v1"
arxiv_url: "https://arxiv.org/abs/2609.18834"
arxiv_submitted: "2026-09-16"
arxiv_updated: "2026-09-16"
summary: >-
  コンパクトKähler曲面上で有限時間に体積崩壊するKähler–Ricci流を扱い、その曲率発散がType I評価を満たすことを示す。既知の消滅型・非崩壊型の結果と合わせ、曲面上の有限時間特異点はすべてType Iであるという予想を解決し、特異ファイバー上の接流も同定する。
abstract_en: ""
summary_en: >-
  This work settles the collapsing case of finite-time singularity formation for the Kähler–Ricci flow on compact Kähler surfaces. It establishes the Type I curvature rate and identifies blow-up limits based at singular fibers. Combined with earlier results for extinction and noncollapsing behavior, the theorem completes the surface-level classification by singularity rate.
abstract_ja: >-
  コンパクトKähler曲面上の有限時間Kähler–Ricci流が体積崩壊する場合、特異点はType Iとなる。既知の結果と組み合わせることで、コンパクトKähler曲面上の任意の有限時間特異点がType Iであることが従う。
abstract_source_url: "https://arxiv.org/abs/2609.18834"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.18834](https://arxiv.org/abs/2609.18834)
- **著者:** Tongxin Xu, Zhenlei Zhang
- **初回投稿日:** 2026年9月16日
- **最終更新日:** 2026年9月16日
- **主分類・副分類:** math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

非正規化Kähler–Ricci流を有限の最大存在時間 $T$ まで考える。Type Iとは、ある一様定数 $C$ に対して

$$
\sup_M |\operatorname{Rm}(\omega(t))|_{\omega(t)}\leq \frac{C}{T-t}
$$

が成り立つことをいう。この曲率率なら、適切な放物型拡大の極限はKähler–Ricci shrinkerとして理解できる。

複素曲面の場合、有限時間特異点は消滅型、体積非崩壊型、体積崩壊型に分かれる。前二者のType I性は既知であり、残っていたのが、体積は0へ落ちる一方で直径は0へ落ちない崩壊型であった。

本論文は崩壊型にもType I評価が成立することを証明する。さらに特異ファイバー上での接流がBCCD shrinker $\operatorname{Bl}_p(\mathbb P^1\times\mathbb C)$ になることを示し、既知結果と合わせて曲面の場合の予想を完結させる。

## 背景と問題設定

崩壊型では $M$ はルールド曲面と双有理であり、正則な $\mathbb P^1$-ファイブレーション $p:M\to\Sigma$ を通じて解析される。極限Kähler類は基底からの引き戻しとなり、通常のファイバー近傍ではType I評価が既に得られていた。難点は、$\mathbb P^1$ でないファイバーの集合 $\Delta\subset\Sigma$ の上で曲率を制御することにある。

## 主結果

### 主定理（Theorem 1.1）

有限時間 $T$ まで存在するコンパクトKähler曲面上のKähler–Ricci流について、

$$
\lim_{t\nearrow T}\operatorname{Vol}(M,\omega(t))=0
$$

ならば、$t=T$ に生じる特異点はType Iである。これは崩壊型に残されていた曲率評価を与える結果である。

### 特異ファイバー上の接流（Corollary 1.2）

$x_0\in p^{-1}(\Delta)$ と $\tau_i\searrow0$ に対し、拡大流

$$
(M,\tau_i^{-1}g(T+\tau_i t),J,x_0)
$$

は部分列を取ると、pointed $C^\infty$ Cheeger–Gromov位相でBCCD shrinker $\operatorname{Bl}_p(\mathbb P^1\times\mathbb C)$ へ収束する。消滅型・非崩壊型の既知結果と合わせると、曲面上の有限時間特異点はすべてType Iとなる。

## 証明の見取り図

Introductionは証明を二段階に分ける。まずBamlerのコンパクト性理論から得られるorbifold接shinkerを、$\mathbb P^1$-ファイブレーションの局所位相と最小解消の比較によって滑らかと示す。分類結果から残るcylinderとBCCDのうち、特異ファイバー成分の自己交叉とentropyの一致を用いてcylinderを排除する。

次に、正則ファイバーを避ける領域での既知評価を後方 $P^*$-近傍へ拡張し、secondary tangent-flow argumentを適用する。BCCD模型の二本の $(-1)$-曲線を元の特異ファイバーへ変形して近傍を制御し、$P^*$-comparisonと外部評価を組み合わせてType II blow-upを排除する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.18834](https://arxiv.org/abs/2609.18834)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Corollary 1.2
- **論文構成の説明:** p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
