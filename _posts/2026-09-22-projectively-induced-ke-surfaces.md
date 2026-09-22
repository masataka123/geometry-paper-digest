---
layout: paper
title: "Projectively induced Kähler--Einstein surfaces"
title_ja: "射影的に誘導されるKähler–Einstein曲面の分類"
authors: "Andrea Loi, Mirel Caibăr"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
arxiv_abstract: "We classify compact Kähler--Einstein surfaces whose metric is induced by a holomorphic isometric immersion into a finite-dimensional complex projective space. No symmetry assumption and no bound on the codimension are imposed. We prove that the only such surfaces are \\[ (\\PP^2,m g_{\\FS}) \\quad\\text{and}\\quad \\bigl(\\PP^1\\times\\PP^1,m(g_{\\FS}\\oplus g_{\\FS})\\bigr), \\qquad m\\in\\mathbb Z_{>0}, \\] realized respectively by the Veronese and Segre--Veronese embeddings. The main new ingredient is a codimension-independent exclusion of the entire Fano-index-one branch, combining a common anticanonical root construction with Gram--Gauss rank estimates and, in degree five, an equivariant curvature argument. Consequently, every connected compact Kähler--Einstein surface whose metric is induced by a holomorphic isometric immersion into a finite-dimensional complex projective space is homogeneous."
topic: differential-geometry
tags:
  - kahler-einstein-metrics
  - fano-varieties
arxiv_id: "2609.22832v1"
arxiv_url: "https://arxiv.org/abs/2609.22832"
arxiv_submitted: "2026-09-19"
arxiv_updated: "2026-09-19"
summary: "有限次元射影空間から誘導される計量を持つコンパクトKähler–Einstein曲面を、対称性や余次元の上限なしに分類する。結論は $\\mathbb P^2$ と $\\mathbb P^1\\times\\mathbb P^1$ の標準計量の正整数倍だけであり、曲面の場合のLoi–Zedda予想を解決する。"
abstract_en: "We classify compact Kähler--Einstein surfaces whose metric is induced by a holomorphic isometric immersion into a finite-dimensional complex projective space. No symmetry assumption and no bound on the codimension are imposed. We prove that the only such surfaces are \\[ (\\PP^2,m g_{\\FS}) \\quad\\text{and}\\quad \\bigl(\\PP^1\\times\\PP^1,m(g_{\\FS}\\oplus g_{\\FS})\\bigr), \\qquad m\\in\\mathbb Z_{>0}, \\] realized respectively by the Veronese and Segre--Veronese embeddings. The main new ingredient is a codimension-independent exclusion of the entire Fano-index-one branch, combining a common anticanonical root construction with Gram--Gauss rank estimates and, in degree five, an equivariant curvature argument. Consequently, every connected compact Kähler--Einstein surface whose metric is induced by a holomorphic isometric immersion into a finite-dimensional complex projective space is homogeneous."
summary_en: ""
abstract_ja: "有限次元複素射影空間へ正則等長埋め込みを持つコンパクトKähler–Einstein曲面を、対称性や余次元の仮定なしに分類する。そのような曲面は、正整数倍のFubini–Study計量を持つ射影平面、または積計量の正整数倍を持つ $\\mathbb P^1\\times\\mathbb P^1$ に限られ、それぞれVeronese埋め込みとSegre–Veronese埋め込みで実現される。"
abstract_source_url: "https://arxiv.org/abs/2609.22832"
license_name: "CC BY 4.0"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.22832](https://arxiv.org/abs/2609.22832)
- **著者:** Andrea Loi, Mirel Caibăr
- **初回投稿日:** 2026-09-19
- **最終更新日:** 2026-09-19
- **主分類・副分類:** math.DG, math.AG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

有限次元射影空間から誘導される計量を持つコンパクトKähler–Einstein曲面を、対称性や余次元の上限なしに分類する。結論は $\mathbb P^2$ と $\mathbb P^1\times\mathbb P^1$ の標準計量の正整数倍だけであり、曲面の場合のLoi–Zedda予想を解決する。

有限次元複素射影空間へ正則等長埋め込みを持つコンパクトKähler–Einstein曲面を、対称性や余次元の仮定なしに分類する。そのような曲面は、正整数倍のFubini–Study計量を持つ射影平面、または積計量の正整数倍を持つ $\mathbb P^1\times\mathbb P^1$ に限られ、それぞれVeronese埋め込みとSegre–Veronese埋め込みで実現される。

主結果の仮定と結論を区別し、以下ではAbstractとIntroductionに明記された範囲だけを扱う。後続節の証明を独立に検証したものではない。

## 背景と問題設定

射影的に誘導されるKähler計量とは、有限次元射影空間への正則等長はめ込みから得られる計量である。Hulinの結果によりコンパクトKähler–Einstein例のEinstein定数は正であり、問題はdel Pezzo曲面の分類へ帰着する。従来は小余次元や対称性の仮定の下で分類が進んでいた。

## 主結果

### 主定理（Theorem 1.1）

連結コンパクトKähler–Einstein曲面 $(X,g)$ が $(\mathbb P^N,g_{\mathrm{FS}})$ へ正則等長にはめ込まれるなら、ある $m\in\mathbb Z_{>0}$ に対して

$$ (X,g)\simeq(\mathbb P^2,m g_{\mathrm{FS}}) $$

または

$$ (X,g)\simeq(\mathbb P^1\times\mathbb P^1,m(g_{\mathrm{FS}}\oplus g_{\mathrm{FS}})) $$

である。はめ込みはそれぞれ標準的な $m$ 次Veronese埋め込み、$(m,m)$ 型Segre–Veronese埋め込みに射影ユニタリ同値である。

## 証明の見取り図

Hulinの正値性からFano曲面へ帰着し、Fano indexごとに分ける。index 3と2は標準例を与え、index 1のdel Pezzo曲面を排除する。新しい部分は次数1から5を余次元に依存せず排除することであり、共通の反標準根構成、Gram–Gauss rank評価、次数5での同変曲率論を組み合わせる。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.22832](https://arxiv.org/abs/2609.22832)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorem 1.1
- **確認したarXivバージョン:** 2609.22832v1
- **確認したライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **source_scope:** Abstract and Introduction
