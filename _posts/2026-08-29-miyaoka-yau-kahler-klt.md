---
layout: paper
title: "The Miyaoka-Yau inequality for minimal Kähler klt spaces"
title_ja: "極小Kähler klt空間に対するMiyaoka–Yau不等式"
authors: "Chuanjing Zhang, Shiyu Zhang, Xi Zhang"
arxiv_primary_category: "math.DG"
arxiv_categories: [math.DG, math.AG]
arxiv_abstract: >-
  In this paper, we obtain the generalized Bogomolov inequality for reflexive Higgs sheaves defined on the regular locus of compact Kähler klt spaces. As an application, we establish the Miyaoka-Yau inequality for all minimal Kähler klt spaces. Apart from providing a self-contained formulation and investigation of Higgs sheaves on complex normal spaces, the analytical part of our approach is the establishment of $L^p$-approximate critical Hermitian structures for Higgs orbi-bundles on Gauduchon orbifolds. This also leads to the semistability (resp. generically nefness) of torsion-free sheaves under symmetric, exterior powers and tensor products in the singular setting.
topic: differential-geometry
tags: [singularities, chern-classes, higgs-nonabelian-hodge, stability, vector-bundles-sheaves]
arxiv_id: "2503.13365v2"
arxiv_url: "https://arxiv.org/abs/2503.13365"
arxiv_submitted: "2025-03-17"
arxiv_updated: "2025-11-13"
summary: >-
  コンパクトKähler klt空間の正則部分上の反射的Higgs層に対する一般化Bogomolov不等式を確立し、全ての極小Kähler klt空間にorbifold Chern類のMiyaoka–Yau不等式を示す。Gauduchon orbifold上のHiggs orbi-bundleに$L^p$近似臨界Hermitian構造を構成する解析が中心となる。
abstract_en: ""
summary_en: >-
  The paper proves an orbifold Miyaoka–Yau inequality for compact Kähler spaces with klt singularities and nef canonical sheaf. Its main technical theorem is a generalized Bogomolov inequality for reflexive Higgs sheaves on the regular locus. The analytic input is the construction of approximate critical Hermitian structures for Higgs orbibundles on Gauduchon orbifolds. The framework also controls semistability and generic nefness under standard tensor operations in the singular setting.
abstract_ja: >-
  コンパクトKähler klt空間の正則部分上で定義された反射的Higgs層に一般化Bogomolov不等式を示し、その応用として全ての極小Kähler klt空間にMiyaoka–Yau不等式を確立する。解析的な核心はGauduchon orbifold上のHiggs orbi-bundleに対する$L^p$近似臨界Hermitian構造の構成である。
abstract_source_url: "https://arxiv.org/abs/2503.13365"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2503.13365v2](https://arxiv.org/abs/2503.13365v2)
- **著者:** Chuanjing Zhang, Shiyu Zhang, Xi Zhang
- **初回投稿日:** 2025年3月17日
- **最終更新日:** 2025年11月13日
- **主分類・副分類:** math.DG（主分類）, math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかな一般型Kähler多様体のMiyaoka–Yau不等式は、標準束の正値性と第一・第二Chern類を結ぶ。射影klt多様体では$\mathbb Q$-Chern類による拡張が知られていたが、超曲面切断を利用できない非射影Kähler空間への拡張が問題であった。

本論文はorbifold Chern類と反射的Higgs層を用い、標準層がnefな任意のコンパクトKähler klt空間に不等式を証明する。その過程で、nefかつbigな類に関するHarder–Narasimhan型を誤差項に持つ一般化Bogomolov不等式を得る。

解析的な新規性は、部分orbifold解消上のHiggs orbi-bundleに$L^p$近似臨界Hermitian構造を構成する点にある。これはChern–Weil理論を通じて不等式を生み、対称冪、外積、テンソル積の下での半安定性とgeneric nefnessも導く。

## 背景と問題設定

$X$を$n$次元コンパクトKähler klt空間、$K_X$をnefとし、$\nu(K_X)$を数値次元とする。余次元2ではklt特異点が商特異点であるためorbifold Chern類$\widehat c_i(X)$を定義できる。課題は射影的な超曲面切断に頼らず、これらの交点数を解析的に制御することである。

## 主結果

### Orbifold Miyaoka–Yau不等式（Theorem 1.1）

$i=\min(\nu(K_X),n-2)$とすると、任意のKähler形式$\omega_X$について

$$
\left(2\widehat c_2(X)-\frac{n}{n+1}\widehat c_1(X)^2\right)
\cdot K_X^i\cdot[\omega_X]^{n-2-i}\geq0
$$

が成り立つ。これにより射影性を仮定せず、全ての極小Kähler klt空間を覆う。

### 一般化Bogomolov型不等式（Theorem 1.2）

$X_{\mathrm{reg}}$上の階数$r$の反射的Higgs層$(E,\theta)$とnefかつbigな類$\alpha$について、Harder–Narasimhan型$(\mu_{1,\alpha},\ldots,\mu_{r,\alpha})$を用いて

$$
\left(2\widehat c_2(E)-\frac{r-1}{r}\widehat c_1(E)^2\right)\cdot\alpha^{n-2}
\geq-\frac{n}{n-1}
\frac{\sum_{j=1}^r(\mu_\alpha(E)-\mu_{j,\alpha})^2}{\alpha^n}
$$

を示す。半安定な場合には右辺が0となり、通常のBogomolov–Gieseker型の非負性を回復する。

## 証明の見取り図

まず余次元2の商特異点を扱う部分orbifold解消へ移り、反射的微分形式の関手的引き戻しによりHiggs場をorbi-sheafへ延長する。Gauduchon orbifold上で$L^p$近似臨界Hermitian構造を構成し、Chern–Weil公式から一般化Bogomolov不等式を導く。最後に自然なHiggs層$\Omega_X^{[1]}\oplus\mathcal O_X$へ適用し、$K_X+\varepsilon\omega_X$に関して$\varepsilon\to0$とすることで数値次元の全範囲のMiyaoka–Yau不等式を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2503.13365v2](https://arxiv.org/abs/2503.13365v2)
- **Introduction:** Section 1, pp. 2–5
- **主要結果:** Theorems 1.1, 1.2; Corollaries 1.3, 1.4
- **確認したarXivバージョン:** v2
- **source_scope:** Abstract and Introduction
