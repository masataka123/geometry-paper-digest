---
layout: paper
title: On quasi-Albanese morphisms for log canonical Calabi-Yau pairs II
title_ja: 対数的標準Calabi–Yau対の準Albanese射と双対複体の分解
authors: Yiming Zhu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Centering on quasi-Albanese morphisms, we prove several structural theorems for Calabi-Yau pairs.
topic: algebraic-geometry
tags:
- calabi-yau-geometry
- singularities
- birational-geometry
- toric-geometry
- minimal-model-program
arxiv_id: 2610.32782v1
arxiv_url: https://arxiv.org/abs/2610.32782
arxiv_submitted: '2026-10-23'
arxiv_updated: '2026-10-23'
summary: 射影的な対数的標準Calabi–Yau対について、klt部分からの準Albanese射が余次元1で固有なら、実際に固有となり、有限被覆後に対が直積分解することを示す。固有性を仮定しない場合には、適切なモデルと有限被覆の後で境界の双対複体を底とファイバーのjoinにホモトピー分解する。
abstract_en: Centering on quasi-Albanese morphisms, we prove several structural theorems for Calabi-Yau pairs.
summary_en: ''
abstract_ja: 準Albanese射を通じて対数的標準Calabi–Yau対の構造を明らかにする。klt部分の準Albanese射が余次元1で固有な場合には、射を準アーベル多様体のトーリックコンパクト化へ延長し、適切な有限Galois被覆の後で対の直積分解を得る。また、この固有性条件なしでも、dltモデルと有限底変換を用いることで、境界の双対複体を底空間と幾何学的一般ファイバーの双対複体のjoinとホモトピー同値にする。
abstract_source_url: https://arxiv.org/abs/2610.32782
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.32782v1](https://arxiv.org/abs/2610.32782)
- **著者:** Yiming Zhu
- **初回投稿日:** 2026-10-23
- **最終更新日:** 2026-10-23
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

滑らかなCalabi–Yau多様体の分解定理は、有限被覆の後でアーベル的な方向と残りの成分を分離する。特異点と境界を許す対数的標準な対では、Albanese射の族が一様にならない例があり、同じ形の分解を無条件に期待できない。本論文はklt部分の準Albanese射に着目し、分解を回復する条件を研究する。

主結果は、準Albanese射が余次元1で固有なら、全体で固有になり、準アーベル多様体のトーリックコンパクト化に延長できるというものである。さらに有限Galois被覆を施すと、正規化した底変換がファイバーと底の直積になる。

固有性を課さない場合には、対そのものではなく境界の双対複体に分解が残る。適切な双有理モデルと有限被覆の後で、全体の双対複体はファイバー側と底側の双対複体のjoinにホモトピー同値になる。幾何学的な直積分解と位相的な分解を区別して扱う点が重要である。

## 背景と問題設定

対象は射影的な対数的標準対 $(X,D\_X)$ で

$$
K\_X+D\_X\sim\_{\mathbb Q}0
$$

を満たすものである。klt locusを $X^0$ とし、その準Albanese射を $\alpha:X^0\to G$ と書く。準アーベル多様体 $G$ はアーベル多様体の代数的トーラスによる拡大であり、そのトーリックコンパクト化とはトーラス方向をコンパクト化して得るものを指す。

「余次元1で固有」とは、底の余次元2以上の閉部分集合を取り除くと固有になることをいう。Introductionは、Calabi–Yau条件を対数的小平次元が零という条件まで弱めると、これだけでは全体の固有性が従わない例を挙げる。

## 主結果

### 固有性と有限被覆後の直積分解（Theorem 1.1）

$\alpha$ が余次元1で固有なら、$\alpha$ は固有である。さらに全lc中心と交わる開集合 $U\subset X$ が存在し、その上で境界は係数1の部分と一致し、$(U,D\_X|\_U)$ は自己交叉を持たないトロイダル対となる。

準アーベル多様体 $G$ の射影的トーリックコンパクト化 $(Y,D\_Y)$ と、$\alpha$ を延長する射 $f:X\to Y$ が存在する。$G$ 上でエタールな有限Galois被覆 $q:Z\to Y$ を取ると、$D\_Z=q^{-1}D\_Y$ として

$$
(X,D\_X)\times\_Y Z\cong(F,D\_F)\times(Z,D\_Z)
$$

が $Z$ 上で成り立つ。左辺のファイバー積は通常のファイバー積の正規化を意味する。従って、単に一般ファイバーが互いに双有理であるという以上の、被覆後の対としての分解を与える。

### 準Albanese次元が最大の場合（Corollary 1.2）

$\dim X=\dim G$ なら、$(X,D\_X)$ 自体が $G$ のトーリックコンパクト化である。特に

$$
D\_X\text{ は被約},\qquad X\setminus D\_X\cong G
$$

となる。この系の仮定にはTheorem 1.1の固有性条件を別途付け加えていない。

### 双対複体のjoin分解（Theorem 1.3）

固有性条件を置かず、$G$ の標準コンパクト化 $(P\_A,H)$ を取る。まずcrepantな双有理縮約により $\mathbb Q$-factorial dlt Calabi–Yau対 $(W,D\_W)$ を取り、準Albanese射を $W\to P\_A$ に延長する。次に $G$ 上でエタールな有限Galois射 $(Z,D\_Z)\to(P\_A,H)$ を取る。

$W\_Z$ を $W\times\_{P\_A}Z$ の正規化、$p:W\_Z\to W$ とし、$K\_{W\_Z}+D\_{W\_Z}=p^\ast (K\_W+D\_W)$ で境界を定める。幾何学的一般ファイバー上の対を $(F,D\_F)$ とすると、

$$
\mathcal D(D\_{W\_Z}^{=1})\simeq\mathcal D(D\_F^{=1})\ast \mathcal D(D\_Z)
$$

というホモトピー同値を得る。$\ast $ はjoinである。この結論は双対複体についてのもので、固有性なしの対の直積分解を主張してはいない。

## 証明の見取り図

固有性を仮定する場合、まずdlt対に対してAmbroのisotriviality定理を用い、単項付値の空間からfanを作る。そのfanがトーリックコンパクト化を与え、射の延長と直積分解につながる。lc対へはlc中心の一般点でのトロイダル性を用いて拡張する。

双対複体については、垂直境界の複体から底の複体への写像を調べ、MMPと次元に関する帰納法でホモトピー同値を得る。水平lc中心のファイバーが連結となる底変換をKollárのsource-spring理論で用意し、単体複体の議論によりjoin分解へ進む。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.32782)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.32782v1) — Section 1, pp. 1–4（Section 2の前まで）
- **Introduction中で言及された主要結果:** Theorem 1.1, Corollary 1.2, Theorem 1.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.32782v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
