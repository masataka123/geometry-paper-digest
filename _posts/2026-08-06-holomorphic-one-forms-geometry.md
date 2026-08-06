---
layout: paper
title: "Geometry of Holomorphic One-forms on Smooth Projective Varieties"
title_ja: "滑らかな射影多様体上の正則1形式の幾何"
authors: "Jiabin Du, Feng Hao, Haoyuan Li, Zichang Wang"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
arxiv_id: "2606.08185v1"
arxiv_url: "https://arxiv.org/abs/2606.08185v1"
arxiv_submitted: "2026-06-06"
arxiv_updated: "2026-06-06"
summary: >-
  単純abelian多様体への射が滑らかであることを、引き戻しが零点を持たない正則1形式の存在で特徴づける。正則1形式の零点集合の線形性が成立する広いクラスを示す一方、abelian多様体内の滑らかな4次元部分多様体で低位集合が非線形になる例も構成する。
abstract_en: >-
  In this article, we show that any morphism $f$ from a smooth projective variety $X$ to a simple abelian variety $A$ is smooth, if and only if there exists a holomorphic 1-form $ω$ on $A$ such that $f^*ω$ has no zero. As the key ingredient in the proof, we show any $\mathbb{Z}$-homology fibre bundle morphism is without blow-up in codimension 0 in the sense of Sabbah. Furthermore, we investigate the structure of the spaces of holomorphic 1-forms with zeros, and show that they are linear for large classes of varieties. Also, we construct a delicate example of a smooth projective subvariety of an abelian variety for which the holomorphic 1-forms with positive dimensional zero loci do not form a linear subset. Finally, we study algebraic surfaces admitting holomorphic 1-forms that have zeros and do not arise from cohomology jump loci.
summary_en: ""
abstract_ja: >-
  滑らかな射影多様体 $X$ から単純abelian多様体 $A$ への射 $f$ が滑らかであることと、$f^*\omega$ が零点を持たないような $A$ 上の正則1形式 $\omega$ が存在することが同値だと示す。鍵として、$\mathbb Z$-homology fibre bundleはSabbahの意味でcodimension 0のblow-upを持たないことを証明する。さらに零点をもつ正則1形式の空間が線形になる多様体の広いクラスを与え、正次元の零点集合をもつ形式が非線形な集合をなすabelian多様体内の滑らかな部分多様体も構成する。
abstract_source_url: "https://arxiv.org/abs/2606.08185v1"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "http://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2606.08185v1](https://arxiv.org/abs/2606.08185v1)
- **著者:** Jiabin Du, Feng Hao, Haoyuan Li, Zichang Wang
- **初回投稿日:** 2026年6月6日
- **最終更新日:** 2026年6月6日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)

## 要約

不正則射影多様体の正則1形式はAlbanese写像と密接に結びつき、その零点は写像の特異性を反映する。しかし零点はblow-up、被覆、base changeなどで複雑に変化するため、どの形式が零点を持つかを構造的に記述するのは難しい。

第一の主結果は、単純abelian多様体 $A$ への射 $f:X\to A$ の滑らかさを、$A$ 上のただ一つの正則1形式の引き戻しが零点を持たないことで特徴づける。これは単純性を外すと成立せず、Introductionに具体的なblow-up反例も示される。

さらに、零点集合の余次元で層別化した集合 $W^i(X)$ を調べる。good minimal modelをもつ場合、Albanese多様体が単純な場合、または次元3以下の場合には、零点をもつ形式全体が有限個のベクトル部分空間の和になる。一方、abelian 6-fold内に $W^3(X)$ が非線形となる滑らかな4-foldを構成し、期待されていた一般的線形性に反例を与える。

## 背景と問題設定

正則1形式の零点集合を $Z(\omega)$ とし、$n=\dim X$ に対して

$$
W^i(X)=\{\omega\in H^0(X,\Omega_X^1)\mid \operatorname{codim}Z(\omega)\leq i\}
$$

と置く。これは原点を頂点とする代数的coneで、cohomology jump lociに由来する既知の線形部分 $V^i(X)$ を含む。問題は $W^i(X)$ 自体がいつ有限個のベクトル部分空間の和になるかである。

もう一つの道具は相対conormal空間である。適切な射 $f$ が「codimension 0でblow-upを持たない」とは、相対conormal空間から底空間への射が等次元であることをいう。論文はlimit relative conormal vectorsによって射の特異性と1形式の零点を結ぶ。

## 主結果

### Theorem 1.1（滑らかさの特徴づけ）

滑らかな射影多様体 $X$ から単純abelian多様体 $A$ への射 $f:X\to A$ について、次は同値である。

1. $f$ は滑らかである。
2. ある $\omega\in H^0(A,\Omega_A^1)$ が存在して $f^*\omega$ は零点を持たない。

この結果は先行予想を完全に解決し、単純性の仮定が必要であることも既知の例で確認される。

### Theorem 1.2（homology fibre bundleのconormal幾何）

$f:X\to Y$ を代数多様体間の固有射とし、$X$ は滑らか、$Y$ は正規とする。すべての整数 $i$ について $R^if_*\mathbb Z$ が $Y$ 上の $\mathbb Z$-local systemならば、$Y$ は滑らかで、$f$ はcodimension 0でblow-upを持たない。これは未解決のde Bobadilla–Kollár予想の「滑らかさ」より弱いが、隠れた非平坦性を排除してTheorem 1.1を導くのに十分である。

### Theorem 1.3（零点をもつ形式の線形性）

滑らかな $n$ 次元射影多様体 $X$ が、(i) good minimal modelをもつ、(ii) 単純Albanese多様体をもつ、(iii) $n\leq3$、のいずれかを満たすなら、$W^n(X)$ は $H^0(X,\Omega_X^1)$ の有限個のベクトル部分空間の和である。

### Theorem 1.4（低位集合の非線形例）

abelian 6-foldの中に、$W^3(X)$ が線形でない滑らかな4次元射影部分多様体 $X$ が存在する。これはabelian多様体の滑らかな部分多様体なら低位集合も線形だろうという期待に反例を与える。

## 証明の見取り図

Theorem 1.1ではlimit relative conormal vectorsを用い、零点のない引き戻し形式から得られる位相的局所自明性をTheorem 1.2の等次元性へ接続する。$A$ の単純性により零点をもつ形式の集合は零空間か全空間かに二分され、零点のない一形式の存在が射の滑らかさを強制する。線形性結果にはminimal modelの既知結果、単純Albaneseの場合のTheorem 1.1、低次元分類をそれぞれ用いる。非線形例は単純abelian 5-foldの一般超平面切断と曲線を選び、その直積と楕円曲線の中で精密な超平面切断を構成する。

## 原論文との対応

- **Abstractページ:** [arXiv:2606.08185v1](https://arxiv.org/abs/2606.08185v1)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorems 1.1–1.4
- **論文構成の説明:** Introduction末尾の各主結果の説明
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
