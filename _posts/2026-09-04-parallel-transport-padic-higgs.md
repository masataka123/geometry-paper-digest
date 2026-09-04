---
layout: paper
title: "Parallel transport for Higgs bundles over p-adic curves"
title_ja: "p進曲線上のHiggs束に対する平行移動"
authors: "Daxin Xu"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  Faltings conjectured that under the p-adic Simpson correspondence, finite dimensional p-adic representations of the geometric étale fundamental group of a smooth proper p-adic curve X are equivalent to semi-stable Higgs bundles of degree zero over X. In this article, we establish, over a p-adic curve of genus $g\ge 2$, an equivalence between these representations and Higgs bundles, whose underlying bundles potentially admit a strongly semi-stable reduction of degree zero. We show that these Higgs bundles are semi-stable of degree zero and investigate some evidence for the aforementioned conjecture.
topic: algebraic-geometry
tags:
  - higgs-nonabelian-hodge
  - stability
  - vector-bundles-sheaves
  - positive-characteristic
arxiv_id: "2201.06697v4"
arxiv_url: "https://arxiv.org/abs/2201.06697"
arxiv_submitted: "2022-01-18"
arxiv_updated: "2026-08-31"
summary: >-
  種数2以上の $p$ 進曲線上で、幾何的étale基本群の有限次元 $p$ 進表現と、潜在的に次数0の強半安定還元を持つHiggs束との圏同値を構成する。これはFaltingsの $p$ 進Simpson対応予想に対する部分的な実現であり、対応するHiggs束が次数0の半安定束となることも示す。
abstract_en: ""
summary_en: >-
  For a p-adic curve of genus at least two, the paper constructs an equivalence between finite-dimensional p-adic representations of the geometric étale fundamental group and a category of potentially Deninger--Werner Higgs bundles. The latter acquire strongly semistable degree-zero reduction after a suitable finite cover and twisted pullback. Every Higgs bundle in this essential image is semistable of degree zero. Parallel transport and descent provide a quasi-inverse to the extended p-adic Simpson functor.
abstract_ja: >-
  Faltingsは、滑らかな固有 $p$ 進曲線の幾何的étale基本群の有限次元 $p$ 進表現が、次数0の半安定Higgs束と同値になると予想した。本論文は種数 $g\ge2$ の曲線について、これらの表現と、基礎ベクトル束が潜在的に次数0の強半安定還元を持つHiggs束との同値を確立する。得られるHiggs束が次数0で半安定であることも証明し、予想を支持する結果を与える。
abstract_source_url: "https://arxiv.org/abs/2201.06697"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2201.06697](https://arxiv.org/abs/2201.06697)
- **著者:** Daxin Xu
- **初回投稿日:** 2022年1月18日
- **最終更新日:** 2026年8月31日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素幾何のSimpson対応に対応する $p$ 進理論として、Faltingsは $p$ 進曲線の幾何的étale基本群表現と次数0の半安定Higgs束との同値を予想した。既存の $p$ 進Simpson対応は「小さな」対象に対して定義されるため、一般の連続有限次元表現への拡張と本質像の記述が問題となる。

本論文は、有限被覆上のねじれた逆像によってDeninger--Werner型の次数0強半安定還元を持つHiggs束の圏を取り出す。この圏と基本群表現の間に関手と擬逆関手を構成し、圏同値を得る。

対応の本質像に属するHiggs束はすべて次数0の半安定束である。したがって予想された対応の一方向を確立し、逆に任意の次数0半安定Higgs束がこの圏に属するかを未解決問題として残す。

## 背景と問題設定

$K$ を $\mathbb Q_p$ の有限拡大、$C$ をその代数閉包の $p$ 進完備化、$X$ を $K$ 上の幾何的連結な滑らかな固有曲線とする。対象は $\pi_1(X_{\overline K},x)$ の連続 $C$-表現と $X_C$ 上のHiggs束である。

基礎ベクトル束がDeninger--Werner型であるとは、特殊ファイバーの各既約成分の正規化上で次数0の強半安定還元を持つことである。「潜在的」とは、適切な有限étale被覆とねじれた逆像の後にこの条件を満たすことを指す。

## 主結果

### 表現と潜在的Deninger--Werner Higgs束の同値（Theorem 1.1.7）

種数 $g\ge2$ の安定曲線に対し、拡張された $p$ 進Simpson関手 $H_{X,\mathrm{Exp}}$ は潜在的Deninger--Werner Higgs束の圏を経由し、平行移動から作る関手 $V_{X,\mathrm{Exp}}$ が擬逆関手を与える。すなわち

$$
\operatorname{Rep}(\pi_1(X_{\overline K},x),C)
\simeq \operatorname{HB}^{\mathrm{pDW}}_{X,\mathrm{Exp}}(X_C)
$$

が成り立つ。

### 半安定性（Theorem 1.1.9）

右辺の圏のすべての対象は次数0の半安定Higgs束である。この圏はabel圏で拡大について閉じ、次数0のすべてのHiggs線束を含む。任意の次数0半安定Higgs束がこの圏に入るかはFaltingsの問題として未解決である。

## 証明の見取り図

ねじれた逆像関手により小さな対象の $p$ 進Simpson対応を一般の表現へ拡張する。Deninger--Werner束の法 $p^n$ 還元が有限被覆上で自明化する性質をHiggs crystalへ広げ、そこから平行移動で表現を回復する。小さな対象上で既存の対応と一致することと、étale descentを用いて二つの関手が擬逆であることを示す。

## 原論文との対応

- **Abstractページ:** [arXiv:2201.06697](https://arxiv.org/abs/2201.06697)
- **Introduction:** Section 1.1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorems 1.1.7, 1.1.9; Proposition 1.1.12
- **論文構成の説明:** Section 1.1.14, p. 5
- **確認したarXivバージョン:** v4
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
