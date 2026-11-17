---
layout: paper
title: Holomorphic one-forms without zeros on Kähler manifolds of Kodaira codimension one
title_ja: 零点を持たない1形式と小平余次元1のKähler多様体
authors: Simon Pietig
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.AG
arxiv_abstract: We give a bimeromorphic classification of compact Kähler manifolds of Kodaira codimension one that admit a holomorphic one form without zeros.
topic: several-complex-variables
tags:
- birational-geometry
- complex-analytic-spaces
arxiv_id: 2512.08395v2
arxiv_url: https://arxiv.org/abs/2512.08395
arxiv_submitted: '2025-12-09'
arxiv_updated: '2026-11-13'
summary: 小平次元が次元より1小さいコンパクトKähler多様体に、零点を持たない正則1形式がある場合の双有理構造を決定する。有限étale被覆後、一般型の滑らかな射影多様体上のmonodromy自明な楕円曲線束へ双有理となるが、非射影的な場合には積分解までは期待できない。
abstract_en: ''
summary_en: A nowhere-vanishing holomorphic one-form constrains the birational geometry of a projective variety. This paper extends the codimension-one classification to compact Kähler manifolds by using algebraic approximation. After a finite étale cover, the resulting model is an elliptic bundle over a projective base of general type. Trivial monodromy is the conclusion retained in the Kähler setting; it need not imply a product.
abstract_ja: 小平次元が多様体の次元より1小さいコンパクトKähler多様体について、零点を持たない正則1形式が存在する場合の双有理分類を与える。有限étale被覆を取ると、一般型の滑らかな射影底上の楕円曲線束に双有理となり、そのmonodromyは自明である。射影的な先行結果と異なり、この束が積になることは一般には保証されない。
abstract_source_url: https://arxiv.org/abs/2512.08395
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2512.08395v2](https://arxiv.org/abs/2512.08395)
- **著者:** Simon Pietig
- **初回投稿日:** 2025-12-09
- **最終更新日:** 2026-11-13
- **主分類・副分類:** math.CV（主分類）; math.AG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

零点を持たない正則1形式は、多様体に「楕円曲線方向」が存在することを示唆する。射影多様体では小平次元への制約が知られ、小平余次元1の場合には被覆後の積分解に結び付いていた。

本論文はこの問題をコンパクトKähler多様体へ拡張する。有限étale被覆後の空間は、一般型の滑らかな射影多様体を底とする、monodromyが自明な楕円曲線束に双有理となる。

非射影的なKähler多様体では、この楕円曲線束は積でなくてもよい。この差を残した分類を得るため、射影的な証明を直接流用せず、代数的近似によって射影的なファイバーから必要な情報を取り出す。

## 背景と問題設定

射影的な場合、Popa–Schnellは零点のない正則1形式を持つ滑らかな多様体に $\kappa(X)\le\dim X-1$ を示した。Haoの結果は等号の場合の幾何学的説明を与え、極小モデルの適切な被覆とQ-factorializationが一般型の多様体と楕円曲線の積になることを述べる。IntroductionのTheorem 1.1はこの既知結果であり、本論文の新定理ではない。

Kählerの場合はAlbanese torusが射影的とは限らず、楕円曲線部分から双対化して射を作る射影的手法が使えない。また、必要なPopa–Schnellの結果もそのまま適用できない。ここが拡張に伴う二つの障害である。

## 主結果

### Kähler版の構造定理（Theorem 1.2）

$X$ をコンパクトKähler多様体とし、

$$
\kappa(X)=\dim X-1,
\qquad \omega\in H^0(X,\Omega\_X^1),
\qquad \omega(x)\ne0\quad\text{for all }x\in X
$$

を仮定する。このとき有限étale被覆 $X'\to X$ が存在し、$X'$ は滑らかな射影一般型多様体 $B$ 上の楕円曲線束 $Z\to B$ に双有理となる。この束のmonodromyは自明である。

ここで双有理は複素解析の意味でのbimeromorphicである。$X'$ 自身がその束と双正則である、あるいは $Z\simeq B\times E$ であるという結論ではない。Remark 1.3は、射影的な場合と異なり、有限étale被覆後にも積への双有理性を期待できないと注意する。

## 証明の見取り図

Linのtautological familyによる代数的近似を用い、$X$ の変形を固定した射影底上の楕円ファイブレーションの族と比較する。その族ではファイブレーションが底上で局所的に同型であり、射影的な変形が稠密に存在する。

小平次元の不変性と、零点を持たない1形式の小変形での存続を確認し、射影的な変形へ既知の議論を適用する。局所同型性により元の楕円ファイバーがAlbanese写像で潰れないことを引き戻す。その後、有限被覆でmonodromyを自明化し、有限群作用を慎重に扱って所要の楕円曲線束を得る。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2512.08395)
- **Introduction:** [PDF](https://arxiv.org/pdf/2512.08395v2) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorem 1.2、Remark 1.3（Theorem 1.1はHaoの既知結果）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2512.08395v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
