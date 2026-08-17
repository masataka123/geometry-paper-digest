---
layout: paper
title: "Analytic Bertini theorem II --- The local case"
title_ja: "解析的Bertini定理 II――局所版"
authors: "Mingchen Xia"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
  - math.DG
arxiv_abstract: >-
  We prove the local analytic Bertini theorem, confirming a conjecture of Boucksom in full generality.
topic: algebraic-geometry
tags:
  - l2-methods
  - complex-analytic-spaces
arxiv_id: "2607.25230v1"
arxiv_url: "https://arxiv.org/abs/2607.25230v1"
arxiv_submitted: "2026-07-28"
arxiv_updated: "2026-07-28"
summary: >-
  多重劣調和関数の乗数イデアルを一般のファイバーへ制限したとき、ファイバー上で直接作る乗数イデアルと一致することを、例外集合を多重極集合にまで精密化して示す。局所解析的Bertini定理についてのBoucksomの予想を解決し、一般の正則写像にも拡張する。
abstract_en: >-
  We prove the local analytic Bertini theorem, confirming a conjecture of Boucksom in full generality.
summary_en: ""
abstract_ja: >-
  局所解析的Bertini定理を証明し、Boucksomの予想を完全な一般性で肯定的に解決する。
abstract_source_url: "https://arxiv.org/abs/2607.25230v1"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2607.25230v1](https://arxiv.org/abs/2607.25230v1)
- **著者:** Mingchen Xia
- **初回投稿日:** 2026年7月28日
- **最終更新日:** 2026年7月28日（v1）
- **主分類・副分類:** Algebraic Geometry (math.AG); Complex Variables (math.CV); Differential Geometry (math.DG)
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)

## 要約

本論文は、代数幾何の Bertini 定理に対応する局所解析的問題を扱う。多重劣調和関数の特異性を測る乗数イデアル層を積空間のファイバーへ制限したとき、それがファイバー上で直接定義した乗数イデアル層と一般に一致するか、さらに例外パラメータを複素解析的にどれほど小さくできるかが問題である。

Ohsawa--Takegoshi 拡張定理は所望の等式の一方の包含を与え、Fubini の定理から等式が Lebesgue ほとんどすべてのファイバーで成立することも分かる。しかし Boucksom の問いは、例外集合を単なる零集合ではなく pluripolar 集合に選べるかという、より強い結論を求めていた。

著者は以前、射影的 fibration についてこの予想を直像の正値性により解決していた。局所問題ではファイバーが非コンパクトで、乗数イデアルの直像に利用できる自然な幾何構造がないため、その方法は直接使えない。本論文は直像を jet bundle の議論に置き換え、ファイバーごとの重み付き Bergman 核の対数多重劣調和性を用いる。

主結果は、積多重円板のパラメータ空間から pluripolar 集合を除けば、乗数イデアルの制限とファイバー上の乗数イデアルが一致するというもので、Boucksom の局所解析的 Bertini 予想を完全な一般性で解決する。さらに同じ結論を複素多様体間の一般の正則写像へ拡張する。Introduction はこれを psh 特異点の変形を理解するための第一段階と位置づけている。

## 背景と問題設定

非負整数 $m,n$ に対し、$\Delta^k$ を $k$ 次元単位多重円板とし、

$$
X=\Delta_z^m\times\Delta_\eta^n,
\qquad \Phi\in\operatorname{PSH}(X)
$$

と置く。各 $\eta\in\Delta_\eta^n$ に対するファイバーは $X_\eta=\Delta_z^m\times\{\eta\}$ である。$\mathcal I_X(\Phi)$ は $\Phi$ の特異性に付随する乗数イデアル層であり、$\mathcal I_X(\Phi)\cdot\mathcal O_{X_\eta}$ はその $X_\eta$ 上の image ideal を表す。

既知の包含は、Ohsawa--Takegoshi 拡張定理から得られる

$$
\mathcal I_{X_\eta}(\Phi|_{X_\eta})
\subseteq
\mathcal I_X(\Phi)\cdot\mathcal O_{X_\eta}
$$

である。逆包含を含む等式は Fubini により Lebesgue ほとんど至る所で成立するが、Lebesgue 零集合が pluripolar とは限らない。この差を埋めることが局所問題の核心である。

## 主結果

### 局所解析的 Bertini 定理（Theorem 1.1）

結論は、例外集合を pluripolar にまで小さくできることである。すなわち、ある pluripolar 集合 $P\subseteq\Delta_\eta^n$ が存在し、すべての $\eta\notin P$ に対して ideal sheaf の等式

$$
\mathcal I_X(\Phi)\cdot\mathcal O_{X_\eta}
=
\mathcal I_{X_\eta}(\Phi|_{X_\eta})
$$

が $X_\eta$ 上で成り立つ。従来の「ほとんどすべて」という測度論的結論を、複素解析に適合した pluripolar 例外集合へ強化した点が新規性である。

### 一般の正則写像への拡張（Corollary 1.2）

$f:Y\to Z$ を $\sigma$-compact な複素多様体間の正則写像、$\Phi\in\operatorname{PSH}(Y)$ とする。このとき局所 pluripolar 集合 $P\subseteq Z$ が存在し、$z\in Z\setminus P$ では $Y_z=f^{-1}(z)$ が空集合も許す複素多様体となり、

$$
\mathcal I_Y(\Phi)\cdot\mathcal O_{Y_z}
=
\mathcal I_{Y_z}(\Phi|_{Y_z})
$$

が成立する。Theorem 1.1 が積多重円板上の局所モデルを扱うのに対し、この系は任意の正則写像の一般ファイバーへ結論を移す。

## 証明の見取り図

Introduction によれば、射影的な場合に用いた直像の正値性は、局所問題の非コンパクトなファイバーでは利用できない。そこで直像の議論を jet bundle に置き換え、Bao--Guan--Yuan によるファイバー方向の重み付き Bergman 核の対数多重劣調和性を、パラメータ方向の制御に用いる。

中間段階の Theorem 3.2 と Corollary 3.5 は、Hilbert 空間値正則写像族について、ほとんど至る所での非消滅から、零点をもつパラメータ集合の pluripolar 性を導く。この格上げには plurifine topology と fine pluripotential theory が使われる。最後にこの判定を乗数イデアルの jet データへ適用して Theorem 1.1 を得て、局所モデルを貼り合わせて Corollary 1.2 へ進む、というのが Introduction が示す流れである。

## 原論文との対応

- **Abstractページ:** [arXiv:2607.25230v1](https://arxiv.org/abs/2607.25230v1)
- **Introduction:** Section 1, pp. 1--2
- **主要定理・系:** Theorem 1.1, Corollary 1.2
- **Introductionで言及された中間結果:** Theorem 3.2, Corollary 3.5
- **論文構成:** Contents, p. 1
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
