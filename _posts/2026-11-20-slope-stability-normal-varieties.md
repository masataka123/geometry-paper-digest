---
layout: paper
title: Slope stability for normal varieties
title_ja: 正規射影多様体のWeil因子に双対なスロープ安定性
authors: Eric Jovinelly, Brian Lehmann, Eric Riedl
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: In this expository paper, we review the theory of slope stability of torsion-free sheaves with respect to nef curve classes and extend it to normal varieties.
topic: algebraic-geometry
tags:
- stability
- vector-bundles-sheaves
- positive-characteristic
arxiv_id: 2611.24732v1
arxiv_url: https://arxiv.org/abs/2611.24732
arxiv_submitted: '2026-11-18'
arxiv_updated: '2026-11-18'
summary: 一般の正規射影多様体上で、捩れのない層のスロープをWeil因子と交わる数値類で定義する。豊富な偏極から得る完全交叉曲線の範囲を越えて、Harder–Narasimhan理論と正標数の半安定性を整理する。
abstract_en: ''
summary_en: On a normal variety, a torsion-free sheaf can have a determinant that defines only a Weil divisor class. The authors choose numerical test classes that still pair with such divisors. This gives a common framework for filtrations and for the subtler behaviour of pullbacks in positive characteristic.
abstract_ja: 非Q分解的な空間では層の行列式に対応する因子はCartierとは限らない。著者らはベクトル束のChern類の多項式を試験類として用い、既存の安定性の議論をこの設定に移す。
abstract_source_url: https://arxiv.org/abs/2611.24732
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.24732v1](https://arxiv.org/abs/2611.24732)
- **著者:** Eric Jovinelly, Brian Lehmann, Eric Riedl
- **初回投稿日:** 2026-11-18
- **最終更新日:** 2026-11-18
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかな射影多様体では、偏極の冪に第一Chern類を交差させれば層のスロープが得られる。特異な空間では、そもそも第一Chern類をどの因子の空間に置くかを区別する必要がある。

この論文は、正規射影多様体のWeil因子に対して交差数を測れる類を選び、その類を動かしながら半安定性を調べる。滑らかな場合でも、nef因子の積だけを使う設定より広い。

著者らは定理の既存の証明を新しい設定に合わせて再構成している。特徴は、以前は異なる仮定で述べられていた理論を正規多様体の一つの定義の下で使える点にある。

## 背景と問題設定

次元 $n$ の正規射影多様体 $X$ で、ベクトル束のChern類の重み $n-1$ の多項式を数値同値で割った空間を $N^{n-1}(X)\_{\mathbb R}$ とする。その中で擬有効Weil因子錐に双対な錐の元 $\alpha$ を取る。

## 主結果

### Weil因子との交差によるスロープ

正の階数の捩れのない層 $E$ に対し

$$
\mu\_\alpha(E)=\frac{c\_1(E)\cdot\alpha}{\operatorname{rk}(E)}
$$

と定める。半安定性は、より低い正の階数の部分層のスロープがこの値以下であることを意味する。$X$ が $\mathbb Q$ 分解的でなくても、$c\_1(E)$ をWeil因子類として用いるので定義できる。

### フィルトレーションと標数の役割

この設定でHarder–Narasimhanフィルトレーションが存在する。すなわち、層を半安定な商の列に分解して、大きいスロープから順に不安定性を記録できる。序論の構成説明によれば、この部分は任意の体上で扱う。Frobenius引き戻しとテンソル積は代数閉体上の正標数の場合を別に扱う。単なる半安定性から任意回のFrobenius引き戻しの半安定性を仮定することはできない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.24732)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.24732v1) — §1, pp. 1–3
- **Introduction中で言及された主要結果:** §§1.1–1.3（序論に番号付き主定理なし）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.24732v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
