---
layout: paper
title: "Connecting families of curves"
title_ja: "多点を結ぶ曲線族"
authors: "Nathan Chen, Robert Lazarsfeld, Federico Moretti"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  A theorem of Kollár, Miyaoka, and Mori states that on a rationally connected variety, any finite collection of points lies on a rational curve. Motivated by this, it is natural to ask what one can say about families of curves passing through many general points of an arbitrary smooth projective variety X. When X has nonnegative Kodaira dimension, we establish a sharp linear lower bound for the genus of such curves in terms of the number of points and the dimension of X, generalizing a theorem of Arapura and Archava. By contrast, the least possible gonality of a connecting family eventually stabilizes as the number of points grows. We characterize its limiting value in terms of varieties dominating X that are generically finite covers of rationally connected varieties. As an illustration, we study these invariants for hypersurfaces of large degree, determining in particular the joint asymptotic behavior of the minimal connecting genus as the number of points and the degree vary. Finally, we briefly consider higher-dimensional connecting subvarieties, proving linear bounds for their canonical volumes and computing asymptotic results for hypersurfaces.
topic: algebraic-geometry
tags:
  - birational-geometry
arxiv_id: "2609.20716v1"
arxiv_url: "https://arxiv.org/abs/2609.20716"
arxiv_submitted: "2026-09-17"
arxiv_updated: "2026-09-17"
summary: >-
  滑らかな射影多様体の一般の $p$ 点を通る曲線族について、Kodaira次元が非負なら最小種数が次元に依存する鋭い線形下界をもつことを示す。一方、connecting gonalityは最終的に安定し、その値を有理連結多様体の有限被覆から支配されるという幾何で特徴付ける。
abstract_en: >-
  A theorem of Kollár, Miyaoka, and Mori states that on a rationally connected variety, any finite collection of points lies on a rational curve. Motivated by this, it is natural to ask what one can say about families of curves passing through many general points of an arbitrary smooth projective variety X. When X has nonnegative Kodaira dimension, we establish a sharp linear lower bound for the genus of such curves in terms of the number of points and the dimension of X, generalizing a theorem of Arapura and Archava. By contrast, the least possible gonality of a connecting family eventually stabilizes as the number of points grows. We characterize its limiting value in terms of varieties dominating X that are generically finite covers of rationally connected varieties. As an illustration, we study these invariants for hypersurfaces of large degree, determining in particular the joint asymptotic behavior of the minimal connecting genus as the number of points and the degree vary. Finally, we briefly consider higher-dimensional connecting subvarieties, proving linear bounds for their canonical volumes and computing asymptotic results for hypersurfaces.
summary_en: ""
abstract_ja: >-
  任意の滑らかな射影多様体上で、多数の一般点を通る曲線族の最小種数と最小gonalityを調べる。非負Kodaira次元では種数の鋭い線形下界を得るが、gonalityは点数とともに最終的に一定となる。その安定値を有理連結多様体の有限被覆で特徴付け、大次数超曲面で両不変量の漸近挙動も求める。
abstract_source_url: "https://arxiv.org/abs/2609.20716"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.20716](https://arxiv.org/abs/2609.20716)
- **著者:** Nathan Chen, Robert Lazarsfeld, Federico Moretti
- **初回投稿日・最終更新日:** 2026年9月17日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

有理連結多様体では有限個の点を一本の有理曲線で結べる。これを一般の滑らかな複素射影多様体 $X$ に拡張するため、一般の $p$ 点を通る曲線族の最小種数と最小gonalityを、それぞれ $p$-connecting genusと $p$-connecting gonalityとして導入する。

$\kappa(X)\geq0$ のとき、Arapura–Archavaの下界 $g\geq p$ を次元 $n$ を反映する下界へ強化する。証明はconnecting familyの一般成員のnormal bundleの正値性を調べる。

gonality側の挙動は異なる。$p$ に関して非減少だが、射影空間への有限被覆から一様上界を得るため最終的に一定となり、その安定値を有理連結多様体のgenerically finite coverから $X$ が支配される最小次数として特徴付ける。

大次数超曲面ではgonalityとgenusの具体的な漸近量を求める。さらに高次元部分多様体族に対して、種数に代わるcanonical volumeが点数に線形に増大することを示す。

## 主結果

### connecting genusの下界（Theorem B）

$X$ が $n\geq2$ 次元で $\kappa(X)\geq0$ なら

$$
p\text{-}\operatorname{conn.genus}(X)\geq(n-1)p-(n-2)
$$

が成り立つ。$X$ がgeneral typeなら不等号はstrictになる。

### gonalityの安定値（Theorem C, Corollary D）

$p\geq kn$ 個の一般点を次数 $k$ のpencilをもつ曲線が結ぶなら、$X$ を支配する $Y$ と有理連結多様体 $R$ が存在し、$Y\to R$ は次数 $\leq k$ のgenerically finite coverとなる。その結果、$p\gg0$ では

$$
p\text{-}\operatorname{conn.gon}(X)
=\min\{c\mid X\text{ is dominated by a }c\text{-fold cover of a rationally connected variety}\}
$$

を得る。

### 大次数超曲面（Theorem E）

滑らかな $X_d\subset\mathbb P^{n+1}$ に対し、固定した $p$ について $p$-connecting gonalityは $d\to\infty$ で $d$ と漸近的に等しい。またIntroductionに明記された範囲では

$$
p\text{-}\operatorname{conn.genus}(X_d)\in
\Theta_n\!\left(p^{\frac{n-1}{n+1}}d^2\right)
$$

となる。

## 証明の見取り図

種数下界には一般曲線のnormal bundleの正値性を用いる。gonalityについては曲線上のpencilから生じる次数 $k$ の有効零サイクルの空間を考え、そのMRC fibrationを解析して有理連結な基底への有限被覆を取り出す。超曲面の場合にはCastelnuovo型評価が漸近計算を支える。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.20716](https://arxiv.org/abs/2609.20716)
- **Introduction:** unnumbered Introduction
- **Introduction中で言及された主要定理番号:** Theorems B, C, E, F; Corollary D
- **論文構成の説明:** Introduction末尾
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
