---
layout: paper
title: "On the image of Hitchin morphism for some classical groups on algebraic suefaces"
title_ja: "代数曲面上の古典群に対する Hitchin 写像の像"
authors: "Artan Sheshmani, Jianping Wang, Xiaopeng Xia"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
tags:
  - symplectic-contact-geometry
arxiv_id: "2606.17505v1"
arxiv_url: "https://arxiv.org/abs/2606.17505v1"
arxiv_submitted: "2026-06-16"
arxiv_updated: "2026-06-16"
summary: >-
  高次元では一般に全射でない Hitchin 写像について、Chen–Ngô の spectral base が実際に像を与えるかを調べる。滑らかな射影曲面上の奇数階特殊線形群、および曲線の積上の特殊線形群とシンプレクティック群で、この予想を肯定する。
abstract_en: ""
summary_en: >-
  This work studies the range of the Hitchin morphism for Higgs bundles on smooth projective surfaces. It proves that every point of the spectral base is realized for special linear groups of odd rank. The same conclusion is obtained on products of smooth projective curves for special linear groups of arbitrary rank and for symplectic groups. The constructions use spectral covers, determinant corrections, and the involution attached to symplectic spectral data.
abstract_ja: >-
  滑らかな射影多様体上の $G$-Higgs 束のモジュライから Hitchin base への写像を扱う。高次元ではこの写像は一般に全射でないが、その像は Chen–Ngô が導入した閉部分スキーム spectral base に含まれる。本論文は、曲面上の奇数階 $\mathrm{SL}_n$、ならびに曲線の積上の任意階 $\mathrm{SL}_n$ と $\mathrm{Sp}_{2n}$ について、像が spectral base 全体に一致することを証明する。
abstract_source_url: "https://arxiv.org/abs/2606.17505v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2606.17505v1](https://arxiv.org/abs/2606.17505v1)
- **著者:** Artan Sheshmani, Jianping Wang, Xiaopeng Xia
- **初回投稿日・最終更新日:** 2026年6月16日（確認した v1）
- **主分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

曲線上では Hitchin 写像の全射性が知られる一方、高次元では一般に破れる。Chen–Ngô は Hitchin base の閉部分である spectral base $\mathscr B_{X,G}$ を導入し、写像がそこを経由することを示した。問題は各 $b\in\mathscr B_{X,G}$ のファイバーが空でないか、すなわち spectral morphism が全射かである。

論文は滑らかな射影曲面で三つの場合を解決する。$G=\mathrm{SL}_n$ で $n$ が奇数の場合に加え、曲面が二つの滑らかな射影曲線の積なら任意の $n$ の $\mathrm{SL}_n$ と $\mathrm{Sp}_{2n}$ を扱う。

中心となるのは、既知の $\mathrm{GL}_n$ の場合から所望の構造群へ戻す際の制約を制御することである。特殊線形群では行列式を自明化し、シンプレクティック群では交代形式と spectral cover の自然な対合を組み込む。

## 背景と問題設定

$G$-Higgs 束は主 $G$-束 $E$ と、$\theta\wedge\theta=0$ を満たす
$$
\theta\in H^0\!\left(X,\operatorname{ad}(E)\otimes\Omega_X^1\right)
$$
の組である。Hitchin 写像 $h_{X,G}:\mathscr M_{X,G}\to\mathscr A_{X,G}$ は高次元では一般に全射ではなく、spectral morphism
$$
\operatorname{sd}_{X,G}:\mathscr M_{X,G}\longrightarrow\mathscr B_{X,G}
$$
へ因子化する。Chen–Ngô の予想は、任意の $b\in\mathscr B_{X,G}$ に対して $h_{X,G}^{-1}(b)\ne\varnothing$ というものだった。

## 主結果

### 主定理（Theorem 1.2）

$X$ を滑らかな射影曲面とする。このとき $\operatorname{sd}_{X,G}$ は、(1) $G=\mathrm{SL}_n$ かつ $n$ が奇数、(2) $X=C_1\times C_2$ かつ $G=\mathrm{SL}_n$（任意の $n$）、(3) $X=C_1\times C_2$ かつ $G=\mathrm{Sp}_{2n}$、の各場合に全射である。したがって、これらの場合には Hitchin 写像の像が spectral base と一致する。

## 証明の見取り図

$\mathrm{SL}_n\hookrightarrow\mathrm{GL}_n$ を用い、spectral datum から spectral cover の正規化上の因子を押し出して Higgs 束を作る。奇数階の場合は因子と線束による twist を選び、行列式を自明にできる。曲線の積では、曲面の spectral cover の各成分の正規化が滑らかな曲線の積として記述でき、同じ twist 法が任意階で働く。$\mathrm{Sp}_{2n}$ では spectral cover の自然な対合を利用して完全交代形式と自己反随伴性条件を実現する。

## 原論文との対応

- **Abstractページ:** [arXiv:2606.17505v1](https://arxiv.org/abs/2606.17505v1)
- **Introduction:** Section 1, pp. 2–4
- **主要定理:** Conjecture 1.1, Theorem 1.2
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
