---
layout: paper
title: "Generalized Bogomolov Inequalities"
title_ja: "一般化Bogomolov不等式"
authors: "Mihai Pavel, Julius Ross, Matei Toma"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We introduce the notion of a Hodge-Riemann pair of cohomology classes that generalizes the classical Hodge-Riemann bilinear relations, and the notion of a Bogomolov pair of cohomology classes that generalizes the Bogomolov inequality for semistable sheaves. We conjecture that every Hodge-Riemann pair is a Bogomolov pair, and prove various cases of this conjecture. As an application we get new results concerning boundedness of semistable sheaves.
topic: algebraic-geometry
tags:
  - chern-classes
  - stability
  - vector-bundles-sheaves
  - positivity
  - moduli
arxiv_id: "2510.04663v2"
arxiv_url: "https://arxiv.org/abs/2510.04663"
arxiv_submitted: "2025-10-06"
arxiv_updated: "2026-05-03"
summary: >-
  Hodge–Riemann双線型関係と半安定層のBogomolov不等式を同時に一般化する正のコホモロジー類のpairを導入する。Schur類からなる広いクラスで一般化不等式を証明し、偏極が動くときの半安定torsion-free層の有界性と有限型モジュライへ応用する。
abstract_en: >-
  We introduce the notion of a Hodge-Riemann pair of cohomology classes that generalizes the classical Hodge-Riemann bilinear relations, and the notion of a Bogomolov pair of cohomology classes that generalizes the Bogomolov inequality for semistable sheaves. We conjecture that every Hodge-Riemann pair is a Bogomolov pair, and prove various cases of this conjecture. As an application we get new results concerning boundedness of semistable sheaves.
summary_en: ""
abstract_ja: >-
  正のコホモロジー類の組にHodge–Riemann pairとBogomolov pairという概念を導入し、前者なら後者であるという予想を提示する。Kähler類のSchur多項式から得られる組で予想を証明し、ample vector bundleのSegre類・Chern類についても条件付き結果を得る。さらに、動く高次偏極に関して半安定なtorsion-free層の有界性とモジュライのwall-chamber構造へ応用する。
abstract_source_url: "https://arxiv.org/abs/2510.04663"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2510.04663](https://arxiv.org/abs/2510.04663)
- **著者:** Mihai Pavel, Julius Ross, Matei Toma
- **初回投稿日:** 2025年10月6日
- **最終更新日:** 2026年5月3日（v2）
- **主分類・副分類:** math.AG（主分類。副分類なし）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

$d$ 次元コンパクト複素多様体上の正の類 $\\eta_{d-1},\\eta_{d-2}$ に対し、Hodge–Riemann型の負定値性と、半安定層に対するBogomolov不等式を別々の条件として定式化する。本論文はすべてのHodge–Riemann pairがBogomolov pairであると予想し、多くの場合を証明する。

中心例はKähler類のSchur多項式から作るpairである。Hermite–Einstein計量とLübkeの点ごとのdiscriminant計算を用い、安定vector bundleからtorsion-free層、さらに半安定層へ拡張する。

応用として、高次の正の類を偏極に用いる半安定層を、pairが連続的に動く状況で有界化する。これは有限型モジュライとwall-chamber構造の構成を支える。

## 背景と問題設定

Hodge–Riemann pairの条件は、$\\int_X\\alpha\\cdot\\eta_{d-1}=0$ なら

$$
\\int_X\\alpha^2\\cdot\\eta_{d-2}\\le0
$$

で、等号は $\\alpha=0$ のときに限るというもの。Bogomolov pairの予想条件は、$\\eta_{d-1}$-半安定なrank $r$ のtorsion-free層 $E$ に対して

$$
\\int_X\\bigl(2r c_2(E)-(r-1)c_1(E)^2\\bigr)\\cdot\\eta_{d-2}\\ge0
$$

が成り立つことである。

## 主結果

### Schur類の場合（Theorem 1.5）

$e\\ge d-1$ 個のKähler類 $\\alpha_i$ と長さ $d-1$ のpartition $\\lambda$ に対し、

$$
(s_\\lambda(\\alpha_1,\\ldots,\\alpha_e),s'_\\lambda(\\alpha_1,\\ldots,\\alpha_e))
$$

はBogomolov pairである。

### Segre類・Chern類（Theorems 1.6, 1.7）

ample vector bundle $A$ に明示された最大勾配条件を課すと $(s_{d-1}(A),s_{d-2}(A))$ がBogomolov pairとなる。さらに $A$ がglobally generatedかつampleで $c_d(A)>\\mu_{\\max,c_{d-1}(A)}(A)$ なら $(c_{d-1}(A),c_{d-2}(A))$ もBogomolov pairとなる。

### 有界性（Theorem 1.8）

Hodge–RiemannかつBogomolovなpairを保つpath-connected compact familyが古典的ample pairを含むなら、その第一成分のいずれかに関して半安定な、rankとChern類を固定したtorsion-free層の同型類全体は有界である。

## 証明の見取り図

Theorem 1.5ではSchur類からGauduchon計量を作り、Hitchin–Kobayashi対応とLübkeのdiscriminant計算を適用する。解消により安定torsion-free層へ、rankに関する帰納で半安定層へ移る。他の定理はこの解析的計算とは独立に証明されるとIntroductionは明記する。

## 原論文との対応

- **Introduction:** Section 1, pp. 1–4
- **主要定理:** Theorems 1.5–1.8; Corollary 1.9
- **確認version:** v2
- **source_scope:** Abstract and Introduction
