---
layout: paper
title: "Characterization of Sobolev regularity of plurisubharmonic functions"
title_ja: "多重劣調和関数のSobolev正則性の特徴付け"
authors: "Hongrong Chen, Guokuan Shao, Wenxuan Wang"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
arxiv_abstract: >-
  Let $f$ be a nonzero holomorphic germ at $0 \in \mathbb C^n$ with $f(0)=0$, and let $\chi$ be a $C^2$ non-decreasing convex function on the left half-line. We establish sharp necessary and sufficient conditions for the local Sobolev regularity of the plurisubharmonic function $v=\chi(\log|f|).$ The criteria for the $L^p$-integrability of the classical Laplacian and for $W^{1,p}$-regularity are given by a weighted integral involving $\chi''$ and $\chi'$, respectively, and depend on $f$ only through the smallest multiplicity of $\operatorname{Div}(f)$. We also obtain the $W^{2,p}_{\mathrm{loc}}$ criterion for $1<p<\infty$. At the endpoint $p=1$, we prove that \[ v\in W^{2,1}_{\mathrm{loc}} \quad\Longleftrightarrow\quad \chi'\in L^1((-\infty,A)), \] equivalently, $v$ is locally bounded. As applications, we obtain counterexamples to Calder\'on-Zygmund theory and characterize a class of functions in the local Monge--Amp\`ere domain. % and exhibit a natural family in $W^{2,1}_{\mathrm{loc}}$ whose limit fails to belong to $W^{2,1}_{\mathrm{loc}}$.
topic: several-complex-variables
tags:
  - pluripotential-theory
  - monge-ampere-equations
arxiv_id: "2609.39136v1"
arxiv_url: "https://arxiv.org/abs/2609.39136"
arxiv_submitted: "2026-09-30"
arxiv_updated: "2026-09-30"
summary: >-
  正則関数芽 $f$ と凸増加関数 $\chi$ から作る多重劣調和関数 $v=\chi(\log|f|)$ の局所Sobolev正則性を完全に特徴付ける。判定は因子の最小重複度と $\chi'$, $\chi''$ の重み付き積分に帰着し、$p=1$ の端点も含む。
abstract_en: ""
summary_en: >-
  The authors give sharp integral tests for Sobolev regularity of plurisubharmonic functions obtained by composing a logarithmic holomorphic singularity with a convex function. The dependence on the germ is compressed into the least divisor multiplicity. The endpoint second-order criterion is equivalent to local boundedness.
abstract_ja: >-
  正則関数芽 $f$ と凸増加関数 $\chi$ から作る多重劣調和関数 $v=\chi(\log|f|)$ の局所Sobolev正則性を完全に特徴付ける。判定は因子の最小重複度と $\chi'$, $\chi''$ の重み付き積分に帰着し、$p=1$ の端点も含む。
abstract_source_url: "https://arxiv.org/abs/2609.39136"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.39136](https://arxiv.org/abs/2609.39136)
- **著者:** Hongrong Chen, Guokuan Shao, Wenxuan Wang
- **初回投稿日・最終更新日:** 2026年09月30日
- **主分類・副分類:** math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

$f$を$0\\in\\mathbb C^n$で消える非零正則関数芽、$\\chi$を左半直線上の$C^2$凸増加関数とし、$v=\\chi(\\log|f|)$を考える。本論文は$v$のLaplacianの$L^p$可積分性、$W^{1,p}$および$W^{2,p}$正則性を必要十分条件で特徴付ける。

条件が$f$の詳細な特異点型ではなく、$\\operatorname{Div}(f)$の最小重複度だけに依存する点が特徴である。端点$p=1$では二階Sobolev正則性が局所有界性と同値になる。

## 背景と問題設定

対数特異性を凸関数で弱めたpsh関数はpluripotential theoryの自然な模型である。一方、古典的Calderón–Zygmund評価はこの特異な複素解析的状況でそのまま働かない。

## 主結果

### 一階正則性とLaplacian（Theorem 1.1）

$1\\le p<\\infty$について、$\\Delta v\\in L^p_{\\mathrm{loc}}$および$v\\in W^{1,p}_{\\mathrm{loc}}$を、それぞれ$\\chi''$と$\\chi'$の重み付き一変数積分の収束で特徴付ける。重みの指数には因子の最小重複度が現れる。

### 二階正則性（Theorems 1.2, 1.3）

$1<p<\\infty$では$W^{2,p}_{\\mathrm{loc}}$の必要十分条件を与える。$p=1$では

$$
v\\in W^{2,1}_{\\mathrm{loc}}\quad\\Longleftrightarrow\quad
\\chi'\\in L^1(( -\\infty,A))
$$

であり、これは$v$の局所有界性とも同値である。

### 応用（Theorem 1.5）

得られた判定からCalderón–Zygmund型含意への反例を構成し、局所Monge–Ampère domainに属するこの形の関数を特徴付ける。

## 証明の見取り図

log resolutionにより$f$の零因子をnormal crossingsへ変換し、微分の可積分性を極座標型の一変数積分へ還元する。最悪の成分が最小重複度だけを残し、sharpな必要十分条件を与える。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.39136](https://arxiv.org/abs/2609.39136)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorems 1.1–1.5
- **論文構成の説明:** Introduction末尾
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
