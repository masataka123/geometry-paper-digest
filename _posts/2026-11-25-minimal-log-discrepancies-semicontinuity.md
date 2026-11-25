---
layout: paper
title: Minimal log discrepancies are lower semicontinuous and bounded
title_ja: 極小対数的食い違いの下半連続性と次元上界
authors: Alberto Landi
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We prove Ambro's conjecture stating that the minimal log discrepancies are lower semicontinuous. As a consequence, minimal log discrepancies are bounded from above by the dimension of the variety, proving a conjecture of Shokurov.
topic: algebraic-geometry
tags:
- singularities
- birational-geometry
arxiv_id: 2611.30971v1
arxiv_url: https://arxiv.org/abs/2611.30971
arxiv_submitted: '2026-11-23'
arxiv_updated: '2026-11-23'
summary: 対数対の閉点を動かすとき、極小対数的食い違いがZariski位相で下半連続となることを示す。そこから任意の既約部分多様体の生成点で、値が周囲の次元を超えないことが従う。
abstract_en: ''
summary_en: The invariant in this paper measures singularities using divisors above a specified centre. Landi compares its values at different centres by lifting arc integrals to a stack. The resulting specialization statement also bounds the invariant in terms of the ambient dimension.
abstract_ja: 標数零でAmbroの下半連続性予想とShokurovの次元上界を扱う。LandiはArtinスタックによるクレパント解消上でモチーフ積分を比較し、中心となる閉部分スキームを動かしたときの評価を元の対に戻す。
abstract_source_url: https://arxiv.org/abs/2611.30971
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.30971v1](https://arxiv.org/abs/2611.30971)
- **著者:** Alberto Landi
- **初回投稿日:** 2026-11-23
- **最終更新日:** 2026-11-23
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

特異点の複雑さを測る数値が、点を特殊化したときに突然大きくならないか。極小対数的食い違いについてのこの問題がAmbroの予想である。

本論文は標数零の代数閉体上で、対数対の閉点に関する予想を証明すると述べる。手法上は、中心を指定したファイバーごとの不変量を扱う、仮定付きの族の定理が先に来る。

得られる次元上界には等号に関する必要条件がある。一方、等号なら点が滑らかであるという、さらに強い特徴づけまでは含まない。

## 背景と問題設定

閉点 $p$ での $\mathrm{mld}\_p$ は、その点を中心とする因子的付値の対数的食い違いから定まる。値域には $-\infty$ を含める。固定した多様体上で点を動かす場合と、多様体自体も変わる族の場合を区別する必要がある。

## 主結果

### 閉点上の下半連続性（Theorem 1.1）

対数対 $(Y,\Delta\_Y)$ と任意の実数 $a$ について、$\mathrm{mld}\_p(Y,\Delta\_Y)>a$ を満たす閉点全体は閉点集合の中で開である。

### 中心をもつ族（Theorem 1.2）

平坦全射 $Y\to T$、正指数の実イデアル $\mathfrak q$、底上固有な閉部分スキーム $W$ をとる。各 $W\_p$ は非空の真部分で、各 $Y\_p$ は正規かつ有理Gorensteinとする。各ファイバーに適合するArtinスタックによるクレパント解消と安定化群の標準簡約をもち、それらの空間・射が底との積から来るという仮定のもとで、$p\mapsto\mathrm{mld}\_{W\_p}(Y\_p,\mathfrak q\_p)$ は閉点上で下半連続である。この積の仮定を外す問題は残る。

### 次元上界（Corollary 1.4）

既約部分多様体 $W$ の生成点 $\eta\_W$ について
$$
\mathrm{mld}\_{\eta\_W}(Y,\Delta\_Y)\le\dim Y.
$$
等号なら $W$ は境界の台の外にある一点である。

## 証明の見取り図

弧空間で極小対数的食い違いを表すEin–Mustaţă–Yasudaの公式に変数変換を施し、滑らかなスタック上の積分へ移す。Artinスタックから元の空間への射は一般には固有でないため、安定化群を簡約して得るDeligne–Mumfordスタック上で弧の像を追跡する。この段階で固有性を使えることが、特殊化を比較するために効く。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.30971)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.30971v1) — §1, subsections 1.1–1.5
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2、Corollary 1.4。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.30971v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
