---
layout: paper
title: Holomorphic 1-forms without zeros on Kähler manifolds
title_ja: 零点を持たない正則1形式とKähler多様体のトーラス束構造
authors: Simon Pietig
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
arxiv_abstract: Assuming the existence of good minimal models, we give a bimeromorphic classification of compact connected K\"ahler manifolds admitting a holomorphic 1-form without zeros.
topic: algebraic-geometry
tags:
- minimal-model-program
- birational-geometry
- hodge-theory
arxiv_id: 2610.40097v1
arxiv_url: https://arxiv.org/abs/2610.40097
arxiv_submitted: '2026-10-29'
arxiv_updated: '2026-10-29'
summary: 零点を持たない正則1形式がコンパクトKähler多様体の双有理的構造に課す制約を調べる。良い極小モデルの存在を仮定し、有限エタール被覆後に自明なモノドロミーを持つ局所自明トーラス束に双有理同値となることを示す。
abstract_en: ''
summary_en: A nowhere-vanishing holomorphic differential constrains more than the canonical dimension of a compact Kähler manifold. Under a good-minimal-model hypothesis, the paper describes a torus-bundle structure after passage to a finite étale cover and a bimeromorphic model. Several independent differentials give a lower bound on the dimension of its fibers. The distinction between a torus bundle and a product is essential outside the projective category.
abstract_ja: コンパクト連結Kähler多様体上の正則1形式と、その極小モデル・飯高ファイブレーションの関係を研究する。Popa–Schnell型の零点存在定理をKählerの場合に拡張し、良い極小モデルがある場合にトーラス束による構造記述を得る。至る所一次独立な正則1形式がg個存在すれば、有限エタール被覆の後、ファイバー次元がg以上の局所自明トーラス束と双有理同値になる。ただし射影の場合とは異なり、直積への分解は一般には結論できない。
abstract_source_url: https://arxiv.org/abs/2610.40097
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.40097v1](https://arxiv.org/abs/2610.40097)
- **著者:** Simon Pietig
- **初回投稿日:** 2026-10-29
- **最終更新日:** 2026-10-29
- **主分類・副分類:** math.AG（主分類）; math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

正則1形式に零点がないことは、多様体全体に消えない複素的方向が存在することを意味する。この解析的な条件が、有限被覆と双有理的変形を許したときにどのような幾何学的構造を生むかが本論文の問題である。

射影多様体では、良い極小モデルの存在のもと、至る所一次独立な1形式からアーベル多様体を因子に持つ直積構造が知られている。著者はこの議論を非射影のコンパクトKähler多様体へ広げ、有限エタール被覆の後に局所自明なトーラス束と双有理同値になることを示す。

結論は自明なモノドロミーを持つトーラス束であり、大域的な直積とは限らない。Albaneseトーラスが射影的とは限らず、射影の場合に使う写像をそのまま構成できないことが、この差の根源である。記事では定理に明記された良い極小モデルの仮定を維持する。

## 背景と問題設定

Popa–Schnellの射影多様体に対する結果では、$g$ 個の至る所一次独立な正則1形式が存在すると $\kappa(X)\leq\dim X-g$ が成り立つ。IntroductionのTheorems 1.1と1.2は、この先行研究とその幾何学的精密化を紹介したものである。

Kählerの場合、良い極小モデル $X^{\min}$ の飯高ファイブレーションと $\operatorname{Alb}(X)$ の関係を調べる。射影の場合に得られるアーベル因子への射を一般には使えないため、局所的なトーラス束構造を貼り合わせる必要がある。

## 主結果

### 引き戻した1形式の零点（Theorem 1.3）

コンパクト連結Kähler多様体 $X$ とアーベル多様体への射 $f:X\to A$ を考える。$A$ 上の豊富な線束 $L$ と正整数 $d$ について

$$
H^0(X,K\_X^{\otimes d}\otimes f^\ast L^\vee)\ne0
$$

なら、任意の $\omega\in H^0(A,\Omega\_A^1)$ に対し $Z(f^\ast \omega)\ne\varnothing$ である。これは射影の場合の零点存在定理をKählerの場合へ延長する結果である。定理はさらに、$g$ 個の至る所一次独立な1形式と良い極小モデルがあると、飯高ファイブレーションの一般ファイバーのAlbanese像が次元 $g$ 以上の部分トーラスの平行移動になると述べる。

### 飯高ファイバーからトーラス束へ（Theorem 1.4）

$X$ が良い極小モデルを持ち、その飯高ファイブレーションの一般ファイバーのAlbanese像が正次元 $g$ の部分トーラスの平行移動であるとする。このとき有限エタール被覆 $X'\to X$ と、コンパクト連結Kähler多様体 $W$ 上の局所自明トーラス束 $\pi:Z\to W$ が存在して、

$$
X'\dashrightarrow Z\quad\text{は双有理同値},\qquad
\dim\pi^{-1}(y)\geq g
$$

となり、束のモノドロミーは自明である。ここで双有理同値は複素解析的なbimeromorphicの意味で用いる。

### 零点のない1形式への帰結（Corollary 1.5）

$X$ が良い極小モデルを持ち、$g$ 個の至る所一次独立な正則1形式を持てば、上記の被覆とトーラス束が得られる。特に1個の零点のない正則1形式から正次元のトーラス方向を導ける。一方、$Z\simeq W\times A$ という大域的直積は一般には期待できないとRemark 1.6は注意している。

## 証明の見取り図

零点存在定理には、Higgs線束のコホモロジー跳躍軌跡に関するSimpsonの構造定理とVilladsenの証明を用いる。その構造記述がコンパクトKählerの場合にも成り立つことが、最初の拡張を可能にする。

構造定理ではAlbaneseのファイバー積から局所自明トーラス束を作り、有限エタール被覆でファイバーの連結性を整え、さらにトーラス作用を得る。Introductionは、相対Albanese、Beauville–Bogomolov分解、Kähler射に対するSaitoの分解定理の役割を説明している。局所的に構成した商をトーラス作用で貼り合わせることで、所要の底空間 $W$ と双有理モデルを得る。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.40097)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.40097v1) — Section 1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems 1.3, 1.4; Corollary 1.5（Theorems 1.1, 1.2は先行研究）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.40097v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
