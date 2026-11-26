---
layout: paper
title: Tian-Yau-type metrics from K3 divisors with ADE contractions
title_ja: ADE収縮をもつK3因子の補集合上のTian–Yau型計量
authors: Yujian Song
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We construct complete Ricci-flat Kähler metrics on the complement of a smooth anti-canonical K3 divisor in a compact Kähler threefold, assuming that the normal bundle of the divisor is nef and big. Such a metric exists in every Kähler class whose exceptional periods are positive. We use a generalized Gibbons-Hawking ansatz to construct an approximate model on the normal bundle. When the normal bundle contracts an ADE configuration, this model combines an expanding Ricci-flat orbifold K3 metric with ALE metrics whose exceptional periods remain fixed. After improving the model by a finite iteration and transferring it to the divisor complement, we apply the Tian-Yau-Hein existence theorem.
topic: differential-geometry
tags:
- noncompact-kahler-geometry
- calabi-yau-geometry
- singularities
arxiv_id: 2611.34583v1
arxiv_url: https://arxiv.org/abs/2611.34583
arxiv_submitted: '2026-11-25'
arxiv_updated: '2026-11-25'
summary: 滑らかな反標準K3因子の法束がnefかつbigである場合に、その補集合上に完備Ricci平坦Kähler計量を構成する。指定したKähler類は、収縮される各例外曲線に付随する周期が正であれば実現できる。
abstract_en: ''
summary_en: A K3 divisor with a big and nef normal bundle can carry curves invisible to the limiting normal class. Song retains their areas as parameters in a model for the noncompact end. After correcting that model, a prescribed Kähler class on the complement supports a complete metric with vanishing Ricci curvature.
abstract_ja: 法束が豊富でないとき、無限遠のモデルにはK3のオービフォールド極限とそのADE特異点を解消するALE計量の両方が必要になる。例外周期を一定に保ったまま両者を組み合わせ、指定類に属する体積形式方程式の解を得る。
abstract_source_url: https://arxiv.org/abs/2611.34583
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.34583v1](https://arxiv.org/abs/2611.34583)
- **著者:** Yujian Song
- **初回投稿日:** 2026-11-25
- **最終更新日:** 2026-11-25
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかな反標準因子を除いて得る空間では、Ricci平坦計量の存在を考える際に無限遠の形を決める必要がある。法束が豊富なら、その正の類を使ってCalabiモデルを作れる。

法束がnefかつbigでも、次数零の曲線が残ると同じ類を滑らかなKähler形式で表せない。K3曲面ではこうした曲線をADE特異点に収縮できるため、特異な極限から出発できる。

収縮曲線の面積はモデルの局所解消から消してよい自由度ではない。論文の条件は、その面積を補集合で指定した類から読み取る。

## 背景と問題設定

滑らかなコンパクトKähler三次元多様体 $\bar M$ の反標準K3因子を $D$、補集合を $M$、法束を $L$ とする。大きな冪の $L$ が収縮する曲線を $E\_i$ とする。$H^1(D,\mathbb R)=0$ により $c\in H^2(M,\mathbb R)$ は $\bar c$ に持ち上がり、$[D]\cdot E\_i=0$ により $p\_i(c)=\bar c\cdot E\_i$ は持ち上げ方によらない。

## 主結果

### 指定類における完備計量（Theorem 1.2）

$L$ がnefかつbigで、Kähler類 $c$ がすべての $i$ について $p\_i(c)>0$ を満たすとする。$\mathrm{div}(\Omega\_M)=-D$ となる有理型体積形式を固定すると、完備Ricci平坦Kähler形式が存在して
$$
[\omega\_{\mathrm{CY}}]=c,\qquad \omega\_{\mathrm{CY}}^3=6\sqrt{-1}\thinspace \Omega\_M\wedge\overline{\Omega\_M}
$$
を満たす。$L$ が豊富なら例外曲線がなく、周期条件は空となる。

## 証明の見取り図

一般化Gibbons–Hawking構成で、法束の円作用をK3上の計量の一径数族に翻訳する。その類は $2\pi t c\_1(L)+[\beta|\_D]$ と変化し、$E\_i$ 上の周期は一定に保たれる。膨張するオービフォールドK3計量に該当するALE計量を組み合わせ、有限回の補正の後に補集合上でTian–Yau–Heinの存在定理を適用する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.34583)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.34583v1) — §1, Definition 1.1 と Theorem 1.2
- **Introduction中で言及された主要結果:** Theorem 1.2、式 (1.2)–(1.5)。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.34583v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
