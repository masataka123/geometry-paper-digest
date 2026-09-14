---
layout: paper
title: "Relative Finite Energy Classes for Complex Hessian Equations with Prescribed Singularities"
title_ja: "指定特異性を持つ複素Hessian方程式の相対有限energy類"
authors: "Truong Dinh Dat"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
arxiv_abstract: >-
  Let $\Omega\subset \mathbb C^n$ be a bounded $m$-hyperconvex domain and let $\psi\in SH_m(\Omega)$ be a fixed negative $m$-subharmonic function. In this paper we introduce a relative finite energy class $\mathcal E_{m,\psi}(\Omega),$ which may be viewed as a Hessian analogue of the relative energy classes appearing in the pluripotential theory of complex Monge--Amp\`ere equations. We develop a systematic pluripotential theory in this setting. More precisely, we introduce a relative Hessian capacity associated with the prescribed singularity type $\psi$, construct relative mixed Hessian products, and establish their fundamental properties. We prove a monotone convergence theorem and a Bedford--Taylor type continuity theorem for Hessian measures in the class $\mathcal E_{m,\psi}(\Omega)$. A central result of the paper is a relative comparison principle, which yields uniqueness of solutions to complex Hessian equations with prescribed singularities. As an application, we establish an existence and uniqueness theorem for the equation $(dd^c u)^m\wedge\beta^{n-m} =\mu $ for a large class of positive Radon measures that do not charge $m$-polar sets. The results obtained here provide a relative finite energy framework for complex Hessian equations and extend several fundamental aspects of Cegrell's theory to the setting of prescribed singularity types.
topic: several-complex-variables
tags:
  - pluripotential-theory
  - monge-ampere-equations
arxiv_id: "2609.12032v1"
arxiv_url: "https://arxiv.org/abs/2609.12032"
arxiv_submitted: "2026-09-10"
arxiv_updated: "2026-09-10"
summary: >-
  有界 $m$-hyperconvex領域上で指定特異性 $\psi$ を持つ相対有限energy類 $\mathcal E_{m,\psi}$ を導入し、混合Hessian積・単調収束・Bedford--Taylor型連続性を構築する。相対比較原理から一意性を得て、$m$-polar集合を荷電しない広い測度に対する複素Hessian方程式の存在一意性を示す。
abstract_en: ""
summary_en: >-
  The paper develops a relative finite-energy setting for complex Hessian equations on bounded hyperconvex domains. A prescribed singularity model determines a class on which mixed Hessian measures are defined by canonical truncation and enjoy monotone continuity. A relative comparison principle makes the Hessian operator injective. Combined with capacity estimates and approximation, this gives existence and uniqueness for broad non-polar measure data satisfying a relative energy condition.
abstract_ja: >-
  有界 $m$-hyperconvex領域 $\Omega\subset\mathbb C^n$ と負の $m$-劣調和関数 $\psi$ を固定し、相対有限energy類 $\mathcal E_{m,\psi}(\Omega)$ を導入する。これは複素Monge--Ampère方程式の相対energy類に対応するHessian版である。指定特異性に付随する相対Hessian容量と混合Hessian積を構成し、単調収束およびBedford--Taylor型連続性を証明する。相対比較原理から解の一意性を導き、$m$-polar集合を荷電せず適切な相対energy条件を満たす正Radon測度に対して複素Hessian方程式の解の存在一意性を得る。
abstract_source_url: "https://arxiv.org/abs/2609.12032"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.12032](https://arxiv.org/abs/2609.12032)
- **著者:** Truong Dinh Dat
- **初回投稿日:** 2026年9月10日
- **最終更新日:** 2026年9月10日
- **主分類・副分類:** math.CV（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素Hessian作用素

$$
H_m(u)=(dd^cu)^m\wedge\beta^{n-m},\qquad \beta=dd^c|z|^2
$$

は $m=1$ のLaplace方程式と $m=n$ の複素Monge--Ampère方程式を補間する。既存の有限energy理論を、基準関数 $\psi$ と同程度の指定特異性を許す相対設定へ拡張することが本論文の目的である。

相対類 $\mathcal E_{m,\psi}(\Omega)$ 上で、canonical truncationにより混合Hessian積を定義する。単調列に対する弱収束とBedford--Taylor型連続性を確立し、指定特異性のもとでも作用素を安定に扱える枠組みを与える。

中心となる相対比較原理はHessian作用素の単射性、したがって解の一意性を導く。容量評価、近似、compactnessを組み合わせ、$m$-polar集合を荷電しない測度に対する解の存在も証明する。

## 背景と問題設定

$\Omega\subset\mathbb C^n$ を有界 $m$-hyperconvex領域、$1\leq m\leq n$ とする。CegrellのMonge--Ampère有限energy理論に相対特異性を組み込む手法は発展してきたが、Hessian設定では利用できる構造が少なく、相対作用素、連続性、比較原理を改めて構成する必要がある。

## 主結果

### 相対混合Hessian積（Theorem 1.1）

$u_1,\ldots,u_m\in\mathcal E_{m,\psi}(\Omega)$ なら

$$
dd^cu_1\wedge\cdots\wedge dd^cu_m\wedge\beta^{n-m}
$$

はwell-definedである。これは $u_{j,k}=\max(u_j,\psi-k)$ の混合Hessian測度の弱極限として得られる。

### 単調連続性（Theorem 1.2）

各 $1\leq k\leq m$ で $u_j^k\downarrow u^k$ となる相対有限energy類の減少列に対し、対応する混合Hessian測度は極限関数の混合Hessian測度へ弱収束する。

### 相対比較原理（Theorem 1.3）

$u,v\in\mathcal E_{m,\psi}(\Omega)$ なら

$$
\int_{\{u<v\}}H_m(v)\leq\int_{\{u<v\}}H_m(u).
$$

特にHessian作用素はこの相対類上で単射となる。

### 指定特異性を持つ方程式（Theorem 1.4）

有限正Radon測度 $\mu$ が $m$-polar集合を荷電せず、Introductionで述べられる適切な相対energy条件を満たすなら、

$$
(dd^cu)^m\wedge\beta^{n-m}=\mu
$$

を満たす $u\in\mathcal E_{m,\psi}(\Omega)$ が一意に存在する。energy条件の厳密な定義は本文に委ねられており、ここでは推測による補足をしない。

## 証明の見取り図

まず相対Hessian容量 $\operatorname{Cap}_{m,\psi}$ によりsublevel集合と有界energy族を制御する。canonical truncation $u_k=\max(u,\psi-k)$ と一様energy評価から混合積を極限として構成する。相対積分部分公式が連続性と比較原理を与え、一意性が従う。存在は測度と解の近似、容量によるcompactness、安定性を組み合わせて示す。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.12032](https://arxiv.org/abs/2609.12032)
- **Introduction:** Section 1
- **Introduction中で言及された主要定理番号:** Theorems 1.1--1.4
- **論文構成の説明:** Introduction末尾のOrganization of the paper
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
