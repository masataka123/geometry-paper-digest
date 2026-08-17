---
layout: paper
title: "Quasi-Projective Moduli for Polarized klt Good Minimal Models"
title_ja: "偏極klt良極小モデルの準射影的モジュライ"
authors: "Xiaowei Jiang"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We prove the weak positivity of direct images for locally stable families of klt good minimal models
  over reduced quasi-projective bases using Gabber's Extension Theorem. As an application, we apply
  Viehweg's ampleness criterion to show that the normalization of the moduli space of polarized klt
  good minimal models of arbitrary Kodaira dimension, constructed in [Jia23], is quasi-projective.
topic: algebraic-geometry
tags:
  - singularities
  - minimal-model-program
  - positivity
  - vector-bundles-sheaves
  - moduli
arxiv_id: "2605.09898v1"
arxiv_url: "https://arxiv.org/abs/2605.09898"
arxiv_submitted: "2026-05-11"
arxiv_updated: "2026-05-11"
summary: >-
  偏極klt良極小モデルのモジュライ空間の正規化が、任意の小平次元で準射影スキームになることを示す。核心は、非正規・非固有な底上の局所安定族について、Gabberの拡張定理を用いて直像層の弱正値性を確立する点にある。
abstract_en: ""
summary_en: >-
  The paper studies the algebraic geometry of the moduli space of polarized klt good minimal models in arbitrary Kodaira dimension. Its normalization is proved to be quasi-projective, with an additional criterion covering the original moduli space. The main input is a weak-positivity theorem for direct images in locally stable klt families over reduced quasi-projective bases, obtained through Gabber's extension theorem and then combined with Viehweg's ampleness criterion.
abstract_ja: >-
  本論文は、偏極klt良極小モデルの局所安定族について直像層の弱正値性を証明する。Gabberの拡張定理によって非固有・非正規な底への降下の障害を処理し、Viehwegの増幅性判定を適用することで、既に構成されていた任意小平次元のモジュライ空間の正規化が準射影的であることを導く。
abstract_source_url: "https://arxiv.org/abs/2605.09898"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2605.09898v1](https://arxiv.org/abs/2605.09898v1)
- **著者:** Xiaowei Jiang
- **初回投稿日:** 2026年5月11日
- **最終更新日:** 2026年5月11日（v1）
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

極小モデル理論から見た高次元多様体の分類では、標準偏極、Fano、Calabi--Yau、さらにそれらの反復ファイブレーションのモジュライが中心課題となる。標準偏極多様体やFano多様体では射影的モジュライ理論が発達しているが、偏極Calabi--Yauや一般の良極小モデルでは有界性が難しい。

とくに特異退化を許すと、偏極はCartier因子ではなく $\mathbb Q$-Cartier Weil因子となり得る。kltの場合にはそのCartier指数が有界であり、Jiangの先行研究でモジュライ関手 $\mathcal G_{\mathrm{klt}}(d,u,\sigma)$ と粗モジュライ空間 $G_{\mathrm{klt}}(d,u,\sigma)$ が構成された。本論文は、その非固有なモジュライ空間の準射影性を扱う。

第一の結論は、$G_{\mathrm{klt}}(d,u,\sigma)$ の正規化が準射影スキームになることである。非正規 locus が固有なら、正規化前の空間自身も準射影になる。

技術的核心は、被約準射影底上の局所安定klt族について、相対標準因子に関する直像層の局所自由性・base change整合性・弱正値性を証明することである。固有で正規な底で知られたnef性を単純に降下できない問題を、Gabberの拡張定理とtrace mapが分裂する有限被覆の構成により克服する。

## 背景と問題設定

滑らかな偏極良極小モデルのモジュライが準射影的であることはViehwegにより知られていた。しかしコンパクト化に必要な特異退化では偏極のCartier性が失われる。slcの場合には指数が一般に有界でないのに対し、kltに限定すれば指数有界性を利用できる。本論文はこのkltモジュライの代数空間構造を、準射影性まで進める。

非固有モジュライに対するViehwegの増幅性判定では、固有の場合のnef性に対応する入力として弱正値性が必要になる。しかし弱正値性は、非固有または非正規な底に対して有限被覆から自動的に降下しない。この非関手性が主要な技術的障害である。

## 主結果

### 主定理1（Theorem 1.1 = Theorem 4.5）

$\delta:\widetilde G_{\mathrm{klt}}(d,u,\sigma)\to G_{\mathrm{klt}}(d,u,\sigma)$ を正規化とすると、

$$
\widetilde G_{\mathrm{klt}}(d,u,\sigma)
$$

は準射影スキームである。さらに $G_{\mathrm{klt}}(d,u,\sigma)$ の非正規 locus が固有なら、$G_{\mathrm{klt}}(d,u,\sigma)$ 自身も準射影スキームである。既存の有限型・分離的な粗モジュライ空間に、ample line bundleを供給できることが数学的内容である。

### 弱正値性定理（Theorem 1.2 = Theorem 3.4）

$f:(X,B)\to S$ を被約準射影スキーム上のklt対の局所安定族とし、$K_X+B$ は $f$-semiample、$L$ は $f$-semiample line bundleとする。ある $l\in\mathbb N$ について全ての $s\in S$ で

$$
\operatorname{lct}(X_s,B_s,|L_s|)>\frac1l
$$

であり、$f_*L$ が階数 $r>0$ の局所自由層で任意のbase changeと整合すると仮定する。$q\ge2$ かつ $q(K_{X/S}+B)$ がCartierなら、各 $i\ge0$ で

$$
R^if_*\bigl(\mathcal O_X(ql(K_{X/S}+B))\otimes L^q\bigr)
$$

は局所自由でbase changeと整合し、

$$
\left(\bigotimes^r f_*\bigl(\mathcal O_X(ql(K_{X/S}+B))\otimes L^q\bigr)\right)
\otimes\det(f_*L)^{-q}
$$

は $S$ 上弱正値である。

### 非偏極版（Theorem 1.3 = Theorem 3.2）

同じく $f:(X,B)\to S$ を局所安定klt族、$K_X+B$ を $f$-semiampleとする。$q\ge2$ かつ $q(K_{X/S}+B)$ がCartierなら、全ての $i\ge0$ で

$$
R^if_*\mathcal O_X\bigl(q(K_{X/S}+B)\bigr)
$$

は局所自由でbase changeと整合し、とくに $f_*\mathcal O_X(q(K_{X/S}+B))$ は $S$ 上弱正値である。Theorem 1.2はfiber product trickによりこの定理へ還元される。

## 証明の見取り図

Theorem 1.3では、弱半安定還元とlc対のMMPを使い、generically finiteなbase change後に直像層を固有滑らかな底上のnef局所自由層へ拡張する。ただし弱正値性は元の非固有・非正規底へ直接降下できない。

そこで底をstratificationしながら、trace mapが分裂する有限被覆を構成する。Gabberの拡張定理は、有限被覆のコンパクト化上に局所自由層を延長し、そのnef性を保つ。分裂traceを用いて弱正値性を元の底へ降下し、fiber product trickで偏極を含むTheorem 1.2を得る。最後にViehwegの増幅性判定をモジュライへ適用してTheorem 1.1を導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2605.09898v1](https://arxiv.org/abs/2605.09898v1)
- **Introduction:** Section 1, pp. 1--4
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2, 1.3
- **論文構成の説明:** p. 1（Contents）
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
