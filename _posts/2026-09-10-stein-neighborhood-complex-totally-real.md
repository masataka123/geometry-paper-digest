---
layout: paper
title: "Stein neighborhood bases for complex--totally real unions"
title_ja: "複素部分多様体と全実部分多様体の和のStein近傍基"
authors: "Ovidiu Preda"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
arxiv_abstract: >-
  We study Stein neighborhood bases for unions of closed complex and totally real submanifolds, with particular attention to a linear configuration with noncompact intersection. We prove that the set $X=\{w=0\}\cup\{\Im z=\Im w=0\}\subset\C^2$ admits a Stein neighborhood basis. The proof starts from the explicit plurisubharmonic defining function $ρ(z,w)=(\Im w)^2+\sinh^2(\Im z)|w|^2$ and obtains the necessary non-uniform control at infinity by adding a locally uniformly convergent series of nonnegative plurisubharmonic terms constructed by Oka--Weil approximation. We also give an example of a closed complex submanifold and a closed totally real submanifold in $\C^2$ with compact intersection whose union has no Stein neighborhood basis, showing that the unrestricted union problem has a negative answer.
topic: several-complex-variables
tags:
  - stein-geometry
  - pluripotential-theory
  - oka-theory
arxiv_id: "2609.10191v1"
arxiv_url: "https://arxiv.org/abs/2609.10191"
arxiv_submitted: "2026-09-09"
arxiv_updated: "2026-09-09"
summary: >-
  $\mathbb C^2$内の複素直線と最大全実平面が非コンパクトに交わる基本配置についてStein近傍基の存在を証明する。一方で、閉複素部分多様体と閉全実部分多様体の和が常にStein近傍基を持つという一般的主張には、Hartogs型障害による反例を与える。
abstract_en: ""
summary_en: >-
  The paper studies when a union of a closed complex submanifold and a closed totally real submanifold can be approximated from outside by Stein domains. It settles a basic noncompact linear configuration in $\mathbb C^2$ positively by constructing a tailored plurisubharmonic exhaustion with nonuniform control at infinity. The construction uses localized Oka--Weil approximation. A separate example shows that no unrestricted union theorem is possible, because a hole in the intersection produces a Hartogs-type obstruction.
abstract_ja: >-
  閉複素部分多様体と閉全実部分多様体の和に対するStein近傍基を研究し、非コンパクトな交わりを持つ線形配置に焦点を当てる。集合$X=\{w=0\}\cup\{\operatorname{Im}z=\operatorname{Im}w=0\}\subset\mathbb C^2$がStein近傍基を持つことを証明する。明示的な多重劣調和定義関数に、Oka--Weil近似から作る非負項の局所有様収束級数を加え、無限遠で必要な非一様制御を得る。他方、コンパクトな交わりを持ちながら和がStein近傍基を持たない例も構成し、無条件の一般化を否定する。
abstract_source_url: "https://arxiv.org/abs/2609.10191"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.10191](https://arxiv.org/abs/2609.10191)
- **著者:** Ovidiu Preda
- **初回投稿日:** 2026年9月9日
- **最終更新日:** 2026年9月9日
- **主分類・副分類:** math.CV（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

閉集合がStein近傍基を持つとは、任意の開近傍の内側にその集合を含むStein開集合を選べることをいう。この性質があれば、幾何的に特異な集合を正則近似や層コホモロジーの標準的道具が使える領域で近似できる。

Stein複素部分多様体と閉全実部分多様体はそれぞれ良い近傍定理を持つが、その和にも同じ性質が自動的に継承されるわけではない。複素部分と全実部分の交わりが正則凸性や解析接続に与える影響が問題となる。

本論文は$\mathbb C^2$の複素直線$A=\mathbb C\times\{0\}$と最大全実平面$M=\{\operatorname{Im}z=\operatorname{Im}w=0\}$の和を扱う。交わり$A\cap M=\mathbb R\times\{0\}$は非コンパクトであるにもかかわらず、$A\cup M$がStein近傍基を持つことを示す。

さらに、交わりに「穴」がある別の配置では任意のStein近傍が余分な解析円板を含むことを示す。したがって閉複素部分多様体と閉全実部分多様体の任意の和に対する一般的な肯定命題は成立しない。

## 背景と問題設定

Colţoiuは複素直線と全実平面の和、および一般の閉複素・閉全実部分多様体の和がStein近傍基を持つかを問うた。既存のコンパクトな和の定理では、交わりに正則凸性を課してHartogs現象を防ぐ。本論文の正の例は非コンパクトな交わりを持つため、一定幅の劣位集合だけでは任意の近傍に収める制御が不足する。

## 主結果

### 線形配置のStein近傍基（Theorem 3.1）

座標$(z,w)=(x+iy,u+iv)$を持つ$\mathbb C^2$で

$$
X=\{w=0\}\cup\{y=0,\ v=0\}
$$

と置くと、$X$はStein近傍基を持つ。中心となる非負多重劣調和関数は

$$
\rho(z,w)=v^2+\sinh^2(y)|w|^2
$$

であり、その零点集合はちょうど$X$である。任意の開近傍$U\supset X$ごとに補正項を加えて$X$上で零、$\mathbb C^2\setminus U$上で1より大きい多重劣調和関数$\Psi_U$を作り、$\{\Psi_U<1\}$の$X$を含む連結成分を求めるStein近傍とする。

### 無条件の和定理への反例

$A=\mathbb C\times\{0\}$と$M=\{(z,w):|z|=1,\ w\in\mathbb R\}$の和はStein近傍基を持たない。任意のStein近傍は解析円板の最大値原理により$\Delta\times\mathbb R$を含まねばならず、$A\cap M=\partial\Delta\times\{0\}$の穴が余分な点を近傍内へ強制する。

## 証明の見取り図

$\rho$のLevi行列を直接計算して半正定値性を確認する。ただし$X$は非コンパクトなので、固定した$\rho$の劣位集合だけでは任意の$U$へ収まらない。そこで球を順に大きくし、すでに処理した球上では極小だが次のコンパクトな悪い部分では大きい多項式$f_{n,j}=wh_{n,j}$をOka--Weil近似で構成する。

級数$\Psi_U=C\rho+\sum_{n,j}(\operatorname{Im}f_{n,j})^2$は局所有様収束し、多重劣調和性と$X$上での消滅を保つ。補集合上で1を超えるよう帰納的に選ぶため、所要の劣位集合が得られる。反例では円板$f_t(\zeta)=(\zeta,t)$とStein exhaustionへの最大値原理を用い、円板族全体が近傍内に留まることを示す。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.10191](https://arxiv.org/abs/2609.10191)
- **Introduction:** Section 1, pp. 1--3
- **Introduction中で言及された主要定理番号:** Introductionでは主結果を概略提示し、正式な番号はTheorem 3.1
- **論文構成の説明:** p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
