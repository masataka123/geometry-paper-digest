---
layout: paper
title: Good minimal models with nowhere vanishing holomorphic $1$-forms
title_ja: 零点をもたない正則1形式と良い極小モデルのアーベル因子
authors: Feng Hao, Zichang Wang, Lei Zhang
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Popa and Schnell show that any holomorphic 1-form on a smooth projective variety of general type has zeros. In this article, we show that a smooth good minimal model has a holomorphic 1-form without zero if and only if it admits an analytic fiber bundle structure over a positive dimensional abelian variety.
topic: algebraic-geometry
tags:
- minimal-model-program
- birational-geometry
- calabi-yau-geometry
arxiv_id: 2412.12582v2
arxiv_url: https://arxiv.org/abs/2412.12582
arxiv_submitted: '2024-12-17'
arxiv_updated: '2026-11-05'
summary: 良い極小モデル上の零点をもたない独立な正則1形式を、アーベル多様体への滑らかな等自明射と結び付ける。有限エタール被覆後の直積分解を示す一方、単に良い極小モデルをもつ多様体では双有理な分解までとなる。
abstract_en: Popa and Schnell show that any holomorphic 1-form on a smooth projective variety of general type has zeros. In this article, we show that a smooth good minimal model has a holomorphic 1-form without zero if and only if it admits an analytic fiber bundle structure over a positive dimensional abelian variety.
summary_en: ''
abstract_ja: 標準因子が半豊富な良い極小モデルでは、各点で独立な正則1形式の存在がアーベル多様体への滑らかな等自明射をもたらし、有限エタール被覆の後に直積となる。基礎となる分解定理は、一般ファイバーの標準因子が有理自明なファイブレーションとアーベル多様体への射を扱う。非極小の滑らかな多様体へ戻ると、結論は有限エタール被覆後の双有理分解になる。
abstract_source_url: https://arxiv.org/abs/2412.12582
license_name: CC0 1.0 Universal
license_url: http://creativecommons.org/publicdomain/zero/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2412.12582v2](https://arxiv.org/abs/2412.12582)
- **著者:** Feng Hao, Zichang Wang, Lei Zhang
- **初回投稿日:** 2024-12-17
- **最終更新日:** 2026-11-05
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [CC0 1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)

## 要約

一般型の滑らかな射影多様体では、正則1形式は必ず零点をもつ。一方、アーベル多様体では平行な1形式に零点がない。この対比から、零点をもたない正則1形式があると、多様体の中にアーベル多様体に由来する方向が現れるのか、という構造問題が生じる。

本論文は、標準因子が半豊富な滑らかな良い極小モデルについて、この期待を複数の1形式を含む形で実現する。各点で独立な1形式の本数に対応する次元のアーベル多様体への射が存在し、その射は滑らかで等自明となる。適切な有限エタール被覆後には実際の直積分解が得られる。

ただし、元の多様体が良い極小モデルそのものではなく、それをもつだけの場合には、有限被覆後の双有理な直積分解を結論する。この差は技術上の留保だけではなく、Introductionに示される非極小の例が、一般には滑らかな束構造を期待できないことを示している。

## 背景と問題設定

ここで良い極小モデルとは、標準因子が半豊富である極小モデルを指す。正則1形式 $\alpha\_1,\ldots,\alpha\_g$ が各点で線形独立であることは、その評価が至る所で階数 $g$ をもつ条件である。一本の場合は零点をもたないことに一致する。

Popa–Schnellの一般型に対する零点定理は、こうした1形式の存在が多様体の双有理型を強く制約することを示す。著者らは、標準束の半豊富性と一般ファイバーの標準束の自明性を使い、その制約をアーベル方向の分離として具体化する。

## 主結果

### 特異点を許したファイブレーションの分解（Theorem 1.1）

適切なisogenyの後、対象となるアーベル多様体への射は直積になる。具体的には、$f:X\to S$ を正規射影多様体のファイブレーション、$h:X\to B$ をアーベル多様体への射とする。$X$ は $\mathbb Q$ 因子化可能でcanonical特異点をもち、$K\_X$ は半豊富と仮定する。一般ファイバー $F$ が

$$
K\_F\sim\_{\mathbb Q}0,\qquad h|\_F:F\longrightarrow B\ \text{が全射}
$$

を満たすとする。$h$ のStein分解を $X\to A\to B$ とすれば $A$ もアーベル多様体であり、あるisogeny $A'\to A$ に対して

$$
X\times\_A A'\simeq Z'\times A'
$$

となる。ここで $Z'$ は対応するファイバーである。局所的な分解を一つの大域的な有限被覆でそろえることが主張の要点となる。

### 独立な1形式と滑らかな等自明射（Theorem 1.2）

滑らかな良い極小モデル $X$ が各点で独立な $g$ 本の正則1形式をもつことは、次元が少なくとも $g$ のアーベル多様体 $A$ への等自明な滑らかな射をもつことと同値である。さらに有限エタール被覆 $A'\to A$ によって

$$
X\times\_A A'\simeq Y\times A',\qquad \dim A\geq g
$$

となる。従って1形式の非消失は、単なるKodaira次元の制限ではなく、実際の大域的ファイブレーションを生む。

### 非極小の場合に残る双有理分解（Theorem 1.3）

滑らかな射影多様体 $X$ が各点で独立な $g$ 本の1形式をもち、良い極小モデルをもつとする。このとき有限エタール被覆 $X'\to X$ が存在し、

$$
X'\dashrightarrow Y\times A',\qquad \dim A'\geq g
$$

という双有理同値が得られる。ここでは $X'$ 自体の直積同型や滑らかな等自明射までは主張していない。Introductionのblow-upを用いた例は、この区別が必要であることを説明する。

## 証明の見取り図

一般ファイバーのBeauville–Bogomolov型分解から、アーベル方向を取り出す。しかし、ファイバーごとの分解は非標準的であり、そのままでは族全体の分解にならない。Introductionでは、大域的な偏極を選び、偏極を保つ同型の関手を使って分解をそろえることが重要な工夫として説明される。

これにより共通のisogenyを得て、標準因子の半豊富性と合わせて直積構造を大域化する。良い極小モデルに対する構造定理を先に証明し、元の非極小多様体へは双有理写像を通じて結論を戻す。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2412.12582)
- **Introduction:** [PDF](https://arxiv.org/pdf/2412.12582v2) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2, 1.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2412.12582v2
- **確認したライセンス:** [CC0 1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)
- **source\_scope:** Abstract and Introduction
