---
layout: paper
title: Simpson's closedness conjecture in arbitrary rank
title_ja: 任意ランクにおけるSimpsonの閉性予想
authors: Tianzhi Hu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: |-
  For a compact Riemann surface $X$, Simpson associated to each stable graded Higgs bundle $(E,θ)$ a locus $W_{[(E,θ)]}^1 \subset M_{\mathrm{dR}}(X,n)$, consisting of flat bundles that admit a Simpson filtration whose associated graded Higgs bundle is $(E,θ)$. He conjectured that $W_{[(E,θ)]}^1$ is Zariski closed in $M_{\mathrm{dR}}(X,n)$. We prove this conjecture in arbitrary rank.
    The proof is based on the Quillen geometry of the determinant-of-cohomology line bundle over the moduli of holomorphic bundles. To any holomorphic family of flat bundles, we associate a determinant-of-cohomology line bundle equipped with a canonical holomorphic determinant connection, and derive explicit formulas for its curvature. For a family of flat bundles in $W_{[(E,θ)]}^1$, we then prove that the determinant connection form is exact. This exactness forces the associated determinant frame to extend as a nowhere-vanishing frame across any one-parameter degeneration, which controls the limiting filtration and yields the desired closedness.
topic: algebraic-geometry
tags:
- higgs-nonabelian-hodge
- moduli
- stability
- vector-bundles-sheaves
arxiv_id: 2610.03542v1
arxiv_url: https://arxiv.org/abs/2610.03542
arxiv_submitted: '2026-10-02'
arxiv_updated: '2026-10-02'
summary: |-
  種数2以上のコンパクトRiemann面上で、固定した安定な次数零のgraded Higgs束を極限に持つ平坦束の集合が、de Rhamモジュライ空間でZariski閉となることを示す。ランク2で知られていたSimpsonの閉性予想を任意ランクへ拡張する。コホモロジーの行列式直線束の接続を使い、一径数退化におけるfiltrationの延長を制御する。
abstract_en: ''
summary_en: |-
  The paper studies how a prescribed graded Higgs limit behaves under degeneration of flat bundles. Its main theorem extends the closedness result previously known in rank two to every rank. Determinant-line geometry supplies control of a frame across a one-parameter degeneration. That control is used to extend the filtration while retaining the same graded object.
abstract_ja: |-
  安定なgraded Higgs束に対応するSimpsonの吸引ファイバーが、任意ランクのde Rhamモジュライ空間でZariski閉であることを証明する。平坦束の族に付随するコホモロジーの行列式直線束に正則接続を入れ、同じSimpson filtrationを持つ族でその接続形式が完全形式になることを利用する。これにより退化の極限でも所定のgraded Higgs束を保てることを示す。
abstract_source_url: https://arxiv.org/abs/2610.03542
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.03542v1](https://arxiv.org/abs/2610.03542)
- **著者:** Tianzhi Hu
- **初回投稿日:** 2026-10-02
- **最終更新日:** 2026-10-02
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

非可換Hodge対応はHiggs束と平坦束を結ぶが、両者のモジュライ空間の代数構造は同じではない。SimpsonのHodgeモジュライ空間は両者を一つの族に入れ、平坦束をHiggs束へ退化させる枠組みを与える。

安定なgraded Higgs束を一つ固定し、それを極限に持つ平坦束を集めた吸引ファイバーを考える。Simpsonの閉性予想は、この集合がde Rhamモジュライ空間の中でZariski閉であると主張する。本論文は種数2以上のコンパクトRiemann面について、任意ランクでこの予想を証明する。

先行研究では局所閉性やLagrangian性、ランク2での閉性が知られていた。著者の方法はコホモロジーの行列式直線束のQuillen幾何を使い、一径数退化でfiltrationが失われる可能性を制御する。閉性を局所的なパラメータ表示だけで済ませず、退化の極限まで扱うことが論点である。

## 背景と問題設定

$X$ を種数 $g\ge2$ のコンパクトRiemann面とし、$n\ge1$ とする。Hodgeモジュライ空間 $M_{\mathrm{Hod}}(X,n)$ は半安定な次数零の $\lambda$-接続をパラメータ化し、$\lambda=0$ がHiggs束、$\lambda=1$ が平坦束のモジュライに対応する。

安定な次数零のgraded Higgs束は

<div>
$$
E=\bigoplus_{i=1}^{s}E_i,\qquad
\theta_i:E_i\longrightarrow E_{i+1}\otimes K_X,\qquad \theta|_{E_s}=0
$$
</div>

という形で、Higgs場のスカラー倍作用の固定点となる。吸引ファイバーは

<div>
$$
W^1_{[(E,\theta)]}
=\left\{[(V,D)]\in M_{\mathrm{dR}}(X,n)\;\middle|\;
\lim_{z\to0}[(z,V,zD)]=[(E,\theta)]\right\}
$$
</div>

で定義され、極限は $M_{\mathrm{Hod}}$ 内で取る。同値な記述は、付随するgraded Higgs束が $(E,\theta)$ となるGriffiths横断的なSimpson filtrationを持つことである。

## 主結果

### 主定理：吸引ファイバーのZariski閉性（Theorem 1.1）

任意の $n\ge1$ と、上記の安定な次数零の $\mathrm{GL}(n,\mathbb C)$ graded Higgs束 $(E,\theta)$ に対し、$W^1_{[(E,\theta)]}$ は $M_{\mathrm{dR}}(X,n)$ でZariski閉である。

仮定では固定点となるHiggs束の安定性が重要であり、任意の半安定な固定点への拡張をここで主張することはできない。結果は、一つのgraded Higgs極限を持つ平坦束の族を代数的に退化させても、極限がその吸引ファイバーから外れないことを意味する。Introductionは、ランク2の先行結果を越えてランク制限を外すことを新規性として位置付ける。

## 証明の見取り図

平坦束の正則族に対し、コホモロジーの行列式直線束とその正則な行列式接続を構成する。Quillen幾何でこの接続を調べ、同じSimpson filtrationを持つ族では接続形式が完全形式となることを示す。

この完全性から、行列式のフレームを一径数退化の中心まで零点なしに延長し、極限のHiggs格子を制御する。続いて極限格子が一定格子とhomotheticであることを示し、filtrationを退化を越えて延長する。Introductionではこの順にSections 2–5が割り当てられており、後続節の接続の計算や格子の証明は本記事の確認範囲外である。

## 原論文との対応

- **Abstractページ:** [公式Abstract](https://arxiv.org/abs/2610.03542)。`arxiv_abstract`は公式arXiv APIの原文全文を保存した。
- **Introduction:** [確認版PDF](https://arxiv.org/pdf/2610.03542v1)、Section 1, pp. 1–2。
- **Introduction中で言及された主要結果:** Theorem 1.1。
- **論文構成の説明:** Section 1末尾, p. 2。
- **確認したarXivバージョン:** 2610.03542v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction。後続節の証明の検証は行っていない。
