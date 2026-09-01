---
layout: paper
title: "Projectivity criteria for Kähler morphisms"
title_ja: "Kähler射の射影性判定"
authors: "Benoît Claudon, Andreas Höring"
arxiv_primary_category: "math.AG"
arxiv_categories: [math.AG, math.CV]
arxiv_abstract: >-
  In this short note we prove two projectivity criteria for fibrations between mildly singular compact Kähler spaces. They are the relative versions of the celebrated criteria of Kodaira and Moishezon. As an application we obtain that the MRC fibration always has a model that is a projective morphism.
topic: algebraic-geometry
tags: [positivity, minimal-model-program]
arxiv_id: "2404.13927v1"
arxiv_url: "https://arxiv.org/abs/2404.13927"
arxiv_submitted: "2024-04-22"
arxiv_updated: "2024-04-22"
summary: >-
  コンパクトKähler多様体間のファイブレーションについて、Kodaira判定とMoishezon定理の相対版を証明する。2形式の引き戻しが同型である場合、または射がMoishezonである場合に射影射となり、klt Kähler空間のMRCファイブレーションが射影的モデルをもつことが従う。
abstract_en: ""
summary_en: >-
  This note gives two relative criteria ensuring that a fibration of compact Kähler manifolds is projective. One criterion is cohomological and compares global holomorphic two-forms; the other assumes relative Moishezonness. The two cases use distinct methods, respectively Hodge decomposition and a relative minimal model program. An application supplies a projective model for the maximal rationally connected fibration of a mildly singular compact Kähler space.
abstract_ja: >-
  軽い特異点を許すコンパクトKähler空間のファイブレーションに対し、二つの射影性判定を与える。これらはKodairaの判定とMoishezonの定理の相対版である。応用として、最大有理鎖連結ファイブレーションには射影射となるモデルが常に存在する。
abstract_source_url: "https://arxiv.org/abs/2404.13927"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2404.13927v1](https://arxiv.org/abs/2404.13927)
- **著者:** Benoît Claudon, Andreas Höring
- **初回投稿日・最終更新日:** 2024年4月22日
- **主分類・副分類:** math.AG（主分類）, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

コンパクトKähler多様体が射影的かを判定する古典的な二つの道具は、正則2形式の消滅を使うKodaira判定と、bigな直線束を使うMoishezon定理である。本論文はこれらを射$f:X\to Y$の相対的な問題へ拡張する。

第一の判定は$f^*:H^0(Y,\Omega_Y^2)\to H^0(X,\Omega_X^2)$が同型であること、第二の判定は$f$がMoishezon、すなわち$f$-bigな直線束をもつことを仮定する。いずれの場合にも$f$は射影射となる。

二つの証明は異質である。前者はHodge分解から相対 ampleな直線束を構成し、後者は双有理修正を通じて射影性を保つ相対MMPを使う。この第二の方法が特異空間にも適用でき、MRCファイブレーションへの応用を与える。

## 背景と問題設定

ファイブレーションを連結ファイバーをもつ固有全射とする。$f$が射影的とは$f$-ampleな直線束が存在すること、Moishezonとは$f$-bigな直線束が存在することをいう。局所射影性だけでなく、大域的な相対 ample束を得る点が問題である。

## 主結果

### 射影性判定（Theorem 1.1）

コンパクトKähler多様体間のファイブレーション$f:X\to Y$について、次のいずれかが成り立てば$f$は射影射である。

1. $f^*:H^0(Y,\Omega_Y^2)\to H^0(X,\Omega_X^2)$が同型である。
2. $f$-bigな直線束が存在する。

第一条件はコホモロジー的に定数なファイブレーション、とりわけMRCファイブレーションの滑らかなモデルで満たされる。第二条件は従来の局所射影性を大域射影性へ強める。

### MRCファイブレーションへの応用（Theorem 1.2）

正規コンパクトKähler空間$X$がklt特異点をもつなら、そのMRCファイブレーションには射影射となるモデルが存在する。

## 証明の見取り図

第一条件ではHodge分解により相対Kähler類を有理$(1,1)$類へ調整し、相対 ample直線束を構成する。第二条件ではMoishezon射の射影的log resolutionから出発し、相対MMPを走らせて元のモデルへ戻る間に射影性を保つ。特異版はstrongly $\mathbb Q$-factorialなklt空間に対する相対MMPを用いる。

## 原論文との対応

- **Abstractページ:** [arXiv:2404.13927](https://arxiv.org/abs/2404.13927)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2
- **論文構成の説明:** p. 2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
